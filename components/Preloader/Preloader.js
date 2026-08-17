'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

// AVIF now (was PNG, then WebP) - same transparency, roughly half the
// WebP bytes again. WebP kept as <picture> fallback for browsers without
// AVIF decoding. See app/layout.js for the matching <link rel="preload">
// that gets the fetch started before this component even hydrates.
const WHITE_DOT_AVIF = '/logo/lucerpy-wordmark-white-lime-dot-transparent.avif';
const WHITE_DOT_WEBP = '/logo/lucerpy-wordmark-white-lime-dot-transparent.webp';
const LIME_AVIF = '/logo/lucerpy-wordmark-lime-transparent.avif';
const LIME_WEBP = '/logo/lucerpy-wordmark-lime-transparent.webp';

// Timeline (ms from mount) - reuses the same green -> white wipe as the
// header/footer logo's click reveal (Logo.js/LogoRevealContext), just
// bigger and centered, then flies into the header logo's exact spot.
//   0      overlay + big centered logo fade/scale in (starts fully green)
//   500    intro finished, wipe to white starts
//   1450   wipe finished - three dots bounce at the brand dot's spot
//   2100   fly toward the real header logo's position (dots hand off to
//          the single static dot, matching what's waiting in the header)
//   2800   overlay removed entirely
//
// The wipe and the three-dot loading cue both run as self-contained CSS
// animations (animation-delay), not React state flips - see .logoWipe and
// .loadingDots in Preloader.module.css for why: a transition needs a JS
// effect to flip the triggering class at the right moment, and if page
// hydration is slow (React + every other client component on the page
// competing for the same thread), that flip just sits waiting and the logo
// reads as frozen. These start counting from paint instead.
const WIPE_DELAY = 500;
const WIPE_DURATION = 950; // must match .logoWipe's animation duration in CSS
const HOLD_AFTER_WIPE = 650; // must match .loadingDots' visible window in CSS
const FLY_DURATION = 700;

// Fired once the wipe is done - the overlay is still fully visible from
// here, but the wipe itself was CSS-only, so the main thread is actually
// free again even though nothing looks different to a viewer yet. The
// hero's WebGL background (section-27-hero.tsx) waits for this instead of
// a generic idle-callback/timeout, so its real render cost (shader compile,
// ogl init) happens hidden behind the overlay instead of stacking visibly
// after the intro is already done.
export const PRELOADER_DONE_EVENT = 'lucerpy:preloader-done';

export default function Preloader() {
  // The show/skip decision (reduced motion) is already made synchronously
  // by the blocking script in app/layout.js before this ever hydrates, via
  // the html[data-preloader] attribute - CSS uses it to keep the overlay
  // invisible from the very first paint when it should skip. Defaulting to
  // 'intro' here matches the SSR markup (no window/attribute access is
  // possible during SSR), so hydration never mismatches.
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
      // No intro playing at all - nothing for the hero background to wait
      // on, so let it know right away instead of sitting on its fallback.
      window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
    }
  }, []);

  useEffect(() => {
    if (phase !== 'intro') return;
    const wipeTimer = setTimeout(() => {
      setPhase('wiped');
      window.dispatchEvent(new Event(PRELOADER_DONE_EVENT));
    }, WIPE_DELAY);
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
        {/* The brand dot: hidden until the fly-away, when it takes over
            from .loadingDots below so it matches the static header logo
            it's about to land on. */}
        <span className={styles.logoDot} />
        {/* Loading cue for the gap between the wipe finishing and the
            fly-away - stands in for the brand dot at the same spot so it
            reads as the mark itself bouncing, not a generic spinner. */}
        <div className={styles.loadingDots} aria-hidden="true">
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
          <span className={styles.loadingDot} />
        </div>
      </div>
    </div>
  );
}
