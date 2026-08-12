import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  icon,
  ...props
}) {
  const variantClass = styles[variant] || styles.primary;

  const content = (
    <>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.btn} ${variantClass} ${className}`} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${styles.btn} ${variantClass} ${className}`} {...props}>
      {content}
    </button>
  );
}
