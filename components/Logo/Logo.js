'use client';

import Link from 'next/link';
import styles from './Logo.module.css';
import { useLogoReveal } from './LogoRevealContext';

// WebP instead of PNG - same files the Preloader uses, roughly half the
// bytes. This renders on every page (Navbar + Footer, eager-loaded), so
// it's a bigger win site-wide than the one-time preloader intro.
const WHITE_DOT = '/logo/lucerpy-wordmark-white-lime-dot-transparent.webp';
const LIME = '/logo/lucerpy-wordmark-lime-transparent.webp';

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
        <img src={WHITE_DOT} alt="Lucerpy" className={styles.logoImage} loading="eager" />
        {/* Full-lime layer on top, wiped away left-to-right; clipped short of
            the dot so the wipe never touches it. */}
        <img
          src={LIME}
          alt=""
          aria-hidden="true"
          loading="eager"
          className={`${styles.logoImage} ${styles.logoWipe} ${wiped ? styles.logoWipeDone : ''}`}
        />
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
