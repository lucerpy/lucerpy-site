'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './BeforeAfter.module.css';

// Drag-to-compare slider for case studies: the "depois" screenshot is the
// base layer and the "antes" one sits on top, clipped to the left of the
// divider. Pointer events drive the drag (with touch-action: pan-y on the
// frame, so a vertical swipe on mobile still scrolls the page instead of
// getting trapped by the slider); a visually hidden range input underneath
// keeps it fully keyboard/screen-reader operable.
export default function BeforeAfter({
  before,
  after,
  alt,
  width = 1440,
  height = 900,
  sizes = '(max-width: 768px) 100vw, 800px',
  priority = false,
  initial = 50,
}) {
  const [position, setPosition] = useState(initial);
  const frameRef = useRef(null);
  const draggingRef = useRef(false);

  function updateFromPointer(clientX) {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }

  function handlePointerDown(event) {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromPointer(event.clientX);
  }

  function handlePointerMove(event) {
    if (!draggingRef.current) return;
    updateFromPointer(event.clientX);
  }

  function stopDragging() {
    draggingRef.current = false;
  }

  return (
    <div
      ref={frameRef}
      className={styles.frame}
      style={{ aspectRatio: `${width} / ${height}`, '--pos': `${position}%` }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      <Image
        src={after}
        alt={`${alt}: depois`}
        fill
        sizes={sizes}
        priority={priority}
        draggable={false}
        className={styles.image}
      />
      <div className={styles.beforeLayer}>
        <Image
          src={before}
          alt={`${alt}: antes`}
          fill
          sizes={sizes}
          priority={priority}
          draggable={false}
          className={styles.image}
        />
      </div>

      <span className={`${styles.label} ${styles.labelBefore}`} aria-hidden="true">Antes</span>
      <span className={`${styles.label} ${styles.labelAfter}`} aria-hidden="true">Depois</span>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(position)}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Comparar antes e depois: ${alt}`}
        className={styles.range}
      />

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.handle}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
