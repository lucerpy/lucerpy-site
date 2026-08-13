'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Logo.module.css';
import { useLogoVariant, LOGO_VARIANTS } from './LogoVariantContext';

// Builds the reveal path from plain white up to whichever variant this page
// load landed on — so the dot (and, on the lime pick, the whole mark)
// visibly turns green instead of just appearing already-colored.
const REVEAL_SEQUENCE = {
  [LOGO_VARIANTS.white]: [LOGO_VARIANTS.white],
  [LOGO_VARIANTS.whiteDot]: [LOGO_VARIANTS.white, LOGO_VARIANTS.whiteDot],
  [LOGO_VARIANTS.lime]: [
    LOGO_VARIANTS.white,
    LOGO_VARIANTS.whiteDot,
    LOGO_VARIANTS.lime,
  ],
};

const STEP_MS = 480;

export default function Logo({ className }) {
  const { variant, ready } = useLogoVariant();
  const [step, setStep] = useState(0);
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!ready || hasPlayed.current) return;
    hasPlayed.current = true;

    const sequence = REVEAL_SEQUENCE[variant] ?? [variant];

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setStep(sequence.length - 1);
      return;
    }

    const timers = sequence
      .slice(1)
      .map((_, i) => setTimeout(() => setStep(i + 1), (i + 1) * STEP_MS));

    return () => timers.forEach(clearTimeout);
  }, [ready, variant]);

  const sequence = REVEAL_SEQUENCE[variant] ?? [variant];
  const activeSrc = sequence[Math.min(step, sequence.length - 1)];

  return (
    <Link href="/" className={className ? `${styles.logo} ${className}` : styles.logo}>
      <span className={styles.logoStack}>
        {sequence.map((src) => (
          <Image
            key={src}
            src={src}
            alt="Lucerpy"
            width={151}
            height={44}
            priority
            className={styles.logoImage}
            style={{ opacity: src === activeSrc ? 1 : 0 }}
          />
        ))}
      </span>
    </Link>
  );
}
