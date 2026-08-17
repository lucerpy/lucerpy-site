'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

// Dedicated -preloader files, not the shared header/footer Logo.js ones:
// those were downsized to 358x104 for a 179x52 CSS logo, but this overlay
// renders the same art up to 560px wide - stretching the small version
// over 5x its native size read as visibly blurry. These keep the original
// 826x240 export. AVIF first, WebP as <picture> fallback for browsers
// without AVIF decoding. See app/layout.js for the matching
// <link rel="preload"> that gets the fetch started before this component
// even hydrates.
const WHITE_DOT_AVIF = '/logo/lucerpy-wordmark-white-lime-dot-transparent-preloader.avif';
const WHITE_DOT_WEBP = '/logo/lucerpy-wordmark-white-lime-dot-transparent-preloader.webp';
const LIME_AVIF = '/logo/lucerpy-wordmark-lime-transparent-preloader.avif';
const LIME_WEBP = '/logo/lucerpy-wordmark-lime-transparent-preloader.webp';

// Timeline (ms from mount) - reuses the same green -> white wipe as the
// header/footer logo's click reveal (Logo.js/LogoRevealContext), just
// bigger and centered, then flies into the header logo's exact spot.
//   0      overlay + big centered logo fade/scale in (starts fully green)
//   500    intro finished, wipe to white starts
//   1450   wipe finished - the brand dot pops/bounces at its resting spot,
//          same motion as the header logo's own reveal
//   2100   fly toward the real header logo's position
//   2800   overlay removed entirely
//
// The wipe and the dot bounce both run as self-contained CSS animations
// (animation-delay), not React state flips - see .logoWipe and .logoDot in
// Preloader.module.css for why: a transition needs a JS effect to flip the
// triggering class at the right moment, and if page hydration is slow
// (React + every other client component on the page competing for the same
// thread), that flip just sits waiting and the logo reads as frozen. These
// start counting from paint instead.
const WIPE_DELAY = 500;
const WIPE_DURATION = 950; // must match .logoWipe's animation duration in CSS
const HOLD_AFTER_WIPE = 650; // gives the dot's 600ms bounce room to settle
const FLY_DURATION = 700;

export default function Preloader() {
  // The show/skip decision (reduced motion, already-shown-this-session) is
  // made synchronously by the blocking script in app/layout.js before this
  // ever hydrates, via the html[data-preloader] attribute - CSS uses it to
  // keep the overlay invisible from the very first paint when it should
  // skip. Defaulting to 'intro' here matches the SSR markup (no
  // window/attribute access is possible during SSR), so hydration never
  // mismatches.
  const [phase, setPhase] = useState('intro'); // intro | wiped | flying | done
  const logoRef = useRef(null);
  // React StrictMode re-runs effects twice in development - the ref makes
  // the decision idempotent across that double-invocation.
  const decided = useRef(false);

  useEffect(() => {
    if (decided.current) return;
    decided.current = true;

    if (document.documentElement.getAttribute('data-preloader') !== 'show') {
      setPhase('done');
    }
  }, []);

  useEffect(() => {
    if (phase !== 'intro') return;
    const wipeTimer = setTimeout(() => setPhase('wiped'), WIPE_DELAY);
    return () => clearTimeout(wipeTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'wiped') return;

    const flyTimer = setTimeout(() => {
      const target = document.querySelector('header a[href="/"]');
      const logo = logoRef.current;
      if (target && logo) {
        const targetRect = target.getBoundingClientRect();
        const logoRect = logo.getBoundingClientRect();
        const scale = targetRect.width / logoRect.width;
        const dx = targetRect.left + targetRect.width / 2 - (logoRect.left + logoRect.width / 2);
        const dy = targetRect.top + targetRect.height / 2 - (logoRect.top + logoRect.height / 2);
        logo.style.setProperty('--tx', `${dx}px`);
        logo.style.setProperty('--ty', `${dy}px`);
        logo.style.setProperty('--scale', String(scale));
      }
      setPhase('flying');
    }, WIPE_DURATION + HOLD_AFTER_WIPE);

    return () => clearTimeout(flyTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'flying') return;
    const doneTimer = setTimeout(() => setPhase('done'), FLY_DURATION);
    return () => clearTimeout(doneTimer);
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div className={`${styles.overlay} ${phase === 'flying' ? styles.overlayHidden : ''}`}>
      <div ref={logoRef} className={`${styles.logo} ${phase === 'flying' ? styles.logoFlying : ''}`}>
        <picture>
          <source srcSet={WHITE_DOT_AVIF} type="image/avif" />
          <img
            src={WHITE_DOT_WEBP}
            alt="Lucerpy"
            className={styles.logoImage}
            fetchPriority="high"
            // async, not sync: decoding="sync" queues the image decode on
            // the main thread, right behind whatever hydration work is
            // already stalling it - by the time it actually decodes, the
            // CSS wipe (compositor-driven, running on real wall-clock time)
            // has already played through. Async decoding happens off that
            // queue, so the logo shows up as soon as it's ready instead of
            // waiting its turn.
            decoding="async"
          />
        </picture>
        <picture>
          <source srcSet={LIME_AVIF} type="image/avif" />
          <img
            src={LIME_WEBP}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className={`${styles.logoImage} ${styles.logoWipe}`}
          />
        </picture>
        {/* The brand dot: hidden until the wipe finishes, then pops and
            bounces into place - same motion as the header logo's reveal. */}
        <span className={styles.logoDot} />
      </div>
    </div>
  );
}
