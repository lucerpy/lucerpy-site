import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import { getSortedPostsData } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Lucerpy',
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
      </section>

      <section className="section-padding" id="artigos">
        <div className="container">
          <div className={styles.filters}>
            <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
            <button className={styles.filterBtn}>Design</button>
            <button className={styles.filterBtn}>Tecnologia</button>
            <button className={styles.filterBtn}>Estratégia</button>
            <button className={styles.filterBtn}>Cases</button>
          </div>
          
          <div className={styles.cardsGrid}>
            {posts.map((post) => (
              <Card 
                key={post.slug}
                type="post"
                tag={post.tag || "ARTIGO"}
                title={post.title}
                description={post.description}
                href={`/blog/${post.slug}`}
                image={post.image}
                imagePlaceholder={post.gradient || "linear-gradient(45deg, #1e293b, #0f172a)"}
              />
            ))}
            
            {posts.length === 0 && (
              <p>Nenhum artigo publicado ainda.</p>
            )}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="newsletter">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Quer receber conteúdo<br/>toda semana?</h2>
            <p className={styles.ctaDescription}>Assine a newsletter e receba insights exclusivos sobre design e digital.</p>
            <form className={styles.newsletterForm}>
               <input type="email" placeholder="Seu melhor e-mail" className={styles.input} required />
               <Button type="submit" variant="primary">Assinar newsletter →</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
