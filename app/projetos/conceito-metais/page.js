import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';

export const metadata = {
  title: 'Case Conceito Metais',
  description: 'Rebranding e novo e-commerce para a Conceito Metais: fabricante de barras de apoio e acessórios de acessibilidade certificados na NBR 9050.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/conceito-metais',
  },
  openGraph: {
    title: 'Case Conceito Metais | Lucerpy',
    description: 'Rebranding e novo e-commerce para a Conceito Metais: fabricante de barras de apoio e acessórios de acessibilidade certificados na NBR 9050.',
    url: 'https://lucerpy.com.br/projetos/conceito-metais',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/conceito-metais/home-hero.jpeg',
        width: 1440,
        height: 900,
        alt: 'Case Conceito Metais',
      },
    ],
  },
};

export default function ConceitoMetais() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>E-COMMERCE · REBRANDING</div>
          <h1 className={styles.heroTitle}>Conceito Metais</h1>
          <p className={styles.heroDescription}>
            Rebranding completo e novo e-commerce para a Conceito Metais, fabricante de barras de apoio, bancos articulados e acessórios de acessibilidade em aço inox, todos certificados na norma NBR 9050. O projeto saiu de uma marca genérica para uma loja própria, com fluxo de compra para consumidor final e para compra corporativa, além de um hub de conteúdo técnico sobre acessibilidade.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>11 páginas</strong>
              <span>Mapeadas e desenhadas do zero</span>
            </div>
            <div className={styles.metric}>
              <strong>NBR 9050</strong>
              <span>Conformidade técnica no centro da proposta</span>
            </div>
            <div className={styles.metric}>
              <strong>B2B + B2C</strong>
              <span>Dois fluxos de compra na mesma loja</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Um produto técnico que também precisa emocionar</h2>
            <p>Barra de apoio é item de segurança, muitas vezes comprado num momento delicado — para um familiar, um paciente, uma obra que precisa estar em conformidade. A loja precisa transmitir confiança técnica sem perder o acolhimento.</p>
          </div>

          <div className={styles.presentationGallery}>
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/home-hero.jpeg"
                  alt="Conceito Metais - Página inicial"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>A norma vira selo de confiança, não letra miúda</h3>
                <p>Certificado NBR 9050, garantia de 5 anos e fabricação própria aparecem já na primeira dobra, ao lado da categoria de produto — antes mesmo do visitante rolar a página, ele já sabe que está numa fabricante, não numa revenda genérica.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/home-obras.jpeg"
                  alt="Conceito Metais - Obras entregues em todo o país"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Prova social em escala de obra, não de review de produto</h3>
                <p>Quem especifica acessibilidade em obra pública ou rede de varejo quer ver quem já confiou. A home mostra logos e números de obras reais entregues, puxando o visitante para o portfólio completo.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/home-b2b.jpeg"
                  alt="Conceito Metais - Seção de compras corporativas"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Comprador de obra não navega igual consumidor final</h3>
                <p>Uma seção própria para compra corporativa — volume, orçamento sob medida, condições diferentes — evita que esse comprador se perca dentro de um catálogo pensado para quem está comprando uma unidade só.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/colecao.jpeg"
                  alt="Conceito Metais - Página de coleção de barras de apoio"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Catálogo organizado por como o cliente decide, não por SKU</h3>
                <p>Barras de apoio, bancos e assentos, torneiras PNE, acessórios de higiene, sinalização, pisos táteis — a navegação segue as categorias reais de uma obra acessível, não uma lista solta de produtos.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/produto.jpeg"
                  alt="Conceito Metais - Página de produto individual"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Ficha técnica de verdade, não descrição de vitrine</h3>
                <p>Medida do tubo, espessura, material, conformidade com a norma — a descrição do produto responde às perguntas de quem especifica uma obra, com avaliações reais logo abaixo para quem só quer confirmar que a compra vale a pena.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/obras.jpeg"
                  alt="Conceito Metais - Página de obras finalizadas"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Um portfólio de obras, filtrável por segmento</h3>
                <p>Saúde, varejo, educação, esporte e lazer, setor público — cada obra entregue vira case, com foto real do ambiente equipado. Filtrar por segmento ajuda quem procura uma referência parecida com o próprio projeto.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/sobre.jpeg"
                  alt="Conceito Metais - Página sobre a empresa"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>De pequena oficina a referência técnica no setor</h3>
                <p>A página institucional conta a trajetória real da empresa e apresenta as pessoas por trás da marca — importante numa categoria onde o cliente está, no fundo, confiando a segurança de alguém a um produto.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/nbr9050.jpeg"
                  alt="Conceito Metais - Guia técnico da norma NBR 9050"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Uma página pilar que também é estratégia de SEO</h3>
                <p>Um guia completo sobre a NBR 9050 — medidas exatas, checklist de conformidade, perguntas frequentes — pensado para captar quem está pesquisando a norma antes mesmo de saber que precisa comprar uma barra de apoio.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/blog.jpeg"
                  alt="Conceito Metais - Blog sobre acessibilidade"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Conteúdo técnico como canal de aquisição</h3>
                <p>Blog dedicado a dúvidas reais sobre acessibilidade e conformidade — o mesmo tipo de conteúdo que, no nosso próprio site, já discutimos em <Link href="/blog/seo-local-para-pequenas-empresas">SEO local</Link> como forma de ser encontrado por quem já está decidido a comprar.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/conceito-metais/contato.jpeg"
                  alt="Conceito Metais - Página de contato"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Um canal direto para quem ainda tem dúvida técnica</h3>
                <p>Nem toda dúvida sobre acessibilidade cabe num FAQ — o formulário de contato existe para quem precisa de uma resposta específica antes de fechar um pedido, especialmente em compras de maior volume.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaMarquee
        title="Seu produto técnico também merece uma marca à altura?"
        description="Rebranding e e-commerce sob medida, pensados para quem compra com base em especificação — não só em preço."
        buttonText="Falar com a equipe →"
        buttonHref="/contato"
        imagesTop={[
          { src: '/cases/conceito-metais/home-hero.jpeg', alt: 'Conceito Metais - Página inicial' },
          { src: '/cases/conceito-metais/colecao.jpeg', alt: 'Conceito Metais - Coleção' },
          { src: '/cases/conceito-metais/produto.jpeg', alt: 'Conceito Metais - Página de produto' },
          { src: '/cases/conceito-metais/obras.jpeg', alt: 'Conceito Metais - Obras finalizadas' },
        ]}
        imagesBottom={[
          { src: '/cases/conceito-metais/sobre.jpeg', alt: 'Conceito Metais - Sobre a empresa' },
          { src: '/cases/conceito-metais/nbr9050.jpeg', alt: 'Conceito Metais - Guia NBR 9050' },
          { src: '/cases/conceito-metais/blog.jpeg', alt: 'Conceito Metais - Blog' },
          { src: '/cases/conceito-metais/contato.jpeg', alt: 'Conceito Metais - Contato' },
        ]}
      />
    </article>
  );
}
