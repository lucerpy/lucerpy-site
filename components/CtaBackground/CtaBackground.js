'use client';

import { useState } from 'react';
import styles from './CtaBackground.module.css';

// Was 6 different live WebGL/canvas effects (RisingLines, Stardust,
// PulseLines, PulsingDotGrid, DitherEffect, DotMatrix x5), each shipping
// its own JS chunk and paying real render cost on every page that had a
// CTA section - all of it below the fold and purely decorative. Replaced
// with a static abstract photo per page (Pexels, free license). AVIF
// first (smallest, ~30-60% lighter than the WebP here), WebP as the
// fallback <picture> source for browsers without AVIF decoding.
//
// These files get overwritten in place (same filename, new bytes) during
// active iteration - and next.config.mjs caches images for 30 days at the
// browser level, so a same-URL content swap never reaches an already-
// cached visitor. Bump ASSET_VERSION whenever any file in public/cta/
// actually changes content.
const ASSET_VERSION = 'v4';

const VARIANTS = [
  'home', 'cavent', 'projetos', 'servicos', 'quemSomos', 'blog',
  'inventario', 'torqx', 'guialms',
];

const AVIF_BY_VARIANT = Object.fromEntries(
  VARIANTS.map((v) => [v, `/cta/${v}.avif?${ASSET_VERSION}`])
);
const WEBP_BY_VARIANT = Object.fromEntries(
  VARIANTS.map((v) => [v, `/cta/${v}.webp?${ASSET_VERSION}`])
);

export default function CtaBackground({ variant }) {
  const avifSrc = AVIF_BY_VARIANT[variant];
  const webpSrc = WEBP_BY_VARIANT[variant];
  const [loaded, setLoaded] = useState(false);

  if (!avifSrc) {
    return <div className={styles.fallback} aria-hidden="true" />;
  }

  return (
    <div className={styles.wrap} aria-hidden="true">
      <picture>
        <source srcSet={avifSrc} type="image/avif" />
        <img
          src={webpSrc}
          alt=""
          // Now that these are 10-54KB (AVIF), the native lazy-load
          // deferral was buying nothing but a visible empty box while
          // scrolling toward it - not worth it for a single small image
          // per page. Loads immediately alongside the rest of the page.
          decoding="async"
          // scale, not opacity: an opacity:0 start can disqualify an
          // element from being the LCP candidate (bit us on the hero h1
          // earlier this session) - transform doesn't touch layout size,
          // so it's paint-safe while still giving the pop-in motion.
          className={`${styles.image} ${loaded ? styles.imagePopped : ''}`}
          onLoad={() => setLoaded(true)}
        />
      </picture>
    </div>
  );
}
