import styles from './page.module.css';
import Button from '@/components/Button/Button';
import ProjectsSection from './ProjectsSection';
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';
import { PORTFOLIO_IMAGES_TOP, PORTFOLIO_IMAGES_BOTTOM } from '@/components/CtaMarquee/portfolioImages';

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

      <CtaMarquee
        title="Quer fazer parte desse portfólio?"
        description="Vamos criar algo incrível juntos — o próximo case pode ser o seu."
        buttonText="Iniciar projeto →"
        buttonHref="/contato"
        imagesTop={PORTFOLIO_IMAGES_TOP}
        imagesBottom={PORTFOLIO_IMAGES_BOTTOM}
      />
    </>
  );
}
