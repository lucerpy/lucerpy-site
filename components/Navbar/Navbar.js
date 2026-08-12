'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import styles from './Navbar.module.css';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Logo />

        <nav className={styles.nav}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#contato" variant="primary" className={styles.desktopCta}>Fale conosco</Button>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <span className={`${styles.menuIcon} ${isOpen ? styles.menuIconOpen : ''}`} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuInner}>
          <nav className={styles.mobileNav}>
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href="#contato"
            variant="primary"
            className={styles.mobileCta}
            onClick={() => setIsOpen(false)}
          >
            Fale conosco
          </Button>
        </div>
      </div>
    </header>
  );
}
