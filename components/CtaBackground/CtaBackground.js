import styles from './CtaBackground.module.css';

// Was 6 different live WebGL/canvas effects (RisingLines, Stardust,
// PulseLines, PulsingDotGrid, DitherEffect, DotMatrix x5), each shipping
// its own JS chunk and paying real render cost on every page that had a
// CTA section - all of it below the fold and purely decorative. Replaced
// with a static abstract photo per color family (Pexels, free license),
// picked to match each page's existing accent color. One <img> now, zero
// JS, zero WebGL.
const IMAGE_BY_VARIANT = {
  home: '/cta/home.webp',
  cavent: '/cta/cavent.webp',
  projetos: '/cta/projetos.webp',
  servicos: '/cta/servicos.webp',
  quemSomos: '/cta/quemSomos.webp',
  blog: '/cta/blog.webp',
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
