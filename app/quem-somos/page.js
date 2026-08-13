import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Image from 'next/image';

export const metadata = {
  title: 'Quem Somos',
  description: 'Uma equipe movida por resultados reais. Conheça a Lucerpy e nossos valores.',
  alternates: {
    canonical: 'https://lucerpy.com.br/quem-somos',
  },
  openGraph: {
    title: 'Quem Somos | Lucerpy',
    description: 'Uma equipe movida por resultados reais. Conheça a Lucerpy e nossos valores.',
    url: 'https://lucerpy.com.br/quem-somos',
  },
};

export default function QuemSomos() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={`${styles.tagline} fade-in fade-in-1`}>NOSSA HISTÓRIA</div>
        <h1 className={`${styles.heroTitle} fade-in fade-in-2`}>
          Nascemos para <span className="text-primary">fazer diferente</span>
        </h1>
        <p className={`${styles.heroDescription} fade-in fade-in-3`}>
          Uma agência que une estratégia, design e tecnologia para transformar negócios em experiências memoráveis.
        </p>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageContainer} style={{ position: 'relative', width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <Image 
                src="/quem-somos-team.jpg" 
                alt="Equipe Lucerpy Digital" 
                fill 
                sizes="(max-width: 992px) 100vw, 50vw" 
                style={{ objectFit: 'cover' }} 
              />
            </div>
            <div className={styles.aboutContent}>
              <div className={styles.sectionTag}>QUEM SOMOS</div>
              <h2 className={styles.sectionTitle}>Uma equipe movida por resultados reais</h2>
              <div className={styles.aboutText}>
                <p>A Lucerpy nasceu da convicção de que o digital pode ser mais humano, estratégico e eficaz. Não acreditamos em fórmulas prontas.</p>
                <p>Cada projeto começa com escuta ativa: entendemos o negócio, o público e os objetivos antes de criar qualquer pixel ou linha de código.</p>
                <p>O resultado é um produto digital que não só parece bonito — mas que converte visitantes em clientes e ideias em receita concreta.</p>
              </div>
              <Button href="/projetos" variant="primary">Ver nosso portfólio →</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTag}>O QUE NOS GUIA</div>
            <h2 className={styles.sectionTitle}>Nossos valores</h2>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card 
              type="service"
              title="Resultado"
              description="Não entregamos apenas design bonito. Entregamos impacto mensurável — mais leads, mais vendas, mais crescimento real para o seu negócio."
            />
            <Card 
              type="service"
              title="Transparência"
              description="Sem bla-bla-bla. Comunicação direta, prazos claros e relatórios que você realmente entenda e consiga usar para tomar decisões."
            />
            <Card 
              type="service"
              title="Parceria"
              description="Não somos fornecedores. Somos parceiros. O sucesso do seu projeto é tão importante para nós quanto para você — do início ao fim."
            />
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

      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className={styles.sectionTag}>MISSÃO</div>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '24px' }}>Fazer o digital trabalhar para você</h2>
          <p className={styles.sectionDescription} style={{ marginBottom: '40px' }}>
            Acreditamos que toda empresa, independente do tamanho, merece um digital bem feito — estratégico, bonito e que converte. Esse é o nosso propósito.
          </p>
          <div className={styles.heroButtons} style={{ justifyContent: 'center' }}>
            <Button href="#contato" variant="primary">Falar com a equipe →</Button>
            <Button href="/projetos" variant="secondary">Ver projetos</Button>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Vamos trabalhar juntos?</h2>
            <p className={styles.ctaDescription}>Conta pra gente o que você precisa. A primeira conversa é por nossa conta.</p>
            <div className={styles.ctaButtons}>
              <Button href="#contato" variant="secondary">Agendar conversa →</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
