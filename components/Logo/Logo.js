'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import styles from './Logo.module.css';
import { useLogoReveal } from './LogoRevealContext';

// Android-style "tap the version number" easter egg: 10 clicks within 2s
// triggers a smooth double flip-spin. Tracked locally per Logo instance
// (header/footer don't need to share this one, unlike the reveal wipe).
const RAPID_CLICKS_REQUIRED = 10;
const RAPID_CLICK_WINDOW_MS = 2000;

// AVIF first (smallest), WebP as <picture> fallback - same files the
// Preloader uses. This renders on every page (Navbar + Footer,
// eager-loaded), so it's a bigger win site-wide than the preloader intro.
const WHITE_DOT_AVIF = '/logo/lucerpy-wordmark-white-lime-dot-transparent.avif';
const WHITE_DOT_WEBP = '/logo/lucerpy-wordmark-white-lime-dot-transparent.webp';
const LIME_AVIF = '/logo/lucerpy-wordmark-lime-transparent.avif';
const LIME_WEBP = '/logo/lucerpy-wordmark-lime-transparent.webp';

export default function Logo({ className }) {
  const { wiped, bounced, bounceKey, replay } = useLogoReveal();
  const reducedMotion = useReducedMotion();
  const clickTimestamps = useRef([]);
  const [spinKey, setSpinKey] = useState(0);

  const handleClick = () => {
    replay();
    if (reducedMotion) return;

    const now = Date.now();
    const recent = clickTimestamps.current.filter((t) => now - t < RAPID_CLICK_WINDOW_MS);
    recent.push(now);
    clickTimestamps.current = recent;

    if (recent.length >= RAPID_CLICKS_REQUIRED) {
      clickTimestamps.current = [];
      setSpinKey((k) => k + 1);
    }
  };

  return (
    <Link
      href="/"
      className={className ? `${styles.logo} ${className}` : styles.logo}
      onClick={handleClick}
      style={{ perspective: 800 }}
    >
      <motion.span
        key={spinKey}
        className={styles.logoStack}
        initial={spinKey === 0 ? undefined : { rotateX: 0 }}
        animate={spinKey === 0 ? undefined : { rotateX: 720 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Resting state underneath: white letters, lime dot */}
        <picture>
          <source srcSet={WHITE_DOT_AVIF} type="image/avif" />
          <img src={WHITE_DOT_WEBP} alt="Lucerpy" className={styles.logoImage} loading="eager" />
        </picture>
        {/* Full-lime layer on top, wiped away left-to-right; clipped short of
            the dot so the wipe never touches it. */}
        <picture>
          <source srcSet={LIME_AVIF} type="image/avif" />
          <img
            src={LIME_WEBP}
            alt=""
            aria-hidden="true"
            loading="eager"
            className={`${styles.logoImage} ${styles.logoWipe} ${wiped ? styles.logoWipeDone : ''}`}
          />
        </picture>
        {/* Dot bounce flourish, positioned over the real dot. Keyed on
            bounceKey so each replay remounts it, restarting the CSS
            animation instead of no-opping on an already-applied class. */}
        <span
          key={bounceKey}
          className={`${styles.logoDot} ${bounced ? styles.logoDotBounce : ''}`}
        />
      </motion.span>
    </Link>
  );
}
