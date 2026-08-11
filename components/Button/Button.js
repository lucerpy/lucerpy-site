import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const variantClass = styles[variant] || styles.primary;
  
  if (href) {
    return (
      <Link href={href} className={`${styles.btn} ${variantClass} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles.btn} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
