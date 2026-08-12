// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";

import { LogoMarquee } from "@/components/originkit/ui/hero-22/logo-marquee";
import { NeuralDiagram } from "@/components/originkit/ui/hero-22/neural-diagram";

/** Public asset under /originkit/hero-22/ */
function asset(file: string) {
  return `/originkit/hero-22/${file}`;
}

export const Section27Hero = () => (
  <section className="w-full bg-[#0C0D11]">
    <div className="relative flex w-full max-w-full flex-col items-center overflow-hidden bg-[#0C0D11]">
      {/* Texturas laterais */}
      {["left-0", "right-0"].map((side) => (
        <span
          key={side}
          aria-hidden
          className={`pointer-events-none absolute top-0 z-0 block h-[817px] w-4 border-x border-solid border-[#2D3039] ipad:h-[1077px] ipad:w-8 desktop-sm:h-[817px] desktop-sm:w-[38px] ${side}`}
        >
          <span
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: `url(${asset("texture.png")})`,
              backgroundSize: "600px 621.6px",
              backgroundPosition: "top left",
            }}
          />
        </span>
      ))}

      {/* Headline + CTAs */}
      <section className="z-20 mt-12 flex w-full max-w-[367px] flex-col items-center gap-5 px-4 ipad:mt-[74px] ipad:max-w-[603px] desktop-sm:mt-20 ipad:gap-[50px] ipad:p-[10px]">
        <div className="flex w-full flex-col items-center gap-3.5 ipad:gap-2">
          <p className="fade-in fade-in-1 inline-block mb-7 rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 px-6 py-3.5 font-outfit text-[12px] font-semibold tracking-[0.1em] text-primary uppercase ipad:mb-9 ipad:px-7 ipad:py-4">
            Agência digital
          </p>

          <h1 className="fade-in fade-in-2 relative w-full text-center font-outfit text-[32px] min-[480px]:text-[40px] leading-[38px] min-[480px]:leading-[48px] font-bold tracking-[-0.8px] text-white ipad:text-[52px] ipad:leading-[57.6px] ipad:tracking-[-0.96px]">
            Seu digital no <span className="text-primary">próximo nível.</span>
          </h1>

          <p className="fade-in fade-in-3 w-full max-w-[320px] text-center font-inter text-[15px] sm:text-[16px] leading-[1.5] font-normal tracking-[-0.32px] text-[#A1A1AA] ipad:max-w-none ipad:w-full ipad:text-[17px] ipad:tracking-[-0.34px]">
            UX/UI, sites, landing pages e automações construídas com estratégia
            para transformar visitantes em clientes reais.
          </p>
        </div>

        <div className="fade-in fade-in-4 flex w-full max-w-[320px] flex-col items-center gap-4 ipad:max-w-none ipad:w-auto ipad:flex-row ipad:items-start">
          <Button
            href="#contato"
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

      {/* Diagrama neural */}
      <div className="z-10 flex w-full max-w-full justify-center overflow-hidden px-1 py-2">
        <div className="neural-diagram-wrapper relative flex justify-center">
          <NeuralDiagram />
        </div>
      </div>

      {/* Faixa de confiança */}
      <section className="z-20 flex w-full flex-col items-center overflow-hidden border-t border-[#2D3039] bg-[#16181F] py-4 ipad:py-6">
        <LogoMarquee />
      </section>
    </div>
  </section>
);
