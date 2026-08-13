"use client";

import "./hero-14.css";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Sparkles from "@/components/originkit/ui/hero-14/sparkles";
import ArrowBadge from "@/components/originkit/ui/hero-14/arrow-badge";

/* Hero de Servicos da Lucerpy, adaptado do template hero-14.
 * Navbar propria removida: a pagina ja usa o Navbar global do layout.
 */

/** Asset root — flat files in package assets/. */
const A = "/originkit/hero-14";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type TagSide = "left" | "right";
interface FloatingTagData {
  label: string;
  side: TagSide;
  className: string; // desktop absolute position (xl+)
}

// Tags show from md (768px) up. Offsets scale by breakpoint so they stay
// fully on-screen: tight to the column at 768 (small gutters), widening into
// the gutters as the viewport grows.
const TAGS: FloatingTagData[] = [
  // Fixed arrangement at every visible size: top pair close to centre, bottom
  // pair lower and further out. Horizontal offsets scale up with the viewport
  // (staying on-screen down to ~800px, where the whole set hides).
  {
    label: "UX/UI Design",
    side: "left",
    className: "left-[150px] top-[-100px] lg:left-[150px] xl:left-[100px] ",
  },
  {
    label: "Desenvolvimento Web",
    side: "left",
    className:
      "left-[18px] top-[-8px] lg:left-[10px] lg:top-[0px] xl:left-[-50px] ",
  },
  {
    label: "Automações",
    side: "right",
    className: "right-[150px] top-[-100px] lg:right-[150px] xl:right-[100px]",
  },
  {
    label: "Integrações & CRMs",
    side: "right",
    className:
      "right-[8px] top-[-8px] lg:right-[10px] lg:top-[0px] xl:right-[-50px] ",
  },
];

/* ---------------- logo badge (exported icon container) ---------------- */
function LogoBadge() {
  return (
    <div className="relative flex items-center justify-center">
      {/* soft green core glow (disabled in source; kept as structure) */}
      <div
        aria-hidden
        className="pointer-events-none absolute size-[320px] rounded-full blur-[60px]"
      />
      {/* exported badge: concentric rings + glyph */}
      <img
        src={`${A}/icon-container.svg`}
        alt=""
        width={168}
        height={168}
        className="relative size-[168px] select-none"
      />
    </div>
  );
}

/* ---------------- floating keyword tag ---------------- */
function FloatingTag({
  data,
  variants,
}: {
  data: FloatingTagData;
  variants: Variants;
}) {
  const arrowLeft = data.side === "left";
  return (
    <motion.div
      variants={variants}
      className={`absolute z-20 hidden min-[800px]:flex ${data.className} items-center justify-center gap-[10px] rounded-[10px] border border-dark12 bg-dark10 px-[10px] py-[6px]`}
    >
      <img
        src={`${A}/arrow.svg`}
        alt=""
        width={18}
        height={20}
        className={`absolute h-[20px] w-[17px] ${
          arrowLeft
            ? "left-[88px] top-[-16px] -scale-x-100"
            : "right-[88px] top-[-16px]"
        }`}
      />
      <span className="whitespace-nowrap text-[14px] font-medium leading-[1.5] text-white xl:text-[16px]">
        {data.label}
      </span>
    </motion.div>
  );
}

/* ---------------- light beams (exported Figma light rig) ----------------
 * The "Abstract Design" SVG is one beam cluster fanning from a point up to
 * the top-right; we place it right-of-centre and mirror a copy to the left
 * so the two shafts splay out to the top corners. Fades in on mount.       */
function Beams() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      initial={reduce ? false : { opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 1 }}
      transition={{ duration: 4, ease: EASE, delay: 0.1 }}
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* desktop beams (>782px) */}
      <img
        src={`${A}/abstract-design.svg`}
        alt=""
        className="absolute left-[200px] top-[-40px] w-[440px] max-w-none rotate-[5deg] select-none max-[782px]:hidden sm:w-[440px] md:left-[560px] md:top-[-40px] lg:left-[800px] lg:top-[-10px] lg:w-[460px] xl:left-[1000px] xl:top-[-50px] xl:w-[660px]"
      />
      <img
        src={`${A}/abstract-design.svg`}
        alt=""
        className="absolute right-[200px] top-[-40px] w-[440px] max-w-none -scale-x-100 rotate-[-5deg] select-none max-[782px]:hidden sm:w-[440px] md:right-[560px] md:top-[-40px] lg:right-[800px] lg:top-[-10px] lg:w-[460px] xl:right-[1000px] xl:top-[-50px] xl:w-[660px]"
      />
      {/* mobile beams (≤782px) — light-375 */}
      <img
        src={`${A}/light-375.svg`}
        alt=""
        className="absolute left-[-100px] top-[-80px] z-10 hidden w-[320px] max-w-none rotate-[25deg] select-none max-[782px]:block"
      />
      <img
        src={`${A}/light-375.svg`}
        alt=""
        className="absolute right-[-100px] top-[-80px] z-10 hidden w-[320px] max-w-none -scale-x-100 rotate-[-25deg] select-none max-[782px]:block"
      />
    </motion.div>
  );
}

/* ============================ HERO ============================ */
function Hero14() {
  const reduce = useReducedMotion();

  // Sequential entry: each element rises in one-by-one (badge → heading →
  // subtitle → CTAs), driven by an index-based delay rather than nested
  // stagger (the heading/subtitle live inside the text column, so a single
  // container stagger can't order them relative to the sibling CTAs).
  // `passthrough` just forwards the hidden/show label to descendants.
  const passthrough: Variants = { hidden: {}, show: {} };
  const seqRise = (order: number): Variants =>
    reduce
      ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
      : {
          hidden: { opacity: 0, y: 36 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: EASE, delay: 0.1 + order * 0.2 },
          },
        };
  const seqPop = (order: number): Variants =>
    reduce
      ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
      : {
          hidden: { opacity: 0, scale: 0.82 },
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: EASE, delay: 0.1 + order * 0.2 },
          },
        };

  return (
    <section
      aria-label="Hero Serviços Lucerpy"
      className="hero-14 relative isolate flex w-full flex-col overflow-hidden bg-dark02 font-grotesk antialiased"
    >
      {/* ---------- background ---------- */}
      <Beams />

      {/* top perspective grid — desktop (>782px) grid-top */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[1920px] max-w-none -translate-x-1/2 overflow-hidden max-[782px]:hidden">
        <img
          src={`${A}/grid-top.svg`}
          alt=""
          className="size-full rotate-180 object-cover opacity-60"
        />
      </div>
      {/* top perspective grid — mobile (≤782px) grid-375 */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 hidden h-[220px] w-full -translate-x-1/2 rotate-180 overflow-hidden max-[782px]:block">
        <img
          src={`${A}/grid-375.svg`}
          alt=""
          className="size-full rotate-180 object-cover opacity-60"
        />
      </div>
      {/* bottom perspective grid — grid-375 (all screen sizes) */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[220px] w-full -translate-x-1/2 overflow-hidden">
        <img
          src={`${A}/grid-375.svg`}
          alt=""
          className="size-full rotate-180 object-cover opacity-70"
        />
      </div>

      {/* ---------- hero content ---------- */}
      <motion.div
        variants={passthrough}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col items-center justify-center px-4 py-24 sm:py-28 md:max-w-[450px] md:px-6 lg:max-w-[890px] min-[1440px]:max-w-[1280px]"
      >
        {/* logo badge */}
        <motion.div variants={seqRise(0)} className="relative mb-[10px]">
          {/* animated sparkle particles behind the badge */}
          <Sparkles />
          <LogoBadge />
        </motion.div>

        {/* text column (relative anchor for floating tags) */}
        <motion.div
          variants={passthrough}
          className="relative flex w-full max-w-[900px] flex-col items-center gap-[14px]"
        >
          {TAGS.map((tag) => (
            <FloatingTag key={tag.label} data={tag} variants={seqPop(4)} />
          ))}

          {/* heading */}
          <motion.h1
            variants={seqRise(1)}
            className="m-0 max-w-[760px] text-balance text-center text-[32px] font-bold leading-[1.2] text-white min-[480px]:text-[40px] ipad:text-[52px]"
          >
            Soluções digitais que entregam resultado
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={seqRise(2)}
            className="m-0 max-w-[620px] text-center text-[16px] font-medium leading-[1.5] text-grey50 lg:text-[16px] xl:text-[18px]"
          >
            UX/UI, sites, landing pages, integrações e automações construídos
            com estratégia e cuidado para o seu negócio.
          </motion.p>
        </motion.div>

        {/* buttons */}
        <motion.div
          variants={seqRise(3)}
          className="mt-[40px] flex w-full flex-col items-center justify-center gap-[14px] sm:mt-[50px] sm:flex-row sm:gap-[20px]"
        >
          <motion.a
            href="#contato"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="group flex items-center gap-[12px] rounded-[100px] border-0 bg-yellow60 py-[8px] pl-[32px] pr-[8px]"
          >
            <span className="whitespace-nowrap text-[16px] font-bold leading-[1.5] text-dark02 xl:text-[18px]">
              Fale conosco
            </span>
            <ArrowBadge />
          </motion.a>

          <motion.a
            href="/projetos"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="group flex items-center gap-[12px] rounded-[100px] bg-dark06 py-[8px] pl-[16px] pr-[8px] outline outline-2 outline-offset-[-2px] outline-dark10"
          >
            <span className="whitespace-nowrap text-[16px] font-normal leading-[1.5] text-yellow60 xl:text-[18px]">
              Ver projetos
            </span>
            <ArrowBadge bordered />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero14;
