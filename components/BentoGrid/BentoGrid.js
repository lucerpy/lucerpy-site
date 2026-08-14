'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import styles from './BentoGrid.module.css';

const SLOTS = ['bentoBig', 'bentoWide', 'bentoC3', 'bentoC4', 'bentoC5', 'bentoC6', 'bentoWide2'];

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function BentoGrid({ images, interval = 5000 }) {
  const [order, setOrder] = useState(images);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setOrder((current) => shuffle(current));
    }, interval);

    return () => clearInterval(id);
  }, [interval]);

  return (
    <div className={styles.bentoGrid}>
      {order.map((src, i) => (
        <motion.div
          key={src}
          layout
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`${styles.bentoCell} ${styles[SLOTS[i]]}`}
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
