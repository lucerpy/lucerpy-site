import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';

export const metadata = {
  title: 'Projetos | Lucerpy',
  description: 'Cases que mostram o que acontece quando estratégia e design se encontram de verdade.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos',
  },
  openGraph: {
    title: 'Projetos | Lucerpy',
    description: 'Cases que mostram o que acontece quando estratégia e design se encontram de verdade.',
    url: 'https://lucerpy.com.br/projetos',
  },
};

export default function Projetos() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.tagline}>PORTFÓLIO</div>
        <h1 className={styles.heroTitle}>
          Nossos <span className="text-primary">projetos</span>
        </h1>
        <p className={styles.heroDescription}>
          Cases que mostram o que acontece quando estratégia e design se encontram de verdade.
        </p>
        <div className={styles.heroButtons}>
          <Button href="#contato" variant="primary">Quero um projeto assim →</Button>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.filters}>
            <button className={`${styles.filterBtn} ${styles.active}`}>Todos</button>
            <button className={styles.filterBtn}>Institucional</button>
            <button className={styles.filterBtn}>E-commerce</button>
            <button className={styles.filterBtn}>Landing Page</button>
            <button className={styles.filterBtn}>App</button>
          </div>
          
          <div className={styles.cardsGrid}>
            <div className={styles.featuredCard}>
              <Card 
                type="project"
                tag="DESTAQUE"
                title="Cavent Engenharia"
                description="Redesign completo do site institucional focado em conversão de leads B2B. Resultado: +180% em contatos qualificados em apenas 3 meses após o lançamento."
                image="/cases/cavent/tela1.jpeg"
                imagePlaceholder="linear-gradient(45deg, #0f172a, #1e293b)"
                href="/projetos/cavent-engenharia"
                metrics={[
                  { value: '+180%', label: 'leads qualificados' },
                  { value: '3x', label: 'mais rápido' }
                ]}
              />
            </div>
            
            <Card 
              type="project"
              tag="LANDING PAGE"
              title="Lançamento imobiliário"
              description="Alta conversão para lançamento residencial com integração CRM e automação de leads."
              imagePlaceholder="linear-gradient(45deg, #2e1065, #4c1d95)"
            />
            <Card 
              type="project"
              tag="E-COMMERCE"
              title="Loja Streetwear"
              description="E-commerce completo com integrações de pagamento e logística automatizada."
              imagePlaceholder="linear-gradient(45deg, #064e3b, #047857)"
            />
            <Card 
              type="project"
              tag="INSTITUCIONAL"
              title="Escritório de Advocacia"
              description="Presença digital sóbria e confiável para área jurídica, com foco em autoridade."
              imagePlaceholder="linear-gradient(45deg, #78350f, #451a03)"
            />
            <Card 
              type="project"
              tag="APP"
              title="Clínica de Estética"
              description="Interface mobile-first para agendamento e gestão de clientes com notificações automáticas."
              imagePlaceholder="linear-gradient(45deg, #1e3a8a, #172554)"
            />
            <Card 
              type="project"
              tag="SAAS"
              title="SaaS B2B"
              description="Landing page de alta performance para produto de software com trial gratuito e onboarding."
              imagePlaceholder="linear-gradient(45deg, #4c1d95, #2e1065)"
            />
            <Card 
              type="project"
              tag="INSTITUCIONAL"
              title="Consultoria Financeira"
              description="Site institucional com portal do cliente e integração com sistema de gestão patrimonial."
              imagePlaceholder="linear-gradient(45deg, #14532d, #064e3b)"
            />
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Quer fazer parte desse<br/>portfólio?</h2>
            <p className={styles.ctaDescription}>Vamos criar algo incrível juntos.</p>
            <div className={styles.ctaButtons}>
              <Button href="#contato" variant="secondary" style={{ borderColor: 'var(--color-bg)', color: 'var(--color-bg)' }}>Iniciar projeto →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
