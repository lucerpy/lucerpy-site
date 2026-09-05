"use client";

/* Liquid Metal Hero — adapted from 21st.dev (liquid-metal-hero.tsx).
   Real WebGL shader (@paper-design/shaders-react, "Backdrop" preset
   recolored to the brand palette), not a CSS gradient. Dropped the
   emoji badge/fake feature copy from the original demo and the
   shadcn Button/Badge/Card wrappers in favor of the site's own
   Button and tokens, to avoid a second, parallel design system. */

import * as React from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Button from "@/components/Button/Button";

const FEATURES = ["Performance real", "Design sob medida", "Automação com IA"];

const HEADLINES = [
  { text: "Sites construídos pra carregar ", accent: "rápido." },
  { text: "Design pensado pra converter ", accent: "visitantes." },
  { text: "Automação que economiza ", accent: "seu tempo." },
];

function CyclingHeadline() {
  const reduced = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % HEADLINES.length), 3200);
    return () => clearInterval(id);
  }, [reduced]);

  const current = HEADLINES[reduced ? 0 : index];

  return (
    <h1 className="flex min-h-[5.6rem] w-full items-center justify-center text-balance text-center font-outfit text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white ipad:min-h-[8.5rem] ipad:text-[4rem] desktop-sm:min-h-[10.5rem] desktop-sm:text-[4.5rem]">
      {reduced ? (
        <span>
          {current.text}
          <span className="text-primary">{current.accent}</span>
        </span>
      ) : (
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(8px)", y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {current.text}
            <span className="text-primary">{current.accent}</span>
          </motion.span>
        </AnimatePresence>
      )}
    </h1>
  );
}

export function LiquidMetalHero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0C0D11] px-6">
      <LiquidMetal
        style={{ position: "absolute", inset: 0 }}
        colorBack="#0C0D11"
        colorTint="#CCEC7B"
        softness={0.35}
        repetition={1.5}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.1}
        contour={0.4}
        shape="none"
        scale={1}
        speed={reduced ? 0 : 0.4}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 55% at 50% 45%, rgba(12,13,17,0.78) 0%, rgba(12,13,17,0.88) 55%, rgba(12,13,17,0.96) 100%)" }}
      />

      <motion.div
        initial={reduced ? undefined : { opacity: 0, y: 16 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-6 py-24 text-center"
      >
        <span className="font-outfit text-[12px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Agência digital
        </span>

        <CyclingHeadline />

        <p className="max-w-lg font-inter text-[16px] leading-[1.6] text-[#A1A1AA]">
          UX/UI, sites, landing pages e automações construídas com estratégia para transformar visitantes em clientes reais.
        </p>

        <div className="flex w-full max-w-[320px] flex-col gap-4 pt-2 ipad:w-auto ipad:max-w-none ipad:flex-row ipad:items-center">
          <Button href="/contato" variant="primary" className="w-full ipad:w-auto">
            Começar projeto →
          </Button>
          <Button href="/projetos" variant="secondary" className="w-full ipad:w-auto">
            Ver portfólio
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6">
          {FEATURES.map((feature, i) => (
            <span key={feature} className="flex items-center gap-6">
              {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-white/20 ipad:block" />}
              <span className="font-outfit text-[12px] font-medium text-[#c2c2c2]">{feature}</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default LiquidMetalHero;
