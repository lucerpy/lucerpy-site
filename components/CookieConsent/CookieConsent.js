'use client';

import Script from 'next/script';

// Silktide keeps a small floating icon around after the banner is dismissed,
// so visitors can reopen preferences later - by design, not a bug. The user
// asked for it to go away once a decision is made instead, so this hides it
// as soon as any of the three action buttons is clicked. Matched by the
// exact button text set in the `text` config below, since Silktide doesn't
// expose a "decision made" callback of its own to hook into.
const DECISION_BUTTON_LABELS = ['Aceitar todos', 'Rejeitar não essenciais', 'Salvar e fechar'];

// Silktide's own localStorage flag (stcm.hasConsented) never expires on its
// own - once set, the banner stays gone forever. We want it to come back
// periodically instead, so this layers our own timestamp on top: if it's
// older than CONSENT_TTL_MS (or missing), Silktide's consent keys are wiped
// before init() runs, so the library sees a "fresh" visitor and prompts
// again. Same button-click hook as hideIconOnDecision, since that's the
// only reliable "a decision was made" signal Silktide exposes.
const CONSENT_TIMESTAMP_KEY = 'lucerpy-cookie-consent-ts';
const CONSENT_TTL_MS = 180 * 24 * 60 * 60 * 1000; // 6 months

function clearExpiredConsent() {
  try {
    const ts = localStorage.getItem(CONSENT_TIMESTAMP_KEY);
    if (ts && Date.now() - parseInt(ts, 10) < CONSENT_TTL_MS) return;
    Object.keys(localStorage)
      .filter((key) => key.startsWith('stcm.') || key.startsWith('silktideCookie'))
      .forEach((key) => localStorage.removeItem(key));
  } catch (e) {
    // localStorage unavailable - Silktide falls back to always showing the
    // prompt on its own, nothing extra to do here.
  }
}

function hideIconOnDecision() {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target.closest('button') : null;
    if (!target) return;
    const text = target.textContent?.trim();
    if (!text || !DECISION_BUTTON_LABELS.some((label) => text.includes(label))) return;

    const icon = document.querySelector('#stcm-icon');
    if (icon instanceof HTMLElement) {
      icon.style.display = 'none';
    }

    try {
      localStorage.setItem(CONSENT_TIMESTAMP_KEY, String(Date.now()));
    } catch (e) {
      // localStorage unavailable - nothing to persist, same as Silktide's
      // own fallback behaviour.
    }
  });
}

function initSilktide() {
  clearExpiredConsent();

  window.silktideConsentManager.init({
    backdrop: {
      show: true,
    },
    icon: {
      position: 'bottomLeft',
    },
    prompt: {
      position: 'center',
    },
    consentTypes: [
      {
        id: 'essenciais',
        label: 'Essenciais',
        description:
          '<p>Esses cookies são necessários para o funcionamento correto do site e não podem ser desativados. Eles ajudam em coisas como login e a definição das suas preferências de privacidade.</p>',
        required: true,
      },
      {
        id: 'an_lise',
        label: 'Análise',
        description:
          '<p>Esses cookies nos ajudam a melhorar o site, rastreando quais páginas são mais populares e como os visitantes navegam pelo site.</p>',
        required: false,
        gtag: 'analytics_storage',
      },
      {
        id: 'marketing',
        label: 'Marketing',
        description:
          '<p>Esses cookies são usados por nós e por nossos parceiros de publicidade para mostrar anúncios relevantes neste site e em outros lugares, e para medir o desempenho dessas campanhas.</p>',
        required: false,
        gtag: ['ad_storage', 'ad_user_data', 'ad_personalization'],
        scripts: [
          {
            url: 'https://www.googletagmanager.com/gtm.js?id=GTM-KT4RRQWQ',
            load: 'async',
          },
        ],
        onAccept: function () {
          // Google Tag Manager (GTM-KT4RRQWQ) - só carrega depois do consentimento
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        },
      },
    ],
    text: {
      prompt: {
        description:
          '<p>Usamos cookies em nosso site para melhorar sua experiência de usuário, oferecer conteúdo personalizado e analisar nosso tráfego.</p>',
        acceptAllButtonText: 'Aceitar todos',
        acceptAllButtonAccessibleLabel: 'Aceitar todos os cookies',
        rejectNonEssentialButtonText: 'Rejeitar não essenciais',
        rejectNonEssentialButtonAccessibleLabel: 'Rejeitar todos não essenciais',
        preferencesButtonText: 'Preferências',
        preferencesButtonAccessibleLabel: 'Alterar preferências',
      },
      preferences: {
        title: 'Personalize suas preferências de cookies',
        description:
          '<p>Respeitamos o seu direito à privacidade. Você pode optar por não permitir alguns tipos de cookies. Suas preferências de cookies serão aplicadas em todo o nosso site.</p>',
        saveButtonText: 'Salvar e fechar',
        saveButtonAccessibleLabel: 'Salve suas preferências de cookies',
        creditLinkText: 'Feito com Silktide',
        creditLinkAccessibleLabel: 'Feito com Silktide',
      },
    },
  });

  hideIconOnDecision();
}

export default function CookieConsent() {
  // Self-hosted (public/vendor/silktide/) instead of cdn.jsdelivr.net - a
  // third-party origin means its own DNS lookup + TLS handshake before the
  // first byte, on top of whatever the CDN's own latency is. Same-origin
  // reuses the connection the page itself is already using, and no
  // integrity/crossOrigin attributes are needed since it's not cross-origin
  // anymore.
  return (
    <Script
      src="/vendor/silktide/silktide-consent-manager.js"
      strategy="afterInteractive"
      onLoad={initSilktide}
    />
  );
}
