import Link from 'next/link';
import styles from './Logo.module.css';

export default function Logo({ className }) {
  return (
    <Link href="/" className={className ? `${styles.logo} ${className}` : styles.logo}>
      Lucerpy<span className="text-primary">.</span>
    </Link>
  );
}
