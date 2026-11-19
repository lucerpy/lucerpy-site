import styles from './page.module.css';
import Link from 'next/link';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';
import BeforeAfter from '@/components/BeforeAfter/BeforeAfter';

const IMG = '/cases/conceito-metais/antes-depois';

const DESCRIPTION = 'Migração de WordPress para Shopify com nova identidade visual: o case da Conceito Metais, loja de acessibilidade, torneiras e itens hospitalares com a linha NBR 9050 em destaque.';

export const metadata = {
  title: 'Case Conceito Metais: migração para Shopify',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/conceito-metais',
  },
  openGraph: {
    title: 'Case Conceito Metais | Lucerpy',
    description: DESCRIPTION,
    url: 'https://lucerpy.com.br/projetos/conceito-metais',
    images: [
      {
        url: `https://lucerpy.com.br${IMG}/depois-inicio.jpg`,
        width: 1440,
        height: 900,
        alt: 'Case Conceito Metais: nova loja Shopify',
      },
    ],
  },
};

const COMPARISONS = [
  {
    slug: 'inicio',
    label: 'Página inicial',
    title: 'Uma primeira dobra que diz o que a loja vende',
    text: 'Antes, a home abria com uma faixa de ícones e cards repetidos de "Soluções para...". Agora, o banner fala com cada segmento (banheiros acessíveis, clínicas, hospitais), a faixa de benefícios deixa claro que é representante de fábrica com entrega para todo o Brasil, e os produtos em destaque já aparecem na primeira rolagem.',
  },
  {
    slug: 'categoria',
    label: 'Categoria',
    title: 'Categoria que ajuda a decidir, não só a listar',
    text: 'Filtros por tipo de produto e faixa de preço, contagem de itens e ordenação. O texto introdutório, importante para o SEO, foi mantido, mas recolhido em um "Ler mais" para não empurrar os produtos para baixo. Logo no topo ficam os selos que tiram dúvida: venda para pessoa física e jurídica, envio rápido e garantia de fábrica.',
  },
  {
    slug: 'produto',
    label: 'Página de produto',
    title: 'Produto técnico com um caminho claro até a cotação',
    text: 'A descrição corrida deu lugar a uma página organizada: título com o código do produto, selo da linha NBR 9050 com link para a norma, botão de "Solicitar cotação" em destaque e as garantias que pesam na decisão (garantia de fábrica, retirada agendada, venda para PF e PJ). As especificações técnicas ficam em um bloco próprio, logo abaixo.',
  },
  {
    slug: 'obras',
    label: 'Obras entregues',
    title: 'Obras entregues viraram prova social filtrável',
    text: 'Quem especifica acessibilidade para uma obra quer ver quem já confiou na empresa. A página de obras ganhou um hero com fotos reais e filtros por segmento (esportivo, educação, saúde, varejo, industrial e serviço público), para o visitante achar rápido uma referência parecida com o próprio projeto.',
  },
  {
    slug: 'blog-post',
    label: 'Artigo do blog',
    title: 'Conteúdo técnico com cara de editorial',
    text: 'Os artigos que já traziam tráfego orgânico foram migrados com o mesmo conteúdo, agora com imagem de capa, autor, data, tempo de leitura e uma lateral de posts recentes que mantém o leitor navegando pela loja em vez de sair depois de ler.',
  },
  {
    slug: 'quem-somos',
    label: 'Quem somos',
    title: 'Página institucional que reforça a confiança',
    text: 'Numa categoria em que o cliente está, no fundo, confiando a segurança de alguém a um produto, a página institucional ficou objetiva: o que a empresa faz, para quem vende, selos de entrega e garantia, e dois caminhos claros: falar com a equipe ou conhecer as obras.',
  },
  {
    slug: 'carrinho',
    label: 'Carrinho',
    title: 'Até o carrinho vazio ajuda a vender',
    text: 'Em vez de uma tela sem saída, o carrinho vazio sugere categorias, explica como criar a conta em um minuto e mostra produtos relacionados logo abaixo. É um detalhe pequeno, mas evita que o visitante vá embora no último passo.',
  },
];

const URL_MAP = [
  ['/produtos/', '/collections/all'],
  ['/produtos/categoria-produto/acessibilidade/', '/collections/acessibilidade'],
  ['/produtos/hospitalar/barra-de-apoio/barra-de-apoio-para-banheiro-em-inox-304-reta-60cm/', '/products/barra-apoio-inox-304-reta-60cm-1042'],
  ['/blog/barra-de-apoio-um-guia-completo/', '/blogs/novidades/barra-apoio-guia-completo'],
  ['/politicas-de-troca-devolucao-e-reembolso/', '/policies/refund-policy'],
];

export default function ConceitoMetais() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>E-COMMERCE · SHOPIFY · REBRANDING</div>
          <h1 className={styles.heroTitle}>Conceito Metais</h1>
          <p className={styles.heroDescription}>
            A Conceito Metais vende produtos de acessibilidade, torneiras, itens hospitalares e dispensers para obras, clínicas, escolas e residências. A loja antiga rodava em WordPress, com visual datado e um catálogo difícil de navegar. Migramos tudo para a Shopify com uma nova identidade visual, redesenhamos cada página e mapeamos cada URL antiga para o novo endereço, para a loja não perder o que já tinha conquistado no Google.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>Shopify</strong>
              <span>Nova plataforma, saindo do WordPress</span>
            </div>
            <div className={styles.metric}>
              <strong>27 páginas</strong>
              <span>Redesenhadas e migradas</span>
            </div>
            <div className={styles.metric}>
              <strong>NBR 9050</strong>
              <span>Linha de acessibilidade em destaque</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Antes e depois, página por página</h2>
            <p>Barra de apoio é item de segurança, muitas vezes comprado num momento delicado: para um familiar, um paciente, uma obra que precisa estar em conformidade. A nova loja transmite confiança técnica sem perder a clareza para quem só quer comprar.</p>
            <p className={styles.dragHint}>↔ Arraste a barra sobre cada imagem para comparar</p>
          </div>

          <div className={styles.presentationGallery}>
            {COMPARISONS.map((item, index) => (
              <div key={item.slug} className={styles.presentationItem}>
                <div className={styles.compareWrap}>
                  <BeforeAfter
                    before={`${IMG}/antes-${item.slug}.jpg`}
                    after={`${IMG}/depois-${item.slug}.jpg`}
                    alt={`Conceito Metais, ${item.label.toLowerCase()}`}
                    priority={index === 0}
                  />
                </div>
                <div className={styles.itemInfo}>
                  <span className={styles.itemLabel}>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.migrationSection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Migração sem jogar fora o SEO</h2>
            <p>Trocar de plataforma muda o formato de todas as URLs. Cada página da loja antiga (produtos, categorias, artigos e políticas) foi mapeada para o equivalente na Shopify. Alguns exemplos:</p>
          </div>
          <ul className={styles.migrationList}>
            {URL_MAP.map(([from, to]) => (
              <li key={from} className={styles.migrationRow}>
                <span className={styles.migrationOld}>{from}</span>
                <span className={styles.migrationArrow} aria-hidden="true">→</span>
                <span className={styles.migrationNew}>{to}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaMarquee
        title="Sua loja também precisa de uma nova plataforma?"
        description="Migramos e-commerces para a Shopify com design sob medida, sem perder o tráfego que você já conquistou."
        buttonText="Falar com a equipe →"
        buttonHref="/contato"
        imagesTop={[
          { src: `${IMG}/depois-inicio.jpg`, alt: 'Conceito Metais: página inicial' },
          { src: `${IMG}/depois-categoria.jpg`, alt: 'Conceito Metais: categoria acessibilidade' },
          { src: `${IMG}/depois-produto.jpg`, alt: 'Conceito Metais: página de produto' },
          { src: `${IMG}/depois-obras.jpg`, alt: 'Conceito Metais: obras entregues' },
        ]}
        imagesBottom={[
          { src: `${IMG}/depois-quem-somos.jpg`, alt: 'Conceito Metais: quem somos' },
          { src: `${IMG}/depois-blog-post.jpg`, alt: 'Conceito Metais: artigo do blog' },
          { src: `${IMG}/depois-blog.jpg`, alt: 'Conceito Metais: blog' },
          { src: `${IMG}/depois-contato.jpg`, alt: 'Conceito Metais: contato' },
        ]}
      />
    </article>
  );
}
