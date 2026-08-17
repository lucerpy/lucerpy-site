'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { isSlowConnection } from '@/lib/connection';

// The sphere (and the three.js it drags in) used to hydrate and mount its
// scene immediately alongside everything else on the page, even though
// it's well below the fold - its synchronous three.js scene setup was
// blocking the main thread hard enough to delay the Preloader's own
// timers by several real seconds (same failure mode fixed for the hero's
// WebGL background in section-27-hero.tsx). Gated behind an
// IntersectionObserver here so it doesn't even start fetching/mounting
// until it's actually about to scroll into view.
const ParticleSphere = dynamic(
  () => import('@/components/originkit/ui/particlesphere-lucerpy-style'),
  { ssr: false }
);

export default function ParticleSphereLazy() {
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) return;
    if (isSlowConnection()) return;
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={wrapperRef} style={{ width: '100%', height: '100%' }}>
      {inView && <ParticleSphere />}
    </div>
  );
}
