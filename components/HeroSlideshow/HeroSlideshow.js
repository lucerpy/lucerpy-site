'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HeroSlideshow.module.css';

export default function HeroSlideshow({ images, interval = 4500 }) {
  const [active, setActive] = useState(0);
  // All slides used to render at once, stacked with opacity:0 on the
  // inactive ones - since they're still geometrically in the viewport
  // (just visually hidden), the browser's native lazy-load doesn't defer
  // any of them, so every slide downloaded immediately on page load. This
  // only ever mounts the current slide plus the one coming up next, so at
  // most 2 images are in the DOM (3 briefly, during the crossfade) instead
  // of the whole set - the rest are only added right before their turn.
  const next = images.length > 1 ? (active + 1) % images.length : active;
  const [mounted, setMounted] = useState(() => new Set([0, next]));

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  useEffect(() => {
    setMounted((prev) => new Set([...prev, active, next]));
    // Drop everything except the active slide and the preloaded upcoming
    // one once the crossfade (1.2s, see .slide's transition) has finished.
    const timer = setTimeout(() => {
      setMounted(new Set([active, next]));
    }, 1300);
    return () => clearTimeout(timer);
  }, [active, next]);

  return (
    <div className={styles.wrap}>
      {images.map((src, i) => (
        mounted.has(i) && (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={`${styles.slide} ${i === active ? styles.active : ''}`}
          />
        )
      ))}
    </div>
  );
}
