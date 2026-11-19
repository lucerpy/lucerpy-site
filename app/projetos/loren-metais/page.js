import styles from './page.module.css';
import Link from 'next/link';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';
import BeforeAfter from '@/components/BeforeAfter/BeforeAfter';

const IMG = '/cases/loren-metais/antes-depois';

const DESCRIPTION = 'Redesign completo de loja na Loja Integrada: o case da Loren Metais, fabricante de torneiras, barras de apoio e itens hospitalares, com tema novo e todas as URLs preservadas.';

export const metadata = {
  title: 'Case Loren Metais: redesign na Loja Integrada',
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/loren-metais',
  },
  openGraph: {
    title: 'Case Loren Metais | Lucerpy',
    description: DESCRIPTION,
    url: 'https://lucerpy.com.br/projetos/loren-metais',
    images: [
      {
        url: `https://lucerpy.com.br${IMG}/depois-inicio.jpg`,
        width: 1440,
        height: 900,
        alt: 'Case Loren Metais: nova loja na Loja Integrada',
      },
    ],
  },
};

const COMPARISONS = [
  {
    slug: 'inicio',
    label: 'Página inicial',
    title: 'Menos ruído no topo, mais caminho para comprar',
    text: 'O topo antigo empilhava barra de contatos, dois botões flutuantes, banners de benefício com ilustrações 3D e um aviso de cookies cobrindo a tela. No novo tema, uma faixa única resume a proposta (direto da fábrica, envio para todo o Brasil, atendimento pelo WhatsApp), a busca ganha destaque, o "Pedir orçamento" vai para o cabeçalho e os lançamentos aparecem logo abaixo do banner.',
  },
  {
    slug: 'torneiras',
    label: 'Categoria',
    title: 'O texto de SEO continua lá, mas os produtos vêm primeiro',
    text: 'A categoria de torneiras abria com um parágrafo enorme antes de qualquer produto. O texto foi mantido (é ele que ajuda a página a ranquear), mas agora fica recolhido em um "Ler mais". Do lado, uma lista de subcategorias (torneiras clínicas, com sensor, de pedal, deficiente físico) leva o cliente direto ao modelo que procura.',
  },
  {
    slug: 'produto',
    label: 'Página de produto',
    title: 'Página de produto pensada para quem compra e para quem cota',
    text: 'Preço e parcelamento legíveis, seletor de quantidade, botão de compra em destaque e cálculo de frete na própria página. Para compras em volume, o atalho "Para grandes quantidades solicite o orçamento" continua à vista, e o selo da linha NBR 9050 reforça a conformidade técnica.',
  },
  {
    slug: 'buscar',
    label: 'Busca',
    title: 'Busca que separa o que se compra no site do que é sob cotação',
    text: 'Parte do catálogo tem preço fechado e parte é vendida sob consulta. A nova busca deixa isso explícito: filtro por disponibilidade ("comprar no site" ou "sob cotação"), filtro por preço e cards com o botão certo para cada caso, "Adicionar" ou "Consultar".',
  },
  {
    slug: 'obras',
    label: 'Obras finalizadas',
    title: 'Obras finalizadas com números que geram confiança',
    text: 'A página de obras ganhou um hero com os números da empresa (obras entregues e peças fornecidas) e cards por segmento (escola, esporte e lazer, saúde) com contador de fotos. É a prova social que um comprador de obra procura antes de pedir orçamento.',
  },
  {
    slug: '404',
    label: 'Página de erro',
    title: 'Até a página de erro foi redesenhada',
    text: 'Um link quebrado não precisa ser o fim da visita. A página 404 agora tem título claro, mantém o cabeçalho com busca e menu, oferece o cadastro na newsletter e mostra o rodapé completo com categorias e contatos, para o visitante seguir navegando.',
  },
];

const MOBILE = [
  { slug: 'inicio', label: 'Página inicial' },
  { slug: 'torneiras', label: 'Categoria' },
  { slug: 'produto', label: 'Página de produto' },
];

export default function LorenMetais() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>E-COMMERCE · LOJA INTEGRADA · REDESIGN</div>
          <h1 className={styles.heroTitle}>Loren Metais</h1>
          <p className={styles.heroDescription}>
            A Loren Metais vende direto da fábrica torneiras, barras de apoio, itens hospitalares e dispensers para todo o Brasil. A loja já rodava na Loja Integrada e funcionava, mas o visual estava datado e poluído. Refizemos o tema por completo, do cabeçalho à página de erro, sem trocar de plataforma e sem mexer em nenhuma URL, preservando catálogo, pedidos e o histórico de SEO da loja.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>20 páginas</strong>
              <span>Redesenhadas no desktop e no celular</span>
            </div>
            <div className={styles.metric}>
              <strong>100%</strong>
              <span>Das URLs preservadas</span>
            </div>
            <div className={styles.metric}>
              <strong>Loja Integrada</strong>
              <span>Mesma plataforma, tema novo</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Antes e depois, página por página</h2>
            <p>Redesenhar uma loja que já vende é diferente de começar do zero: cada mudança precisa melhorar a experiência sem atrapalhar quem já compra ali. Por isso o trabalho foi feito dentro da própria Loja Integrada, mantendo a operação no ar.</p>
            <p className={styles.dragHint}>↔ Arraste a barra sobre cada imagem para comparar</p>
          </div>

          <div className={styles.presentationGallery}>
            {COMPARISONS.map((item, index) => (
              <div key={item.slug} className={styles.presentationItem}>
                <div className={styles.compareWrap}>
                  <BeforeAfter
                    before={`${IMG}/antes-${item.slug}.jpg`}
                    after={`${IMG}/depois-${item.slug}.jpg`}
                    alt={`Loren Metais, ${item.label.toLowerCase()}`}
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

      <section className={styles.mobileSection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>No celular também</h2>
            <p>Cada página foi redesenhada também para a tela pequena: menu compacto, busca sempre à mão e botões fáceis de tocar.</p>
          </div>
          <div className={styles.mobileGrid}>
            {MOBILE.map((item) => (
              <div key={item.slug} className={styles.mobileItem}>
                <BeforeAfter
                  before={`${IMG}/antes-${item.slug}-mobile.jpg`}
                  after={`${IMG}/depois-${item.slug}-mobile.jpg`}
                  alt={`Loren Metais no celular, ${item.label.toLowerCase()}`}
                  width={390}
                  height={844}
                  sizes="(max-width: 768px) 360px, 320px"
                />
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaMarquee
        title="Sua loja na Loja Integrada também merece um tema à altura?"
        description="Redesenhamos lojas virtuais sem trocar de plataforma e sem tirar a operação do ar."
        buttonText="Falar com a equipe →"
        buttonHref="/contato"
        imagesTop={[
          { src: `${IMG}/depois-inicio.jpg`, alt: 'Loren Metais: página inicial' },
          { src: `${IMG}/depois-torneiras.jpg`, alt: 'Loren Metais: categoria torneiras' },
          { src: `${IMG}/depois-produto.jpg`, alt: 'Loren Metais: página de produto' },
          { src: `${IMG}/depois-buscar.jpg`, alt: 'Loren Metais: busca' },
        ]}
        imagesBottom={[
          { src: `${IMG}/depois-obras.jpg`, alt: 'Loren Metais: obras finalizadas' },
          { src: `${IMG}/depois-marca.jpg`, alt: 'Loren Metais: página da marca' },
          { src: `${IMG}/depois-quem-somos.jpg`, alt: 'Loren Metais: quem somos' },
          { src: `${IMG}/depois-instalacao.jpg`, alt: 'Loren Metais: instalação de barras de apoio' },
        ]}
      />
    </article>
  );
}
