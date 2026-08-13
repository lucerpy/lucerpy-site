'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// One shared timer set, driving both the header and footer Logo instances
// from the exact same state — so "the same animation" isn't just visually
// similar, it's the same clock.
const LogoRevealContext = createContext({ wiped: false, bounced: false });

const WIPE_DELAY_MS = 60;
const WIPE_DURATION_MS = 700;

export function LogoRevealProvider({ children }) {
  const [state, setState] = useState({ wiped: false, bounced: false });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setState({ wiped: true, bounced: true });
      return;
    }

    const wipeTimer = setTimeout(
      () => setState((s) => ({ ...s, wiped: true })),
      WIPE_DELAY_MS
    );
    const bounceTimer = setTimeout(
      () => setState((s) => ({ ...s, bounced: true })),
      WIPE_DELAY_MS + WIPE_DURATION_MS
    );

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(bounceTimer);
    };
  }, []);

  return (
    <LogoRevealContext.Provider value={state}>
      {children}
    </LogoRevealContext.Provider>
  );
}

export function useLogoReveal() {
  return useContext(LogoRevealContext);
}
