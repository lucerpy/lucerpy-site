import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case NK3IT',
  description: 'Site institucional para a NK3IT, empresa de infraestrutura e suporte de TI, focado em geração de leads corporativos.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/nk3it',
  },
  openGraph: {
    title: 'Case NK3IT | Lucerpy',
    description: 'Site institucional para a NK3IT, empresa de infraestrutura e suporte de TI, focado em geração de leads corporativos.',
    url: 'https://lucerpy.com.br/projetos/nk3it',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/nk3it/tela1.jpg',
        width: 1200,
        height: 750,
        alt: 'Case NK3IT',
      },
    ],
  },
};

export default function NK3IT() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>CLIENTE · INSTITUCIONAL</div>
          <h1 className={styles.heroTitle}>NK3IT</h1>
          <p className={styles.heroDescription}>
            Site institucional para a NK3IT, empresa de infraestrutura e suporte de TI: gestão de cloud, backup, segurança e Microsoft 365 para empresas que não podem parar. O desafio era transmitir a mesma confiabilidade que a NK3IT entrega há 21 anos no mercado.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>21 anos</strong>
              <span>De experiência no mercado de TI</span>
            </div>
            <div className={styles.metric}>
              <strong>10+</strong>
              <span>Empresas atendidas</span>
            </div>
            <div className={styles.metric}>
              <strong>80%</strong>
              <span>Aumento médio de produtividade</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Confiança técnica, sem perder impacto visual</h2>
            <p>Infraestrutura de TI é um serviço que se vende pela confiança. Cada seção do site foi pensada para reforçar solidez sem abrir mão de um visual moderno e tecnológico.</p>
          </div>

          <div className={styles.presentationGallery}>
            {/* Imagem 1 - Hero */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/nk3it/tela1.jpg"
                  alt="NK3IT - Página inicial"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Uma proposta de valor direta</h3>
                <p>“Infraestrutura e Suporte de TI para empresas que não podem parar” — o hero já entrega a dor do cliente e o CTA de agendamento, sobre um fundo com identidade visual tecnológica em azul.</p>
              </div>
            </div>

            {/* Imagem 2 - Resultados / stats */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/nk3it/tela2.jpg"
                  alt="NK3IT - Resultados e estatísticas"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Anos de mercado viram prova social</h3>
                <p>21 anos de experiência, 10+ empresas atendidas e 80% de aumento médio de produtividade: números concretos logo abaixo da dobra, para quem ainda está decidindo se confia.</p>
              </div>
            </div>

            {/* Imagem 3 - Como trabalhamos */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/nk3it/tela3.jpg"
                  alt="NK3IT - Como trabalhamos"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>O processo, não só o resultado</h3>
                <p>Diagnóstico e planejamento, implementação e monitoramento, suporte contínuo: três cartões que tiram o mistério de “o que eu estou contratando exatamente”.</p>
              </div>
            </div>

            {/* Imagem 4 - Avaliações */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/nk3it/tela4.jpg"
                  alt="NK3IT - Avaliações de clientes"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Avaliações reais, sem enfeite</h3>
                <p>Depoimentos com nome e nota de clientes reais fecham a argumentação — reforço de confiança logo antes do visitante decidir agendar uma conversa.</p>
              </div>
            </div>

            {/* Imagem 5 - CTA final */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/nk3it/tela5.jpg"
                  alt="NK3IT - Chamada final para contato"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Um convite direto pra agenda</h3>
                <p>“Precisa de suporte de TI para sua empresa?” — a seção final repete o CTA de agendamento sobre os mesmos elementos visuais do hero, fechando o ciclo com consistência.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="nk3it" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Sua empresa precisa transmitir essa confiança?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre como construir um site institucional que vende autoridade técnica.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
