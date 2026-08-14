'use client';

import Script from 'next/script';

function initSilktide() {
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
        onAccept: function () {
          console.log('Add logic for the required Essenciais consent type here');
        },
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
}

export default function CookieConsent() {
  return (
    <Script
      src="https://cdn.jsdelivr.net/gh/silktide/consent-manager@v2.0.1/silktide-consent-manager.js"
      integrity="sha384-5Pt34uiIbCsvfiiZXoLi4HRf/YBXjr9c8e+gYeVo9smUaInNHYVtc8NZ8wUnXJIq"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={initSilktide}
    />
  );
}
