// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import Link from "next/link";
import Button from "@/components/Button/Button";

import { LogoMarquee } from "@/components/originkit/ui/hero-22/logo-marquee";
import { DottedBackground } from "@/components/originkit/ui/hero-26/dotmatrix-hero";

/** Public asset under /originkit/hero-22/ */
function asset(file: string) {
  return `/originkit/hero-22/${file}`;
}

export const Section27Hero = () => (
  <section className="w-full bg-[#0C0D11]">
    <div className="relative flex w-full max-w-full flex-col items-center overflow-hidden bg-[#0C0D11]">
      {/* Fundo pontilhado full-bleed (Originkit hero-26, recolorido no verde da marca) */}
      <div className="fade-in fade-in-4 pointer-events-none absolute inset-0 z-0">
        <DottedBackground
          bgColor="#0C0D11"
          colors={["#0C0D11", "#2B3D12", "#CCEC7B"]}
          frequency={1.5}
          speed={2}
          cellSize={10}
          gamma={3}
          paletteBias={8}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #0C0D11 0%, rgba(12,13,17,0.55) 30%, rgba(12,13,17,0) 60%)",
          }}
        />
      </div>

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
      <section className="z-20 mt-12 mb-16 flex w-full max-w-[367px] flex-col items-center gap-5 px-4 ipad:mt-[74px] ipad:mb-24 ipad:max-w-[603px] desktop-sm:mt-20 desktop-sm:mb-32 ipad:gap-[50px] ipad:p-[10px]">
        <div className="flex w-full flex-col items-center gap-3.5 ipad:gap-2">
          <p className="fade-in fade-in-1 inline-block mb-5 rounded-full border border-[var(--color-primary)]/35 bg-[var(--color-primary)]/10 px-5 py-2.5 font-outfit text-[12px] font-semibold tracking-[0.1em] text-primary uppercase ipad:mb-6 ipad:px-6 ipad:py-3">
            Agência digital
          </p>

          <h1 className="fade-in fade-in-2 relative w-full text-balance text-center font-outfit text-[32px] min-[480px]:text-[40px] leading-[38px] min-[480px]:leading-[48px] font-bold tracking-[-0.8px] text-white ipad:text-[52px] ipad:leading-[57.6px] ipad:tracking-[-0.96px]">
            Seu digital no <span className="text-primary">próximo nível.</span>
          </h1>

          <p className="fade-in fade-in-3 w-full max-w-[320px] text-center font-inter text-[15px] sm:text-[16px] leading-[1.5] font-normal tracking-[-0.32px] text-[#A1A1AA] ipad:max-w-none ipad:w-full ipad:text-[17px] ipad:tracking-[-0.34px]">
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
