import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.columnInfo}>
          <Link href="/" className={styles.logo}>
            Lucerpy<span className="text-primary">.</span>
          </Link>
          <p className={styles.description}>
            Agência digital focada em UX/UI, desenvolvimento web e automações que entregam resultado real.
          </p>
          <a href="mailto:lucerpy@lucerpy.com.br" className={styles.email}>
            lucerpy@lucerpy.com.br
          </a>
        </div>

        <div className={styles.columnLinks}>
          <h4 className={styles.title}>PÁGINAS</h4>
          <ul className={styles.linkList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/projetos">Projetos</Link></li>
            <li><Link href="/quem-somos">Quem somos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="#contato">Contato</Link></li>
          </ul>
        </div>

        <div className={styles.columnLinks}>
          <h4 className={styles.title}>CONTATO</h4>
          <ul className={styles.linkList}>
            <li><a href="mailto:lucerpy@lucerpy.com.br">lucerpy@lucerpy.com.br</a></li>
            <li><a href="https://instagram.com/lucerpy" target="_blank" rel="noopener noreferrer">@lucerpy (Instagram)</a></li>
            <li><a href="https://linkedin.com/company/lucerpy" target="_blank" rel="noopener noreferrer">Lucerpy Digital (LinkedIn)</a></li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <p>© Lucerpy 2026 — Todos os direitos reservados</p>
        <Link href="/privacidade">Política de Privacidade</Link>
      </div>
    </footer>
  );
}
