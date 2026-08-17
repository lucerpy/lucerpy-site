import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import Hero22 from '@/components/originkit/hero-22';
import CtaBackground from '@/components/CtaBackground/CtaBackground';
import ParticleSphere from '@/components/originkit/ui/particlesphere-lazy';
import { getSortedPostsData } from '@/lib/blog';
const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site ou landing page?",
    answer: "O prazo médio varia de 2 a 4 semanas para landing pages de alta conversão e de 4 a 8 semanas para sites institucionais completos, dependendo do escopo e das integrações necessárias."
  },
  {
    question: "Por que escolher a Lucerpy em vez de plataformas como Wix ou WordPress?",
    answer: "Desenvolvemos aplicações com tecnologia moderna e código limpo. Isso garante carregamento instantâneo, segurança nativa, otimização SEO avançada e controle total sobre o design sem dependência de plugins pesados."
  },
  {
    question: "Vocês realizam integrações com CRMs e sistemas de vendas?",
    answer: "Sim! Conectamos seu site a qualquer plataforma: RD Station, HubSpot, Pipedrive, WhatsApp Webhooks, gateways de pagamento e sistemas internos customizados."
  },
  {
    question: "Como funciona a primeira conversa de diagnóstico?",
    answer: "A primeira reunião é 100% gratuita. Analisamos os objetivos do seu negócio, identificamos gargalos de conversão no seu digital e apresentamos um plano de ação claro com prazos e investimento transparente."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function Home() {
  const latestPosts = getSortedPostsData().slice(0, 3);

  return (
    <>
      <Hero22 />

      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>O QUE FAZEMOS</div>
              <h2 className={styles.sectionTitle}>Tudo que o seu digital precisa</h2>
            </div>
            <Button href="/servicos" variant="link">Ver todos os serviços →</Button>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card 
              type="service"
              number="01"
              title="UX/UI Design"
              description="Interfaces que convertem. Criamos experiências intuitivas e bonitas que guiam seus usuários até a ação desejada com elegância."
            />
            <Card 
              type="service"
              number="02"
              title="Desenvolvimento Web"
              description="Sites institucionais, landing pages e aplicações web ultra rápidas. Performance real e código limpo."
            />
            <Card 
              type="service"
              number="03"
              title="Automações & CRMs"
              description="Conectamos suas ferramentas de vendas e marketing para você não perder nenhum lead e otimizar processos."
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.orbGrid}>
            <div className={styles.orbContent}>
              <div className={styles.sectionTag}>INTELIGÊNCIA APLICADA</div>
              <h2 className={styles.sectionTitle}>
                Cada decisão, guiada por <span className="text-primary">dados e estratégia</span>.
              </h2>
              <p className={styles.orbText}>
                Da primeira linha de código à automação mais avançada, unimos tecnologia de ponta e visão de negócio para transformar complexidade em resultado simples e mensurável.
              </p>
              <Button href="/contato" variant="primary">Vamos conversar →</Button>
            </div>
            <div className={styles.orbVisual}>
              <ParticleSphere />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, transparent 0px, var(--color-bg-light) 280px)', position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>PORTFÓLIO</div>
              <h2 className={styles.sectionTitle}>Projetos em destaque</h2>
            </div>
            <Button href="/projetos" variant="link">Ver todos →</Button>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card 
              type="project"
              tag="DESTAQUE"
              title="Cavent Engenharia"
              description="Redesign completo do site institucional focado em conversão de leads B2B. Resultado: +180% em contatos qualificados."
              image="/cases/cavent/tela1.jpeg"
              imagePlaceholder="linear-gradient(45deg, #0f172a, #1e293b)"
              href="/projetos/cavent-engenharia"
              metrics={[
                { value: '+180%', label: 'leads qualificados' },
                { value: '3x', label: 'mais rápido' }
              ]}
            />
            <Card
              type="project"
              tag="DESTAQUE"
              title="Inventário de TI"
              description="Exercício autoral: dashboard para controle de ativos de TI em tempo real, com gestão de colaboradores, kits de boas-vindas e devoluções."
              image="/cases/inventario-ti.jpg"
              imagePlaceholder="linear-gradient(45deg, #1e3a8a, #0f172a)"
              href="/projetos/inventario-ti"
              metrics={[
                { value: '6', label: 'módulos integrados' },
                { value: '100%', label: 'responsivo' }
              ]}
            />
            <Card
              type="project"
              tag="DESTAQUE"
              title="Torqx"
              description="Loja Shopify internacional para a Torqx Testing Equipment, distribuidora exclusiva da AW Dynamometer na América Latina."
              image="/cases/torqx/torqx-top.jpg"
              imagePlaceholder="linear-gradient(45deg, #7A1230, #0C0D11)"
              href="/projetos/torqx"
              metrics={[
                { value: '12 anos', label: 'de mercado' },
                { value: '5 marcas', label: 'confiam nos equipamentos' }
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <div className={styles.sectionTag}>SOBRE A LUCERPY</div>
              <h2 className={styles.sectionTitle}>Estratégia e execução no mesmo lugar</h2>
              <div className={styles.aboutText}>
                <p>Não somos uma agência tradicional que só entrega telas bonitas. Somos parceiros de tecnologia e crescimento.</p>
                <p>Unimos design focado em conversão, desenvolvimento de alta performance e automações inteligentes para fazer seu negócio crescer de verdade.</p>
              </div>
              <Button href="/quem-somos" variant="primary">Conheça nossa história →</Button>
            </div>
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
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>BLOG</div>
              <h2 className={styles.sectionTitle}>Últimos artigos</h2>
            </div>
            <Button href="/blog" variant="link">Ver todos →</Button>
          </div>
          
          <div className={styles.cardsGrid}>
            {latestPosts.map((post) => (
              <Card
                key={post.slug}
                type="post"
                tag={post.tag || "ARTIGO"}
                title={post.title}
                description={post.description}
                href={`/blog/${post.slug}`}
                image={post.image}
                imagePlaceholder={post.gradient || "linear-gradient(45deg, #1e293b, #0f172a)"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="container">
          <div className={styles.faqContainer}>
            <div className="text-center" style={{ textAlign: 'center' }}>
              <div className={styles.sectionTag} style={{ display: 'inline-block' }}>DÚVIDAS FREQUENTES</div>
              <h2 className={styles.sectionTitle}>Perguntas Frequentes</h2>
              <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                Tudo o que você precisa saber antes de iniciar seu projeto com a gente.
              </p>
            </div>

            <div className={styles.faqGrid}>
              {faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="home" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para o próximo<br/>nível?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre o seu projeto. A primeira call é por nossa conta.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a Lucerpy →</Button>
              <Button href="/projetos" variant="link">Ver portfólio</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
