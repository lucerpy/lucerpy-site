import styles from './CtaBackground.module.css';

// Was 6 different live WebGL/canvas effects (RisingLines, Stardust,
// PulseLines, PulsingDotGrid, DitherEffect, DotMatrix x5), each shipping
// its own JS chunk and paying real render cost on every page that had a
// CTA section - all of it below the fold and purely decorative. Replaced
// with a static abstract photo per color family (Pexels, free license),
// picked to match each page's existing accent color. One <img> now, zero
// JS, zero WebGL.
// These files get overwritten in place (same filename, new bytes) during
// active iteration - and next.config.mjs caches .webp for 30 days at the
// browser level, so a same-URL swap doesn't reach anyone with a warm
// cache without this version tag busting it. Bump it whenever any file
// in public/cta/ actually changes content.
const ASSET_VERSION = 'v3';

const IMAGE_BY_VARIANT = {
  home: `/cta/home.webp?${ASSET_VERSION}`,
  cavent: `/cta/cavent.webp?${ASSET_VERSION}`,
  projetos: `/cta/projetos.webp?${ASSET_VERSION}`,
  servicos: `/cta/servicos.webp?${ASSET_VERSION}`,
  quemSomos: `/cta/quemSomos.webp?${ASSET_VERSION}`,
  blog: `/cta/blog.webp?${ASSET_VERSION}`,
  inventario: `/cta/inventario.webp?${ASSET_VERSION}`,
  torqx: `/cta/torqx.webp?${ASSET_VERSION}`,
  guialms: `/cta/guialms.webp?${ASSET_VERSION}`,
};

export default function CtaBackground({ variant }) {
  const src = IMAGE_BY_VARIANT[variant];

  if (!src) {
    return <div className={styles.fallback} aria-hidden="true" />;
  }

  return (
    <div className={styles.wrap} aria-hidden="true">
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className={styles.image}
      />
    </div>
  );
}
