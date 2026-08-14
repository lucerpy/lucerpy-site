'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './CtaBackground.module.css';

const RisingLines = dynamic(() => import('@/components/originkit/ui/risinglines'), { ssr: false });
const Stardust = dynamic(() => import('@/components/originkit/ui/stardust'), { ssr: false });
const PulseLines = dynamic(() => import('@/components/originkit/ui/pulse-lines'), { ssr: false });
const PulsingDotGrid = dynamic(() => import('@/components/originkit/ui/pulsing-dot-grid'), { ssr: false });
const DitherEffect = dynamic(() => import('@/components/originkit/ui/dither-effect'), { ssr: false });
const DotMatrix = dynamic(
  () => import('@/components/originkit/ui/hero-26/dotmatrix-hero').then((m) => ({ default: m.DottedBackground })),
  { ssr: false }
);

const BG = '#0C0D11';
// The brand's --color-accent (#E8A659) is deliberately muted for use as a tiny
// sparing highlight (tags, badges). In these WebGL/canvas backgrounds the
// color IS the whole visual, spread thin across particles/dots/alpha, so
// that same muted tone reads as washed-out - needs a punchier, more
// saturated amber to actually read against the near-black background.
const VIVID_AMBER = '#FFB347';
const AMBER_RAMP = ['#0C0D11', '#7A4413', VIVID_AMBER];

const VARIANTS = {
  home: () => (
    <RisingLines
      particles={450}
      color={VIVID_AMBER}
      horizonColor="#CCEC7B"
      riseSpeed={20}
      opacity={100}
      horizonOpacity={65}
      scale={7}
      showHorizon
    />
  ),
  servicos: () => (
    <Stardust
      background={BG}
      particleColor="#CCEC7B"
      particleDensity={40}
      speed={1}
      particleSpeed={0.4}
    />
  ),
  quemSomos: () => (
    <PulseLines
      backgroundColor={BG}
      shape="line"
      type="vertical"
      speed={40}
      colors={{ paletteCount: 3, color1: '#0C0D11', color2: '#4A6B1F', color3: '#CCEC7B' }}
      lineColor="#1A2410"
    />
  ),
  projetos: () => (
    <PulsingDotGrid
      backgroundColor={BG}
      dotColor={VIVID_AMBER}
      speed={2}
      gap={40}
      dotSize={5}
      pulseIntensity={0.9}
      radialWave
    />
  ),
  blog: () => (
    <DitherEffect
      background={BG}
      colors={['#2B3D12', '#CCEC7B', VIVID_AMBER]}
      hover={false}
      speed={25}
    />
  ),
  cavent: () => (
    <DotMatrix
      bgColor={BG}
      colors={AMBER_RAMP}
      frequency={1.2}
      speed={1.5}
      cellSize={18}
      gamma={4}
      paletteBias={9}
    />
  ),
};

export default function CtaBackground({ variant }) {
  const wrapperRef = useRef(null);
  const [allowMotion, setAllowMotion] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setAllowMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el || !allowMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [allowMotion]);

  const render = VARIANTS[variant];

  if (!allowMotion || !render) {
    return <div ref={wrapperRef} className={styles.fallback} aria-hidden="true" />;
  }

  return (
    <div ref={wrapperRef} className={styles.wrap} aria-hidden="true">
      {inView && render()}
    </div>
  );
}
