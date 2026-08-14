import styles from './not-found.module.css';
import Button from '@/components/Button/Button';

export const metadata = {
  title: 'Página não encontrada',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.tagline}>ERRO 404</div>
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Essa página saiu do ar.</h1>
      <p className={styles.description}>
        O link pode estar errado ou a página pode ter sido movida. Vamos te levar de volta pro caminho certo.
      </p>
      <div className={styles.actions}>
        <Button href="/" variant="primary">Voltar para a home →</Button>
        <Button href="/contato" variant="secondary">Falar com a gente</Button>
      </div>
    </main>
  );
}
