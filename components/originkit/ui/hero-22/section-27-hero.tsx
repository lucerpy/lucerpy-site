// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";

import { LogoMarquee } from "@/components/originkit/ui/hero-22/logo-marquee";

// Was the live WebGL dot-noise effect (ogl) - same call as the CTA
// backgrounds: a static abstract photo instead of a live canvas/WebGL
// effect. No shader compile, no ogl chunk, just an <img>.
const HERO_BG_IMAGE = "/hero-bg.webp";

export const Section27Hero = () => {
  return (
  <section className="w-full bg-[#0C0D11]">
    <div className="relative flex w-full max-w-full flex-col items-center overflow-hidden bg-[#0C0D11]">
      {/* Fundo full-bleed (foto abstrata estática, mesma família visual dos CTAs) */}
      <div className="fade-in fade-in-4 pointer-events-none absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          // Lets the Preloader (app/layout.js) know the hero is actually
          // ready to be seen, instead of always burning its 3s max-wait
          // safety timeout now that there's no WebGL onReady signal.
          onLoad={() => window.dispatchEvent(new Event("lucerpy:hero-ready"))}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,13,17,0.85) 0%, rgba(12,13,17,0.7) 45%, rgba(12,13,17,0.55) 75%, rgba(12,13,17,0.15) 92%, rgba(12,13,17,0) 100%)",
          }}
        />
      </div>

      {/* Headline + CTAs */}
      <section className="z-20 mt-12 mb-16 flex w-full max-w-[367px] flex-col items-center gap-5 px-4 ipad:mt-[74px] ipad:mb-24 ipad:max-w-[603px] desktop-sm:mt-20 desktop-sm:mb-32 ipad:gap-[50px] ipad:p-[10px]">
        <div className="flex w-full flex-col items-center gap-3.5 ipad:gap-2">
          <p
            className="fade-in fade-in-1 inline-block mb-5 rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/20 px-5 py-2.5 font-outfit text-[12px] font-semibold tracking-[0.1em] text-primary uppercase ipad:mb-6 ipad:px-6 ipad:py-3"
            style={{ backdropFilter: "blur(4px)" }}
          >
            Agência digital
          </p>

          {/* No fade-in here on purpose: an opacity:0 keyframe start makes
              Chrome skip this h1 as an LCP candidate at first paint, so the
              browser was picking a later, lower element as "largest
              contentful paint" instead - one that had to wait for the whole
              hero section above it to finish loading first. This is the
              actual LCP text, so it must render at full opacity immediately. */}
          <h1
            className="relative w-full text-balance text-center font-outfit text-[32px] min-[480px]:text-[40px] leading-[38px] min-[480px]:leading-[48px] font-bold tracking-[-0.8px] text-white ipad:text-[52px] ipad:leading-[57.6px] ipad:tracking-[-0.96px]"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
          >
            Seu digital no <span className="text-primary">próximo nível.</span>
          </h1>

          <p
            className="fade-in fade-in-3 w-full max-w-[320px] text-center font-inter text-[15px] sm:text-[16px] leading-[1.5] font-normal tracking-[-0.32px] text-[#A1A1AA] ipad:max-w-none ipad:w-full ipad:text-[17px] ipad:tracking-[-0.34px]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.7)" }}
          >
            UX/UI, sites, landing pages e automações construídas com estratégia
            para transformar visitantes em clientes reais.
          </p>
        </div>

        <div className="fade-in fade-in-4 flex w-full max-w-[320px] flex-col items-center gap-4 ipad:max-w-none ipad:w-auto ipad:flex-row ipad:items-start">
          <Button
            href="/contato"
            variant="primary"
            className="w-full ipad:w-auto"
          >
            Começar projeto →
          </Button>

          <Button
            href="/projetos"
            variant="secondary"
            className="w-full ipad:w-auto"
          >
            Ver portfólio
          </Button>
        </div>
      </section>

      {/* Faixa de confiança */}
      <section className="z-20 flex w-full flex-col items-center overflow-hidden border-t border-[#2D3039] bg-[#16181F] py-2 ipad:py-3">
        <LogoMarquee />
      </section>
    </div>
  </section>
  );
};
