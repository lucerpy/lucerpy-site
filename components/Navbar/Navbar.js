import Link from 'next/link';
import Button from '../Button/Button';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Lucerpy<span className="text-primary">.</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/servicos" className={styles.navLink}>Serviços</Link>
          <Link href="/projetos" className={styles.navLink}>Projetos</Link>
          <Link href="/quem-somos" className={styles.navLink}>Quem somos</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="#contato" className={styles.navLink}>Contato</Link>
        </nav>

        <div className={styles.actions}>
          <Button href="#contato" variant="primary">Fale conosco</Button>
        </div>
      </div>
    </header>
  );
}
