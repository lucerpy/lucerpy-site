'use client';

import { useEffect, useRef } from 'react';
import { ViewTransition } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip on first mount: the initial page load is already at the right
    // scroll position, no need to animate anything.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Next.js's own scroll-to-top on navigation fires instantly and isn't
    // synced with the page-fade transition, so from a scrolled position
    // (e.g. the footer, which looks identical on every page) it reads as a
    // jarring, disconnected jump instead of "we went to a new page". Take
    // over the scroll ourselves so it happens smoothly, together with the
    // fade, instead of before it.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <ViewTransition key={pathname} enter="page-fade" exit="page-fade" default="none">
      {children}
    </ViewTransition>
  );
}
