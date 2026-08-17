'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

const WHITE_DOT = '/logo/lucerpy-wordmark-white-lime-dot-transparent.png';
const LIME = '/logo/lucerpy-wordmark-lime-transparent.png';

// Timeline (ms from mount) - reuses the same green -> white wipe + dot
// bounce as the header/footer logo's click reveal (Logo.js/LogoRevealContext),
// just bigger and centered, then flies into the header logo's exact spot.
//   0      overlay + big centered logo fade/scale in (starts fully green)
//   ready  hero background signals its first frame is drawn (or MAX_WAIT
//          elapses, whichever comes first) - wipe to white starts
//   +950   wipe finished, dot bounces
//   +1600  bounce has settled, fly toward the real header logo's position
//   +2300  overlay removed entirely
// The point of the wait is to spend the intro's screen time on real
// loading instead of a fixed decorative delay - so by the time the wipe
// reveals the page, the hero behind it is actually ready to look at.
const WIPE_DURATION = 950; // must match .logoWipe's transition duration in CSS
const HOLD_AFTER_WIPE = 650; // must clear .logoDotBounce's 600ms duration in CSS
const FLY_DURATION = 700;
// Never hold the page hostage to a background that fails to signal ready
// (slow device, WebGL unsupported, event never fires for any reason).
const MAX_WAIT_MS = 3000;
const HERO_READY_EVENT = 'lucerpy:hero-ready';

export default function Preloader() {
  // The show/skip decision (reduced motion + sessionStorage) is already made
  // synchronously by the blocking script in app/layout.js before this ever
  // hydrates, via the html[data-preloader] attribute - CSS uses it to keep
  // the overlay invisible from the very first paint when it should skip.
  // Defaulting to 'intro' here matches the SSR markup (no window/attribute
  // access is possible during SSR), so hydration never mismatches.
  const [phase, setPhase] = useState('intro'); // intro | wiped | flying | done
  const [bounced, setBounced] = useState(false);
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

  // Holds the intro open until the hero signals it's actually ready to be
  // seen, instead of a fixed guess - capped so a background that never
  // reports ready can't hold the page hostage.
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    if (phase !== 'intro' || heroReady) return;

    const onHeroReady = () => setHeroReady(true);
    window.addEventListener(HERO_READY_EVENT, onHeroReady);
    const maxWaitTimer = setTimeout(() => setHeroReady(true), MAX_WAIT_MS);

    return () => {
      window.removeEventListener(HERO_READY_EVENT, onHeroReady);
      clearTimeout(maxWaitTimer);
    };
  }, [phase, heroReady]);

  useEffect(() => {
    if (phase !== 'intro' || !heroReady) return;
    setPhase('wiped');
  }, [phase, heroReady]);

  useEffect(() => {
    if (phase !== 'wiped') return;

    const bounceTimer = setTimeout(() => setBounced(true), WIPE_DURATION);

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

    return () => {
      clearTimeout(bounceTimer);
      clearTimeout(flyTimer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== 'flying') return;
    const doneTimer = setTimeout(() => setPhase('done'), FLY_DURATION);
    return () => clearTimeout(doneTimer);
  }, [phase]);

  if (phase === 'done') return null;

  const wiped = phase === 'wiped' || phase === 'flying';

  return (
    <div className={`${styles.overlay} ${phase === 'flying' ? styles.overlayHidden : ''}`}>
      <div ref={logoRef} className={`${styles.logo} ${phase === 'flying' ? styles.logoFlying : ''}`}>
        <img src={WHITE_DOT} alt="Lucerpy" className={styles.logoImage} />
        <img
          src={LIME}
          alt=""
          aria-hidden="true"
          className={`${styles.logoImage} ${styles.logoWipe} ${wiped ? styles.logoWipeDone : ''}`}
        />
        <span className={`${styles.logoDot} ${bounced ? styles.logoDotBounce : ''}`} />
      </div>
    </div>
  );
}
