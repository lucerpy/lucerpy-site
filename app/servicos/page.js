import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';

export const metadata = {
  title: 'Serviços',
  description: 'Conheça nossas soluções digitais: UX/UI, sites, landing pages, integrações e automações.',
  alternates: {
    canonical: 'https://lucerpy.com.br/servicos',
  },
  openGraph: {
    title: 'Serviços | Lucerpy',
    description: 'Conheça nossas soluções digitais: UX/UI, sites, landing pages, integrações e automações.',
    url: 'https://lucerpy.com.br/servicos',
  },
};

export default function Servicos() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={`${styles.tagline} fade-in fade-in-1`}>O QUE FAZEMOS</div>
        <h1 className={`${styles.heroTitle} fade-in fade-in-2`}>
          Soluções digitais que entregam <span className="text-primary">resultado</span>
        </h1>
        <p className={`${styles.heroDescription} fade-in fade-in-3`}>
          UX/UI, sites, landing pages, integrações e automações construídos com estratégia e cuidado para o seu negócio.
        </p>
        <div className={`${styles.heroButtons} fade-in fade-in-4`}>
          <Button href="/contato" variant="primary">Fale conosco</Button>
          <Button href="/projetos" variant="secondary">Ver projetos</Button>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>O que fazemos</h2>
            <p className={styles.sectionDescription}>
              Seis especialidades que cobrem tudo que o seu digital precisa — do design ao lançamento.
            </p>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card type="service" number="01" title="UX/UI Design" description="Interfaces que convertem. Criamos experiências intuitivas e bonitas que guiam seus usuários até a ação desejada com elegância." />
            <Card type="service" number="02" title="Sites & Landing Pages" description="Do portfólio institucional à landing de alta conversão. Rápidos, responsivos e otimizados para SEO desde o primeiro deploy." />
            <Card type="service" number="03" title="Integrações" description="Conectamos seu site a qualquer plataforma: CRM, ERP, APIs de pagamento, e-mail marketing e ferramentas customizadas." />
            <Card type="service" number="04" title="Automações" description="Chega de processos manuais. Automatizamos fluxos que economizam horas da sua equipe todo mês sem aumentar headcount." />
            <Card type="service" number="05" title="Consultoria Digital" description="Não sabe por onde começar? Mapeamos o melhor caminho para o seu digital com estratégia clara e orientada a resultado." />
            <Card type="service" number="06" title="Manutenção & Suporte" description="Planos de suporte contínuo para manter tudo sempre atualizado e funcionando com excelência e segurança." />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className={styles.sectionTag}>PROCESSO</div>
          <h2 className={styles.sectionTitle}>Como trabalhamos</h2>
          <p className={styles.sectionDescription} style={{ marginBottom: '64px' }}>
            Um processo claro do briefing à entrega, com você presente em cada etapa decisiva.
          </p>
          
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>01</span>
              <h4>Briefing</h4>
              <p>Entendemos seus objetivos e público antes de criar qualquer coisa.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>02</span>
              <h4>Estratégia</h4>
              <p>Definimos o melhor caminho com base em dados e boas práticas.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>03</span>
              <h4>Design</h4>
              <p>Protótipos validados com você antes de qualquer linha de código.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>04</span>
              <h4>Desenvolvimento</h4>
              <p>Código moderno, performático e com atenção extrema aos detalhes.</p>
            </div>
            <div className={styles.processStep}>
              <span className={styles.processNumber}>05</span>
              <h4>Entrega</h4>
              <p>Lançamos juntos e continuamos disponíveis para evolução contínua.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Rápido</span>
              <span className={styles.statLabel}>Performance otimizada, sem código inchado</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Atual</span>
              <span className={styles.statLabel}>Design moderno, sem templates genéricos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>Limpo</span>
              <span className={styles.statLabel}>Código enxuto, organizado e fácil de evoluir</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>SEO</span>
              <span className={styles.statLabel}>Otimizado desde a primeira linha de código</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre o seu projeto e encontrar a melhor solução juntos.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a Lucerpy →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
