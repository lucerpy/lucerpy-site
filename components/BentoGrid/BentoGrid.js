'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './BentoGrid.module.css';

// Four genuinely different 4-col x 3-row tilings — not just the same shape
// rotated to a different corner. Some have one big cell, some have two
// medium verticals, some have two medium horizontals, some have none at all
// (just a mosaic of mid and small pieces), so the grid's whole rhythm
// changes between ticks, not just which photo happens to be the big one.
const TEMPLATES = [
  // One big 2x2 cell (top-left), rest wide + small.
  [
    { gridColumn: '1 / 3', gridRow: '1 / 3' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '1 / 2', gridRow: '3 / 4' },
    { gridColumn: '2 / 3', gridRow: '3 / 4' },
    { gridColumn: '3 / 5', gridRow: '3 / 4' },
  ],
  // Two tall verticals on the left, no single dominant cell.
  [
    { gridColumn: '1 / 2', gridRow: '1 / 4' },
    { gridColumn: '2 / 3', gridRow: '1 / 4' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '3 / 4', gridRow: '3 / 4' },
    { gridColumn: '4 / 5', gridRow: '3 / 4' },
  ],
  // Two horizontal (landscape) mediums stacked on the left.
  [
    { gridColumn: '1 / 3', gridRow: '1 / 2' },
    { gridColumn: '1 / 3', gridRow: '2 / 3' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '1 / 3', gridRow: '3 / 4' },
    { gridColumn: '3 / 5', gridRow: '3 / 4' },
  ],
  // Mosaic: two mediums up top, four tiny squares, one full-width strip.
  [
    { gridColumn: '1 / 3', gridRow: '1 / 2' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '1 / 2', gridRow: '2 / 3' },
    { gridColumn: '2 / 3', gridRow: '2 / 3' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '1 / 5', gridRow: '3 / 4' },
  ],
];

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickTemplate(currentIndex) {
  if (TEMPLATES.length < 2) return 0;
  let next = Math.floor(Math.random() * TEMPLATES.length);
  while (next === currentIndex) {
    next = Math.floor(Math.random() * TEMPLATES.length);
  }
  return next;
}

export default function BentoGrid({ images, interval = 5000 }) {
  const [order, setOrder] = useState(images);
  const [templateIndex, setTemplateIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setOrder((current) => shuffle(current));
      setTemplateIndex((current) => pickTemplate(current));
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  const template = TEMPLATES[templateIndex];

  return (
    <div className={styles.bentoGrid}>
      {order.map((src, i) => (
        <motion.div
          key={src}
          layout
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={styles.bentoCell}
          style={template[i]}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 992px) 50vw, 20vw"
            className={styles.bentoImage}
          />
        </motion.div>
      ))}
    </div>
  );
}
