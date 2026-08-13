import styles from './page.module.css';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contato',
  description: 'Fale com a Lucerpy sobre o seu projeto. Preencha o formulário ou entre em contato direto por e-mail e redes sociais.',
  alternates: {
    canonical: 'https://lucerpy.com.br/contato',
  },
  openGraph: {
    title: 'Contato | Lucerpy',
    description: 'Fale com a Lucerpy sobre o seu projeto. Preencha o formulário ou entre em contato direto por e-mail e redes sociais.',
    url: 'https://lucerpy.com.br/contato',
  },
};

export default function Contato() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.tagline}>FALE COM A GENTE</div>
        <h1 className={styles.heroTitle}>
          Vamos tirar seu <span className="text-primary">projeto</span> do papel.
        </h1>
        <p className={styles.heroDescription}>
          Conta pra gente o que você precisa. A primeira conversa é por nossa conta, sem compromisso.
        </p>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contactGrid}>
            <ContactForm />

            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:lucerpy@lucerpy.com.br">lucerpy@lucerpy.com.br</a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Redes sociais</span>
                <a href="https://instagram.com/lucerpy" target="_blank" rel="noopener noreferrer">@lucerpy (Instagram)</a>
                <a href="https://linkedin.com/company/lucerpy" target="_blank" rel="noopener noreferrer">Lucerpy Digital (LinkedIn)</a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Tempo de resposta</span>
                <p>Normalmente respondemos em até 1 dia útil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
