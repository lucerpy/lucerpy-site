'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';
import { useLogoVariant } from './LogoVariantContext';

export default function Logo({ className }) {
  const src = useLogoVariant();

  return (
    <Link href="/" className={className ? `${styles.logo} ${className}` : styles.logo}>
      <Image
        src={src}
        alt="Lucerpy"
        width={112}
        height={32}
        priority
        className={styles.logoImage}
      />
    </Link>
  );
}
