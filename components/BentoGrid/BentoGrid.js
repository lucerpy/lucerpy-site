'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './BentoGrid.module.css';

// Four rotations of the same 4-col x 3-row tiling (a 2x2 "big" cell in one
// corner, a 2x1 "wide" cell, two 1x1 cells, another 1x1 pair, and a second
// wide cell) — big corner walks top-left -> top-right -> bottom-left ->
// bottom-right so the whole shape of the grid changes, not just which photo
// sits where.
const TEMPLATES = [
  [
    { gridColumn: '1 / 3', gridRow: '1 / 3' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '1 / 2', gridRow: '3 / 4' },
    { gridColumn: '2 / 3', gridRow: '3 / 4' },
    { gridColumn: '3 / 5', gridRow: '3 / 4' },
  ],
  [
    { gridColumn: '3 / 5', gridRow: '1 / 3' },
    { gridColumn: '1 / 3', gridRow: '1 / 2' },
    { gridColumn: '1 / 2', gridRow: '2 / 3' },
    { gridColumn: '2 / 3', gridRow: '2 / 3' },
    { gridColumn: '3 / 4', gridRow: '3 / 4' },
    { gridColumn: '4 / 5', gridRow: '3 / 4' },
    { gridColumn: '1 / 3', gridRow: '3 / 4' },
  ],
  [
    { gridColumn: '1 / 3', gridRow: '2 / 4' },
    { gridColumn: '3 / 5', gridRow: '3 / 4' },
    { gridColumn: '3 / 4', gridRow: '2 / 3' },
    { gridColumn: '4 / 5', gridRow: '2 / 3' },
    { gridColumn: '1 / 2', gridRow: '1 / 2' },
    { gridColumn: '2 / 3', gridRow: '1 / 2' },
    { gridColumn: '3 / 5', gridRow: '1 / 2' },
  ],
  [
    { gridColumn: '3 / 5', gridRow: '2 / 4' },
    { gridColumn: '1 / 3', gridRow: '3 / 4' },
    { gridColumn: '1 / 2', gridRow: '2 / 3' },
    { gridColumn: '2 / 3', gridRow: '2 / 3' },
    { gridColumn: '3 / 4', gridRow: '1 / 2' },
    { gridColumn: '4 / 5', gridRow: '1 / 2' },
    { gridColumn: '1 / 3', gridRow: '1 / 2' },
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
