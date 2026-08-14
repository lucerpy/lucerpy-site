'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CtaVideo.module.css';

export default function CtaVideo({ src, poster }) {
  const videoRef = useRef(null);
  const [allowVideo, setAllowVideo] = useState(false);

  useEffect(() => {
    setAllowVideo(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !allowVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [allowVideo]);

  if (!allowVideo) {
    return (
      <img src={poster} alt="" aria-hidden="true" className={styles.poster} />
    );
  }

  return (
    <video
      ref={videoRef}
      className={styles.video}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
