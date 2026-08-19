import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case Cavent Engenharia',
  description: 'Redesign completo focado em conversão de leads B2B para a Cavent Engenharia.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/cavent-engenharia',
  },
  openGraph: {
    title: 'Case Cavent Engenharia | Lucerpy',
    description: 'Redesign completo focado em conversão de leads B2B para a Cavent Engenharia.',
    url: 'https://lucerpy.com.br/projetos/cavent-engenharia',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/cavent/tela1.jpeg',
        width: 1200,
        height: 800,
        alt: 'Case Cavent Engenharia',
      },
    ],
  },
};

export default function CaventEngenharia() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>DESTAQUE</div>
          <h1 className={styles.heroTitle}>Cavent Engenharia</h1>
          <p className={styles.heroDescription}>
            Redesign completo do site institucional focado em conversão de leads B2B. A Cavent precisava transmitir a mesma autoridade e precisão que aplicam em seus projetos de engenharia.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>+180%</strong>
              <span>Leads qualificados</span>
            </div>
            <div className={styles.metric}>
              <strong>3 Meses</strong>
              <span>Tempo para ROI</span>
            </div>
            <div className={styles.metric}>
              <strong>3x</strong>
              <span>Mais rápido</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Design focado em conversão</h2>
            <p>Apresentação clara dos diferenciais técnicos sem abrir mão de uma estética refinada e moderna.</p>
          </div>

          <div className={styles.presentationGallery}>
            {/* Imagem 1 - Hero + parceiros */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/cavent/tela1.jpeg"
                  alt="Cavent Engenharia - Página inicial"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Autoridade logo na primeira dobra</h3>
                <p>O hero já entrega a proposta de valor (“Engenharia com Precisão e Inteligência”) e, na sequência, os logos dos parceiros — prova social antes mesmo do visitante rolar a página.</p>
              </div>
            </div>

            {/* Imagem 2 - Mercado comum vs Com a Cavent */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/cavent/tela2.jpeg"
                  alt="Cavent Engenharia - Comparativo mercado comum vs Cavent"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Clareza nos diferenciais</h3>
                <p>Comparamos o “Mercado comum” com o que a Cavent entrega, evidenciando o valor e justificando o investimento antes mesmo do contato.</p>
              </div>
            </div>

            {/* Imagem 3 - Serviços */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/cavent/tela3.jpeg"
                  alt="Cavent Engenharia - Serviços de engenharia"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Serviços com contexto técnico</h3>
                <p>Um carrossel apresenta cada frente de atuação (drenagem urbana, projeto elétrico e mais) com a foto da obra real, não um ícone genérico.</p>
              </div>
            </div>

            {/* Imagem 4 - Projetos */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/cavent/tela4.jpeg"
                  alt="Cavent Engenharia - Portfólio de projetos"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Portfólio técnico em destaque</h3>
                <p>Projetos executados (como o Hidrossanitário Residencial) aparecem com nome do cliente e escopo real, reforçando a capacidade de entrega da Cavent.</p>
              </div>
            </div>

            {/* Imagem 5 - Nosso progresso / história */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/cavent/tela5.jpeg"
                  alt="Cavent Engenharia - Linha do tempo institucional"
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>A história por trás da entrega</h3>
                <p>Uma linha do tempo institucional conta quem é a Cavent, seu diferencial e sua abordagem de infraestrutura — humanizando uma marca técnica sem perder a autoridade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="cavent" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Quer resultados como este?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre as metas da sua empresa e como o design pode te ajudar a alcançá-las.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
