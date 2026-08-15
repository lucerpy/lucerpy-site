import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case Torqx Testing Equipment',
  description: 'Loja Shopify para a Torqx, distribuidora exclusiva AW Dynamometer na América Latina: catálogo técnico, páginas de produto e captura de leads B2B.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/torqx',
  },
  openGraph: {
    title: 'Case Torqx Testing Equipment | Lucerpy',
    description: 'Loja Shopify para a Torqx, distribuidora exclusiva AW Dynamometer na América Latina: catálogo técnico, páginas de produto e captura de leads B2B.',
    url: 'https://lucerpy.com.br/projetos/torqx',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/torqx/torqx-top.jpg',
        width: 1200,
        height: 750,
        alt: 'Case Torqx Testing Equipment',
      },
    ],
  },
};

export default function Torqx() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>E-COMMERCE</div>
          <h1 className={styles.heroTitle}>Torqx Testing Equipment</h1>
          <p className={styles.heroDescription}>
            Loja Shopify para a Torqx, distribuidora exclusiva da AW Dynamometer na América Latina — equipamentos de teste para tratores e motores usados por marcas como John Deere, Case IH e New Holland. Um catálogo técnico que precisa vender para engenheiro, não para consumidor final.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>12 anos</strong>
              <span>De know-how técnico traduzido em conteúdo</span>
            </div>
            <div className={styles.metric}>
              <strong>+15.000</strong>
              <span>Unidades vendidas no mundo (Série AG.X)</span>
            </div>
            <div className={styles.metric}>
              <strong>B2B</strong>
              <span>Captura de lead qualificado em cada página</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Venda técnica não é venda de impulso</h2>
            <p>Quem compra um dinamômetro industrial pesquisa, compara especificação e quer prova antes de pedir orçamento. Cada página da loja foi pensada para esse tipo de decisão.</p>
          </div>

          <div className={styles.presentationGallery}>
            {/* Imagem 1 - Home */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/torqx/torqx-top.jpg"
                  alt="Torqx - Página inicial"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Autoridade antes de catálogo</h3>
                <p>A home abre com o equipamento em uso real, não em estúdio, e apresenta a Torqx pelo que importa nesse mercado: 12 anos de experiência técnica e distribuição exclusiva — antes mesmo de mostrar o primeiro produto.</p>
              </div>
            </div>

            {/* Imagem 2 - Clientes e confiança */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/torqx/torqx-mid.jpg"
                  alt="Torqx - Logos de clientes e conteúdo técnico"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Prova social que fala a língua do comprador</h3>
                <p>Em vez de depoimentos genéricos, os logos que aparecem são as marcas que o próprio comprador já reconhece e confia — John Deere, Caterpillar, Case IH — seguidos de um texto técnico explicando por que a tecnologia AW é referência no setor.</p>
              </div>
            </div>

            {/* Imagem 3 - Benefícios e características */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/torqx/torqx-check.jpg"
                  alt="Torqx - Benefícios e características do produto"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Cada característica, com sua própria justificativa</h3>
                <p>Nada de lista solta de specs: cada recurso do equipamento (aquisição de dados, software de controle, robustez dos freios) vem acompanhado do porquê ele importa para quem vai operar a máquina todos os dias.</p>
              </div>
            </div>

            {/* Imagem 4 - Formulário de orçamento */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/torqx/torqx-form.jpg"
                  alt="Torqx - Formulário de orçamento e equipe"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>O pedido de orçamento chega qualificado</h3>
                <p>O formulário pede nome da empresa e WhatsApp junto com o e-mail — cada lead que entra já vem com o contexto que o time comercial precisa para responder rápido, sem ida e volta só para entender quem está perguntando.</p>
              </div>
            </div>

            {/* Imagem 5 - Página de produto */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/torqx/torqx-bottom.jpg"
                  alt="Torqx - Página de produto individual"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Uma página de produto que também educa</h3>
                <p>Galeria de imagens, número de unidades vendidas e um texto corrido que explica a evolução técnica do modelo — a página de produto funciona tanto para quem já decidiu comprar quanto para quem ainda está pesquisando.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="torqx" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Seu catálogo técnico merece uma loja à altura?</h2>
            <p className={styles.ctaDescription}>Produto complexo não precisa de site complicado — precisa de estrutura pensada pra quem decide com base em especificação, não em impulso.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
