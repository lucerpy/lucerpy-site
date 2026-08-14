'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './CtaBackground.module.css';

const ChromaticWaves = dynamic(() => import('@/components/originkit/ui/chromatic-waves'), { ssr: false });
const Stardust = dynamic(() => import('@/components/originkit/ui/stardust'), { ssr: false });
const PulseLines = dynamic(() => import('@/components/originkit/ui/pulse-lines'), { ssr: false });
const PulsingDotGrid = dynamic(() => import('@/components/originkit/ui/pulsing-dot-grid'), { ssr: false });
const DitherEffect = dynamic(() => import('@/components/originkit/ui/dither-effect'), { ssr: false });
const DotMatrix = dynamic(
  () => import('@/components/originkit/ui/hero-26/dotmatrix-hero').then((m) => ({ default: m.DottedBackground })),
  { ssr: false }
);

const BG = '#0C0D11';
const GREEN_RAMP = ['#0C0D11', '#2B3D12', '#CCEC7B'];
const AMBER_RAMP = ['#0C0D11', '#4A2E12', '#E8A659'];

const VARIANTS = {
  home: () => (
    <ChromaticWaves
      bgColor={BG}
      colors={GREEN_RAMP}
      frequency={1.5}
      speed={2}
      cellSize={14}
      gamma={5}
      paletteBias={8}
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
      dotColor="#E8A659"
      speed={2}
      gap={40}
      dotSize={5}
      pulseIntensity={0.8}
      radialWave
    />
  ),
  blog: () => (
    <DitherEffect
      background={BG}
      colors={['#2B3D12', '#CCEC7B', '#E8A659']}
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
