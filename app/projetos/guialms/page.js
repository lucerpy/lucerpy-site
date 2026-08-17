import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case GuiaLMS',
  description: 'Portal de conteúdo sobre plataformas de treinamento corporativo (LMS): editorial estruturado, categorias temáticas e captura de newsletter.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/guialms',
  },
  openGraph: {
    title: 'Case GuiaLMS | Lucerpy',
    description: 'Portal de conteúdo sobre plataformas de treinamento corporativo (LMS): editorial estruturado, categorias temáticas e captura de newsletter.',
    url: 'https://lucerpy.com.br/projetos/guialms',
    images: [
      { url: 'https://lucerpy.com.br/cases/guialms/guialms-home.jpg', width: 1200, height: 750, alt: 'Case GuiaLMS' },
    ],
  },
};

export default function GuiaLMS() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>INSTITUCIONAL</div>
          <h1 className={styles.heroTitle}>GuiaLMS</h1>
          <p className={styles.heroDescription}>
            Portal editorial sobre plataformas de treinamento corporativo (LMS) — conteúdo técnico e estratégico pra quem decide como capacitar um time, organizado em categorias que guiam desde a primeira pesquisa até a comparação de plataforma.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>6 seções</strong>
              <span>Tendências, IA, Opinião, Design Instrucional e mais</span>
            </div>
            <div className={styles.metric}>
              <strong>Editorial</strong>
              <span>Estrutura pensada pra leitura e pra conversão</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Conteúdo que também vende</h2>
            <p>Um portal editorial não vive só de tráfego — cada seção foi pensada pra também gerar lead e apoiar a decisão de compra de quem está pesquisando LMS.</p>
          </div>

          <div className={styles.presentationGallery}>
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image src="/cases/guialms/guialms-home.jpg" alt="GuiaLMS - Página inicial" width={1200} height={750} sizes="(max-width: 768px) 100vw, 1200px" priority className={styles.caseImage} />
              </div>
              <div className={styles.itemInfo}>
                <h3>A home é uma vitrine editorial, não uma lista</h3>
                <p>Últimas postagens, mais acessados e escolha do editor dividem a atenção do leitor por critérios diferentes — quem chega sem saber o que procura sempre encontra um próximo artigo relevante pra clicar.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image src="/cases/guialms/guialms-categories.jpg" alt="GuiaLMS - Categorias e newsletter" width={1200} height={750} sizes="(max-width: 768px) 100vw, 1200px" className={styles.caseImage} />
              </div>
              <div className={styles.itemInfo}>
                <h3>Categorias que espelham a jornada de decisão</h3>
                <p>Tendências, Inteligência Artificial, Opinião, Design Instrucional — cada seção corresponde a uma etapa diferente de quem está avaliando adotar ou trocar de plataforma de treinamento.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image src="/cases/guialms/guialms-article.jpg" alt="GuiaLMS - Página de artigo" width={1200} height={750} sizes="(max-width: 768px) 100vw, 1200px" className={styles.caseImage} />
              </div>
              <div className={styles.itemInfo}>
                <h3>Artigo com estrutura de autoridade, não só texto corrido</h3>
                <p>Autor identificado, categoria, tempo de leitura e barra de compartilhamento fixa — sinais que constroem confiança em conteúdo B2B, onde credibilidade da fonte pesa tanto quanto a informação em si.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image src="/cases/guialms/guialms-content.jpg" alt="GuiaLMS - Estrutura de conteúdo aprofundado" width={1200} height={750} sizes="(max-width: 768px) 100vw, 1200px" className={styles.caseImage} />
              </div>
              <div className={styles.itemInfo}>
                <h3>Profundidade real, organizada pra ser escaneada</h3>
                <p>Subtítulos, listas numeradas e destaques em negrito quebram textos longos em passos acionáveis — o tipo de estrutura que também favorece ser encontrado e citado por buscadores e IAs generativas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="guialms" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Seu conteúdo já trabalha por você?</h2>
            <p className={styles.ctaDescription}>Um portal editorial bem estruturado educa, gera autoridade e converte — tudo ao mesmo tempo.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
