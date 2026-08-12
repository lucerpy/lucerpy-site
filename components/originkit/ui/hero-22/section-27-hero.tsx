// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import Link from "next/link";

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
          <p className="inline-block rounded border border-[#C9FF42]/30 px-3 py-1.5 font-outfit text-[11px] font-bold tracking-[0.05em] text-[#C9FF42] uppercase">
            Agência digital
          </p>

          <h1 className="relative w-full text-center font-outfit text-[32px] sm:text-[40px] leading-[38px] sm:leading-[48px] font-bold tracking-[-0.8px] text-white ipad:text-[48px] ipad:leading-[57.6px] ipad:tracking-[-0.96px]">
            <span className="relative">Seu digital no </span>
            <span className="relative inline-block px-1">
              <span
                aria-hidden
                className="absolute top-[6px] right-0 left-0 h-[calc(100%-8px)] bg-[#C9FF42]/35"
              />
              <span className="relative text-[#0C0D11]">próximo nível.</span>
            </span>
          </h1>

          <p className="w-full max-w-[320px] text-center font-inter text-[15px] sm:text-[16px] leading-[1.5] font-normal tracking-[-0.32px] text-[#A1A1AA] ipad:max-w-none ipad:w-full ipad:text-[17px] ipad:tracking-[-0.34px]">
            UX/UI, sites, landing pages e automações construídas com estratégia
            para transformar visitantes em clientes reais.
          </p>
        </div>

        <div className="flex w-full max-w-[320px] flex-col items-center gap-4 ipad:max-w-none ipad:w-auto ipad:flex-row ipad:items-start">
          <Link
            href="#contato"
            className="group flex w-full max-w-[323px] cursor-pointer items-center justify-center gap-1 rounded-md bg-[#C9FF42] py-2.5 pr-2 pl-5 shadow-[2px_2px_0px_0px_#0C0D11,3px_3px_0px_0px_#b0e530] transition-[transform,box-shadow] duration-200 ease-out ipad:w-auto [@media(hover:hover)]:hover:-translate-x-px [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:shadow-[3px_3px_0px_0px_#0C0D11,5px_5px_0px_0px_#b0e530] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0px_0px_#0C0D11,2px_2px_0px_0px_#b0e530]"
          >
            <span className="font-outfit text-[15px] leading-[1.5] font-semibold tracking-[-0.3px] whitespace-nowrap text-[#0C0D11]">
              Começar projeto
            </span>
            <span className="relative block size-[23px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
              <img
                src={asset("arrow.svg")}
                alt=""
                className="absolute top-0 left-1/2 block h-[23px] w-[11.5px] max-w-none -translate-x-1/2 brightness-0"
              />
            </span>
          </Link>

          <Link
            href="/projetos"
            className="flex w-full max-w-[323px] cursor-pointer items-center justify-center rounded-md border border-[#2D3039] bg-[#16181F] px-5 py-2.5 shadow-[2px_2px_0px_0px_#0C0D11,3px_3px_0px_0px_#20232D] transition-[transform,box-shadow,background-color] duration-200 ease-out ipad:w-auto [@media(hover:hover)]:hover:-translate-x-px [@media(hover:hover)]:hover:-translate-y-px [@media(hover:hover)]:hover:bg-[#20232D] [@media(hover:hover)]:hover:shadow-[3px_3px_0px_0px_#0C0D11,5px_5px_0px_0px_#20232D] active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0px_0px_#0C0D11,2px_2px_0px_0px_#20232D]"
          >
            <span className="font-outfit text-[15px] leading-[1.5] font-semibold tracking-[-0.3px] whitespace-nowrap text-white">
              Ver portfólio
            </span>
          </Link>
        </div>
      </section>

      {/* Diagrama neural */}
      <div className="z-10 flex w-full max-w-full justify-center overflow-hidden px-1 py-2">
        <div className="neural-diagram-wrapper relative flex justify-center">
          <NeuralDiagram />
        </div>
      </div>

      {/* Faixa de confiança */}
      <section className="z-20 flex w-full flex-col items-center gap-6 overflow-hidden border-t border-[#2D3039] bg-[#16181F] px-4 py-6 ipad:px-0 ipad:py-10">
        <p className="w-full max-w-[280px] text-center font-outfit text-[12px] sm:text-[13px] leading-[1.4] font-semibold tracking-[0.08em] text-[#A1A1AA] uppercase ipad:max-w-none ipad:w-full">
          50+ projetos entregues · 98% de clientes satisfeitos
        </p>
        <LogoMarquee />
      </section>
    </div>
  </section>
);
