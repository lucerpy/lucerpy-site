// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Button from "@/components/Button/Button";

import { LogoMarquee } from "@/components/originkit/ui/hero-22/logo-marquee";

// Pulls in the ogl WebGL library - keep it out of the home page's initial
// bundle and fetch it only in the browser, same pattern as CtaBackground.
const DottedBackground = dynamic(
  () => import("@/components/originkit/ui/hero-26/dotmatrix-hero").then((m) => m.DottedBackground),
  { ssr: false }
);

export const Section27Hero = () => {
  // The WebGL init competes with the hero's own text/CTAs for main-thread
  // time at the exact moment they're painting, so it still needs to be
  // deferred a beat. But waiting for the whole page's `load` event (every
  // image/script on the page, including stuff far below the fold) made the
  // background sit blank for however long the *entire* page took on a real
  // connection - it just needs a short, fixed head start over the critical
  // content, not to wait for everything else too.
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(() => setShowBackground(true), { timeout: 400 });
    } else {
      timeoutId = window.setTimeout(() => setShowBackground(true), 300);
    }

    return () => {
      if (idleId !== undefined) w.cancelIdleCallback?.(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
  <section className="w-full bg-[#0C0D11]">
    <div className="relative flex w-full max-w-full flex-col items-center overflow-hidden bg-[#0C0D11]">
      {/* Fundo pontilhado full-bleed (Originkit hero-26, recolorido no verde da marca) */}
      <div className="fade-in fade-in-4 pointer-events-none absolute inset-0 z-0">
        {showBackground && (
          <DottedBackground
            bgColor="#0C0D11"
            colors={["#0C0D11", "#2B3D12", "#CCEC7B"]}
            frequency={1.5}
            speed={2}
            cellSize={10}
            gamma={5}
            paletteBias={8}
          />
        )}
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

          <h1
            className="fade-in fade-in-2 relative w-full text-balance text-center font-outfit text-[32px] min-[480px]:text-[40px] leading-[38px] min-[480px]:leading-[48px] font-bold tracking-[-0.8px] text-white ipad:text-[52px] ipad:leading-[57.6px] ipad:tracking-[-0.96px]"
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
