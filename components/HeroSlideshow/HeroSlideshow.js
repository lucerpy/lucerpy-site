'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './HeroSlideshow.module.css';

export default function HeroSlideshow({ images, interval = 4500 }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={styles.wrap}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`${styles.slide} ${i === active ? styles.active : ''}`}
        />
      ))}
    </div>
  );
}
