import styles from './page.module.css';
import ContactForm from './ContactForm';
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

const HERO_IMAGES = ['/contato/hero-1.jpg', '/contato/hero-2.jpg', '/contato/hero-3.jpg'];

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
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.tagline}>FALE COM A GENTE</div>
            <h1 className={styles.heroTitle}>
              Vamos tirar seu <span className="text-primary">projeto</span> do papel.
            </h1>
            <p className={styles.heroDescription}>
              Conta pra gente o que você precisa. A primeira conversa é por nossa conta, sem compromisso.
            </p>
          </div>
          <div>
            <HeroSlideshow images={HERO_IMAGES} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.contactGrid}>
            <ContactForm />

            <div className={styles.contactInfo}>
              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>E-mail</span>
                <a href="mailto:lucerpy@lucerpy.com.br" className={styles.infoLink}>
                  <img src="/originkit/footer-02/envelope.svg" alt="" width={20} height={20} className={styles.infoIcon} aria-hidden="true" />
                  lucerpy@lucerpy.com.br
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>WhatsApp</span>
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <img src="/originkit/footer-02/whatsapp.svg" alt="" width={20} height={20} className={styles.infoIcon} aria-hidden="true" />
                  +55 19 93629-6268
                </a>
              </div>

              <div className={styles.infoBlock}>
                <span className={styles.infoLabel}>Redes sociais</span>
                <a href="https://www.instagram.com/lucerpy.agencia/" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <img src="/originkit/footer-02/instagram.svg" alt="" width={20} height={20} className={styles.infoIcon} aria-hidden="true" />
                  @lucerpy.agencia
                </a>
                <a href="https://linkedin.com/company/lucerpy" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                  <img src="/originkit/footer-02/linkedin.svg" alt="" width={20} height={20} className={styles.infoIcon} aria-hidden="true" />
                  Lucerpy Digital
                </a>
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
