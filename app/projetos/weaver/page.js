import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case Weaver',
  description: 'E-commerce de streetwear e cultura skate para a Weaver: shapes, apparel e sneakers com identidade forte de marca.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/weaver',
  },
  openGraph: {
    title: 'Case Weaver | Lucerpy',
    description: 'E-commerce de streetwear e cultura skate para a Weaver: shapes, apparel e sneakers com identidade forte de marca.',
    url: 'https://lucerpy.com.br/projetos/weaver',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/weaver/tela1.jpg',
        width: 1200,
        height: 750,
        alt: 'Case Weaver',
      },
    ],
  },
};

export default function Weaver() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>CLIENTE · E-COMMERCE</div>
          <h1 className={styles.heroTitle}>Weaver</h1>
          <p className={styles.heroDescription}>
            E-commerce de streetwear e cultura skate: shapes, apparel e sneakers com identidade forte de marca. O desafio era vender produto sem perder a autenticidade da cena — nada de loja genérica com cara de catálogo.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>3</strong>
              <span>Categorias de produto integradas</span>
            </div>
            <div className={styles.metric}>
              <strong>100%</strong>
              <span>Identidade visual autoral</span>
            </div>
            <div className={styles.metric}>
              <strong>Editorial</strong>
              <span>Blog de cultura street nativo da loja</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Vender produto contando uma cultura</h2>
            <p>Quem compra streetwear compra identidade, não só peça de roupa. Cada seção da loja foi construída para reforçar a cena skate antes de empurrar o carrinho de compras.</p>
          </div>

          <div className={styles.presentationGallery}>
            {/* Imagem 1 - Hero */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/weaver/tela1.jpg"
                  alt="Weaver - Página inicial"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>“Autenticidade em cada manobra”</h3>
                <p>O hero abre com foto real de skate, não still de produto em estúdio — a marca se apresenta pela cultura antes de mostrar o primeiro item à venda.</p>
              </div>
            </div>

            {/* Imagem 2 - Voz das ruas */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/weaver/tela2.jpg"
                  alt="Weaver - A voz das ruas"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Manifesto de marca, não texto institucional</h3>
                <p>“O asfalto é o nosso palco” — o texto de posicionamento fala a língua de quem vive a cena, com convite para fazer parte da comunidade, não só comprar.</p>
              </div>
            </div>

            {/* Imagem 3 - Explore o Hub */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/weaver/tela3.jpg"
                  alt="Weaver - Curadoria de fotos lifestyle"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Curadoria visual como vitrine</h3>
                <p>Um mosaico de fotos reais de skatistas substitui o grid de produto tradicional nessa seção — performance técnica e estética das ruas lado a lado.</p>
              </div>
            </div>

            {/* Imagem 4 - Hardware Premium */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/weaver/tela4.jpg"
                  alt="Weaver - Catálogo de shapes"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>O catálogo, quando finalmente chega</h3>
                <p>Depois de estabelecer a cultura, o carrossel de produtos entra com preço visível e call-to-action claro — “Hardware Premium” com a mesma identidade visual do resto do site.</p>
              </div>
            </div>

            {/* Imagem 5 - Novidades / blog */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/weaver/tela5.jpg"
                  alt="Weaver - Blog de cultura street"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Conteúdo editorial nativo da loja</h3>
                <p>Um blog sobre cultura street mantém o visitante voltando mesmo fora do momento de compra — reforçando a Weaver como referência na cena, não só como vitrine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="weaver" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Sua marca merece essa autenticidade?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre como construir um e-commerce que vende identidade, não só produto.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
