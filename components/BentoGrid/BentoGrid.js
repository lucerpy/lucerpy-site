'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './BentoGrid.module.css';

const COLS = 4;
const ROWS = 3;
const SHAPES = [
  [2, 2], // big square
  [2, 1], // wide
  [1, 2], // tall
  [1, 1], // small
];

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Randomly tiles a COLS x ROWS grid into exactly `pieceCount` non-overlapping
// rectangles, each a 2x2, 2x1, 1x2 or 1x1, with no fixed favorite shape or
// position — every call can land on a different mix (sometimes a big block
// appears, sometimes none do; a domino here is vertical, there horizontal).
// Backtracks when a random pick paints it into a corner it can't tile.
function generateLayout(pieceCount) {
  const occupied = new Array(COLS * ROWS).fill(false);
  const pieces = [];
  const key = (c, r) => r * COLS + c;

  function firstEmpty() {
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (!occupied[key(c, r)]) return [c, r];
      }
    }
    return null;
  }

  function canPlace(c, r, w, h) {
    if (c + w > COLS || r + h > ROWS) return false;
    for (let dy = 0; dy < h; dy++) {
      for (let dx = 0; dx < w; dx++) {
        if (occupied[key(c + dx, r + dy)]) return false;
      }
    }
    return true;
  }

  function setOccupied(c, r, w, h, value) {
    for (let dy = 0; dy < h; dy++) {
      for (let dx = 0; dx < w; dx++) {
        occupied[key(c + dx, r + dy)] = value;
      }
    }
  }

  function emptyCount() {
    return occupied.filter((v) => !v).length;
  }

  function backtrack() {
    if (pieces.length === pieceCount) return emptyCount() === 0;

    const spot = firstEmpty();
    if (!spot) return false;
    const [c, r] = spot;
    const piecesLeftAfter = pieceCount - pieces.length - 1;

    for (const [w, h] of shuffle(SHAPES)) {
      if (!canPlace(c, r, w, h)) continue;

      setOccupied(c, r, w, h, true);
      const left = emptyCount();

      if (left >= piecesLeftAfter * 1 && left <= piecesLeftAfter * 4) {
        pieces.push({ gridColumn: `${c + 1} / ${c + 1 + w}`, gridRow: `${r + 1} / ${r + 1 + h}` });
        if (backtrack()) return true;
        pieces.pop();
      }

      setOccupied(c, r, w, h, false);
    }

    return false;
  }

  return backtrack() ? pieces : null;
}

// Deterministic fallback so server and client render the same markup before
// hydration — actual randomization only kicks in client-side, after mount.
function fallbackLayout(pieceCount) {
  const layout = [];
  for (let i = 0; i < pieceCount; i++) {
    layout.push({ gridColumn: `${(i % COLS) + 1} / ${(i % COLS) + 2}`, gridRow: `${Math.floor(i / COLS) + 1} / ${Math.floor(i / COLS) + 2}` });
  }
  return layout;
}

export default function BentoGrid({ images, interval = 5000 }) {
  const [order, setOrder] = useState(images);
  const [layout, setLayout] = useState(() => fallbackLayout(images.length));

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function reshuffle() {
      setOrder((current) => shuffle(current));
      setLayout(generateLayout(images.length) ?? fallbackLayout(images.length));
    }

    reshuffle();
    const id = setInterval(reshuffle, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={styles.bentoGrid}>
      {order.map((src, i) => (
        <motion.div
          key={src}
          layout
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={styles.bentoCell}
          style={layout[i]}
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
