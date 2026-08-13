'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';

// One shared timer set, driving both the header and footer Logo instances
// from the exact same state — so "the same animation" isn't just visually
// similar, it's the same clock. `replay` re-runs the whole thing on demand
// (clicking the logo), reversing the wipe first before playing it forward
// again, as a little detail.
const LogoRevealContext = createContext({
  wiped: false,
  bounced: false,
  bounceKey: 0,
  replay: () => {},
});

const WIPE_DELAY_MS = 100;
const WIPE_DURATION_MS = 950;
// Small buffers so each step's CSS transition/animation has visibly
// finished before the next one starts, rather than cutting it off mid-way.
const REPLAY_STEP_GAP_MS = 80;

export function LogoRevealProvider({ children }) {
  const [state, setState] = useState({
    wiped: false,
    bounced: false,
    bounceKey: 0,
  });
  const isReplaying = useRef(false);
  const reducedMotionRef = useRef(false);
  const replayTimersRef = useRef([]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (reducedMotionRef.current) {
      setState((s) => ({ ...s, wiped: true, bounced: true }));
      return;
    }

    const wipeTimer = setTimeout(
      () => setState((s) => ({ ...s, wiped: true })),
      WIPE_DELAY_MS
    );
    const bounceTimer = setTimeout(
      () =>
        setState((s) => ({ ...s, bounced: true, bounceKey: s.bounceKey + 1 })),
      WIPE_DELAY_MS + WIPE_DURATION_MS
    );

    return () => {
      clearTimeout(wipeTimer);
      clearTimeout(bounceTimer);
    };
  }, []);

  useEffect(() => {
    return () => {
      isReplaying.current = false;
      replayTimersRef.current.forEach(clearTimeout);
    };
  }, []);

  const replay = () => {
    if (reducedMotionRef.current || isReplaying.current) return;
    isReplaying.current = true;

    // 1. Bounce right away as click feedback.
    setState((s) => ({ ...s, bounceKey: s.bounceKey + 1 }));

    // 2. Reverse: green re-fills — same clip-path transition, played
    // backwards, which (since the dot-side edge is the fixed one) reads as
    // right-to-left.
    const toGreen = setTimeout(() => {
      setState((s) => ({ ...s, wiped: false }));
    }, REPLAY_STEP_GAP_MS);

    // 3. Forward again: white wipes back in, left-to-right, same as the
    // original reveal.
    const toWhite = setTimeout(
      () => setState((s) => ({ ...s, wiped: true })),
      REPLAY_STEP_GAP_MS + WIPE_DURATION_MS + REPLAY_STEP_GAP_MS
    );

    // 4. Bounce once more as it lands, then allow another replay.
    const toBounce = setTimeout(() => {
      setState((s) => ({ ...s, bounceKey: s.bounceKey + 1 }));
      isReplaying.current = false;
    }, REPLAY_STEP_GAP_MS + WIPE_DURATION_MS + REPLAY_STEP_GAP_MS + WIPE_DURATION_MS);

    replayTimersRef.current = [toGreen, toWhite, toBounce];
  };

  return (
    <LogoRevealContext.Provider value={{ ...state, replay }}>
      {children}
    </LogoRevealContext.Provider>
  );
}

export function useLogoReveal() {
  return useContext(LogoRevealContext);
}
