import styles from './CtaBackground.module.css';

// Was 6 different live WebGL/canvas effects (RisingLines, Stardust,
// PulseLines, PulsingDotGrid, DitherEffect, DotMatrix x5), each shipping
// its own JS chunk and paying real render cost on every page that had a
// CTA section - all of them below the fold, decorative, and never
// interactive. Replaced with one static WebP per page, captured from the
// actual live effect (frame-sequence screenshot, same technique as the
// hero background) so the look is unchanged - just a single <img> now,
// zero JS, zero WebGL, zero per-frame cost.
const IMAGE_BY_VARIANT = {
  home: '/cta/home.webp',
  servicos: '/cta/servicos.webp',
  quemSomos: '/cta/quemSomos.webp',
  projetos: '/cta/projetos.webp',
  blog: '/cta/blog.webp',
  cavent: '/cta/cavent.webp',
  inventario: '/cta/inventario.webp',
  torqx: '/cta/torqx.webp',
  guialms: '/cta/guialms.webp',
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
