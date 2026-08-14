import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case Inventário de TI',
  description: 'Exercício autoral: dashboard para controle de ativos de TI em tempo real, com gestão de colaboradores, kits de boas-vindas e devoluções.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/inventario-ti',
  },
  openGraph: {
    title: 'Case Inventário de TI | Lucerpy',
    description: 'Exercício autoral: dashboard para controle de ativos de TI em tempo real, com gestão de colaboradores, kits de boas-vindas e devoluções.',
    url: 'https://lucerpy.com.br/projetos/inventario-ti',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/inventario/tela1.jpg',
        width: 1200,
        height: 750,
        alt: 'Case Inventário de TI',
      },
    ],
  },
};

export default function InventarioTI() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>CONCEITO · SAAS</div>
          <h1 className={styles.heroTitle}>Inventário de TI</h1>
          <p className={styles.heroDescription}>
            Exercício autoral: um dashboard completo para times de TI controlarem cada equipamento da empresa — notebooks, monitores, celulares, servidores — do cadastro até a devolução, com visão em tempo real de onde está tudo e com quem.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>6 módulos</strong>
              <span>Ativos, monitores, celulares, colaboradores, kits e histórico</span>
            </div>
            <div className={styles.metric}>
              <strong>100%</strong>
              <span>Responsivo, do desktop ao celular</span>
            </div>
            <div className={styles.metric}>
              <strong>Tempo real</strong>
              <span>Dashboard sincronizado a cada mudança</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Controle completo, sem planilha</h2>
            <p>Cada tela resolve uma dor real de quem gerencia parque de TI: onde está o equipamento, quem está com ele, e o que precisa de atenção agora.</p>
          </div>

          <div className={styles.presentationGallery}>
            {/* Imagem 1 - Dashboard geral */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/inventario/tela1.jpg"
                  alt="Inventário de TI - Dashboard geral"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Visão consolidada em um só lugar</h3>
                <p>Total de ativos, disponíveis, em uso e em manutenção aparecem de cara, junto com alertas de atenção (upgrade de RAM, disco quase cheio) e os gráficos de status por categoria e sistema operacional — sem precisar abrir planilha nenhuma.</p>
              </div>
            </div>

            {/* Imagem 2 - Gestão de ativos */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/inventario/tela2.jpg"
                  alt="Inventário de TI - Gestão de ativos"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Cada equipamento, rastreado de verdade</h3>
                <p>Cadastro, filtro por tipo e status, importação em massa via CSV — cada notebook, servidor ou celular tem seu próprio código de identificação, responsável e localização, com o histórico sempre disponível a um clique.</p>
              </div>
            </div>

            {/* Imagem 3 - Kits de boas-vindas */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/inventario/tela3.jpg"
                  alt="Inventário de TI - Kits de boas-vindas"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Onboarding de gente também é inventário</h3>
                <p>Controle de estoque dos kits de boas-vindas (mochila, squeeze, caderno, caneta) com registro de saída por colaborador — o RH ganha a mesma visibilidade que o time de TI já tem sobre os equipamentos.</p>
              </div>
            </div>

            {/* Imagem 4 - Histórico e auditoria */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/inventario/tela4.jpg"
                  alt="Inventário de TI - Histórico e atividade recente"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Auditoria sem esforço</h3>
                <p>Toda atribuição, cadastro ou movimentação fica registrada com data, colaborador e equipamento envolvidos — se alguém perguntar "quem estava com esse notebook em maio", a resposta está a um scroll de distância.</p>
              </div>
            </div>

            {/* Imagem 5 - Mobile */}
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/inventario/tela5.jpg"
                  alt="Inventário de TI - Versão mobile"
                  width={1200}
                  height={750}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Feito para ser usado do bolso</h3>
                <p>O mesmo dashboard, cartões e gráficos se reorganizam para uma coluna única no celular — porque nem sempre quem precisa checar um ativo está sentado na frente de um monitor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="inventario" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Sua empresa também perde tempo com planilha?</h2>
            <p className={styles.ctaDescription}>Sistemas internos como este resolvem dores específicas do seu negócio — vamos conversar sobre o que faria sentido pra você.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
