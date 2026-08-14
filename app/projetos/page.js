import styles from './page.module.css';
import Button from '@/components/Button/Button';
import ProjectsSection from './ProjectsSection';
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow';
import CtaVideo from '@/components/CtaVideo/CtaVideo';

const HERO_IMAGES = ['/projetos-hero/1.jpg', '/projetos-hero/2.jpg', '/projetos-hero/3.jpg'];

export const metadata = {
  title: 'Projetos',
  description: 'Cases que mostram o que acontece quando estratégia e design se encontram de verdade.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos',
  },
  openGraph: {
    title: 'Projetos | Lucerpy',
    description: 'Cases que mostram o que acontece quando estratégia e design se encontram de verdade.',
    url: 'https://lucerpy.com.br/projetos',
  },
};

export default function Projetos() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.tagline} fade-in fade-in-1`}>PORTFÓLIO</div>
            <h1 className={`${styles.heroTitle} fade-in fade-in-2`}>
              Nossos <span className="text-primary">projetos</span>
            </h1>
            <p className={`${styles.heroDescription} fade-in fade-in-3`}>
              Cases que mostram o que acontece quando estratégia e design se encontram de verdade.
            </p>
            <div className={`${styles.heroButtons} fade-in fade-in-4`}>
              <Button href="/contato" variant="primary">Quero um projeto assim →</Button>
            </div>
          </div>
          <div className="fade-in fade-in-4">
            <HeroSlideshow images={HERO_IMAGES} />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <ProjectsSection />
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaVideo src="/cta/leaves-falling.mp4" poster="/cta/warm-2.jpg" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Quer fazer parte desse<br/>portfólio?</h2>
            <p className={styles.ctaDescription}>Vamos criar algo incrível juntos.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Iniciar projeto →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
