import styles from './page.module.css';
import Button from '@/components/Button/Button';
import BlogPostsSection from './BlogPostsSection';
import { getSortedPostsData } from '@/lib/blog';
import HeroSlideshow from '@/components/HeroSlideshow/HeroSlideshow';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';
import { PORTFOLIO_IMAGES_TOP, PORTFOLIO_IMAGES_BOTTOM } from '@/components/CtaMarquee/portfolioImages';
import NewsletterForm from './NewsletterForm';

const HERO_IMAGES = ['/blog-hero/1.jpg', '/blog-hero/2.jpg', '/blog-hero/3.jpg'];

export const metadata = {
  title: 'Blog',
  description: 'Conteúdo que realmente agrega: design, tecnologia e estratégia digital.',
  alternates: {
    canonical: 'https://lucerpy.com.br/blog',
  },
  openGraph: {
    title: 'Blog | Lucerpy',
    description: 'Conteúdo que realmente agrega: design, tecnologia e estratégia digital.',
    url: 'https://lucerpy.com.br/blog',
  },
};

export default function Blog() {
  const posts = getSortedPostsData();

  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroGrid}>
          <div>
            <div className={`${styles.tagline} fade-in fade-in-1`}>BLOG LUCERPY</div>
            <h1 className={`${styles.heroTitle} fade-in fade-in-2`}>
              Conteúdo que <span className="text-primary">realmente agrega</span>
            </h1>
            <p className={`${styles.heroDescription} fade-in fade-in-3`}>
              Design, tecnologia e estratégia digital para quem quer crescer no ambiente online.
            </p>
            <div className={`${styles.heroButtons} fade-in fade-in-4`}>
              <Button href="#newsletter" variant="primary">Receber novidades</Button>
              <Button href="#artigos" variant="secondary">Ver todos</Button>
            </div>
          </div>
          <div className="fade-in fade-in-4">
            <HeroSlideshow images={HERO_IMAGES} />
          </div>
        </div>
      </section>

      <section className="section-padding" id="artigos">
        <div className="container">
          {posts.length === 0 ? (
            <p>Nenhum artigo publicado ainda.</p>
          ) : (
            <BlogPostsSection posts={posts} />
          )}
        </div>
      </section>

      <CtaMarquee
        id="newsletter"
        title="Quer receber conteúdo toda semana?"
        description="Assine a newsletter e receba insights exclusivos sobre design e digital."
        action={<NewsletterForm />}
        imagesTop={PORTFOLIO_IMAGES_TOP}
        imagesBottom={PORTFOLIO_IMAGES_BOTTOM}
      />
    </>
  );
}
