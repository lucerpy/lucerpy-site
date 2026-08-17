'use client';

import Link from 'next/link';
import styles from './Logo.module.css';
import { useLogoReveal } from './LogoRevealContext';

// AVIF first (smallest), WebP as <picture> fallback - same files the
// Preloader uses. This renders on every page (Navbar + Footer,
// eager-loaded), so it's a bigger win site-wide than the preloader intro.
const WHITE_DOT_AVIF = '/logo/lucerpy-wordmark-white-lime-dot-transparent.avif';
const WHITE_DOT_WEBP = '/logo/lucerpy-wordmark-white-lime-dot-transparent.webp';
const LIME_AVIF = '/logo/lucerpy-wordmark-lime-transparent.avif';
const LIME_WEBP = '/logo/lucerpy-wordmark-lime-transparent.webp';

export default function Logo({ className }) {
  const { wiped, bounced, bounceKey, replay } = useLogoReveal();

  return (
    <Link
      href="/"
      className={className ? `${styles.logo} ${className}` : styles.logo}
      onClick={replay}
    >
      <span className={styles.logoStack}>
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
      </span>
    </Link>
  );
}
