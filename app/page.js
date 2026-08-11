import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Link from 'next/link';
const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site ou landing page?",
    answer: "O prazo médio varia de 2 a 4 semanas para landing pages de alta conversão e de 4 a 8 semanas para sites institucionais completos, dependendo do escopo e das integrações necessárias."
  },
  {
    question: "Por que escolher a Lucerpy em vez de plataformas como Wix ou WordPress?",
    answer: "Desenvolvemos aplicações em Next.js com código limpo e moderno. Isso garante carregamento instantâneo (LCP baixo), segurança nativa, otimização SEO avançada e controle total sobre o design sem dependência de plugins pesados."
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
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroContent}>
          <div className={styles.tagline}>AGÊNCIA DIGITAL</div>
          <h1 className={styles.heroTitle}>
            Seu digital no <span className="text-primary">próximo nível</span>
          </h1>
          <p className={styles.heroDescription}>
            UX/UI, sites, landing pages e automações construídas com estratégia para transformar visitantes em clientes reais.
          </p>
          <div className={styles.heroButtons}>
            <Button href="#contato">Começar projeto</Button>
            <Button href="/projetos" variant="secondary">Ver portfólio</Button>
          </div>
          
          <div className={styles.heroStats}>
            <div className={styles.avatars}>
              <div className={styles.avatar} style={{backgroundColor: '#333'}}></div>
              <div className={styles.avatar} style={{backgroundColor: '#444'}}></div>
              <div className={styles.avatar} style={{backgroundColor: '#555'}}></div>
            </div>
            <div>
              <strong>50+ projetos entregues</strong>
              <span>98% de clientes satisfeitos</span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.floatingCard1}>
            <div className={styles.floatingTag}>🚀 50+ <br/>projetos entregues</div>
            <div className={styles.floatingInner}>
              <div className={styles.floatingPlaceholder}></div>
              <h4>Landing Page</h4>
              <p>Lançamento imobiliário</p>
            </div>
          </div>
          <div className={styles.floatingCard2}>
            <div className={styles.floatingTagSecondary}>⚡ 98% <br/>clientes satisfeitos</div>
            <div className={styles.floatingInner2}>
              <div className={styles.floatingPlaceholder2}></div>
              <h4>Institucional</h4>
              <p>Cavent Engenharia</p>
              <div className={styles.floatingMetrics}>
                <span>+180%</span>
                <small>leads qualificados</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>O QUE FAZEMOS</div>
              <h2 className={styles.sectionTitle}>Tudo que o seu digital precisa</h2>
            </div>
            <Button href="/servicos" variant="secondary">Ver todos os serviços →</Button>
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
              title="Sites & Landing Pages"
              description="Do portfólio institucional à landing de alta conversão. Rápidos, responsivos e otimizados para SEO desde o primeiro deploy."
            />
            <Card 
              type="service"
              number="03"
              title="Integrações & Automações"
              description="Conectamos tudo e automatizamos processos para sua equipe focar no que realmente importa."
            />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>PROJETOS</div>
              <h2 className={styles.sectionTitle}>Projetos que falam por si</h2>
            </div>
            <Button href="/projetos" variant="secondary">Ver todos →</Button>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card 
              type="project"
              tag="INSTITUCIONAL"
              title="Cavent Engenharia"
              description="Redesign de site institucional para conversão. +180% em leads qualificados em 3 meses."
              image="/cases/cavent/tela1.jpeg"
              imagePlaceholder="linear-gradient(45deg, #0f172a, #1e293b)"
              href="/projetos/cavent-engenharia"
            />
            <Card 
              type="project"
              tag="LANDING PAGE"
              title="Lançamento imobiliário"
              description="Alta conversão com integração CRM. Taxa 2x acima da média do setor."
              imagePlaceholder="linear-gradient(45deg, #2e1065, #4c1d95)"
              href="/projetos"
            />
            <Card 
              type="project"
              tag="E-COMMERCE"
              title="Loja Streetwear"
              description="E-commerce completo com integrações de pagamento e logística automatizada."
              imagePlaceholder="linear-gradient(45deg, #064e3b, #047857)"
              href="/projetos"
            />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Projetos entregues</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Clientes satisfeitos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>3<small>yr</small></span>
              <span className={styles.statLabel}>No mercado digital</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>Premiações</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <div className={styles.sectionTag}>BLOG</div>
              <h2 className={styles.sectionTitle}>Conteúdo que<br/><span className="text-primary">agrega de verdade</span></h2>
            </div>
            <Button href="/blog" variant="secondary">Ver todos →</Button>
          </div>
          
          <div className={styles.cardsGrid}>
            <Card 
              type="post"
              tag="DESIGN"
              title="Por que o seu site afasta clientes"
              description="Um site lento, confuso ou feio custa mais do que parece. Os erros mais comuns e como corrigi-los."
              imagePlaceholder="linear-gradient(45deg, #0f172a, #1e293b)"
              href="/blog/por-que-seu-site-afasta-clientes"
            />
            <Card 
              type="post"
              tag="TECNOLOGIA"
              title="Next.js vs WordPress: qual escolher?"
              description="A escolha da tecnologia impacta SEO, performance e custo. Analisamos os dois cenários."
              imagePlaceholder="linear-gradient(45deg, #2e1065, #4c1d95)"
              href="/blog"
            />
            <Card 
              type="post"
              tag="CASES"
              title="Como triplicamos leads da Cavent em 3 meses"
              description="Caso de estudo de como um redesign estratégico com otimizações SEO gerou resultados reais."
              imagePlaceholder="linear-gradient(45deg, #064e3b, #047857)"
              href="/projetos/cavent-engenharia"
            />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="container">
          <div className={styles.faqContainer}>
            <div className="text-center" style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className={styles.tagline}>PERGUNTAS FREQUENTES</div>
              <h2 className={styles.sectionTitle}>Dúvidas sobre nossos serviços</h2>
              <p className={styles.heroDescription} style={{ margin: '0 auto' }}>
                Respostas diretas para as perguntas mais comuns de quem quer elevar o nível do seu digital.
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
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Pronto para o próximo<br/>nível?</h2>
            <p className={styles.ctaDescription}>Vamos conversar sobre o seu projeto. A primeira call é por nossa conta.</p>
            <div className={styles.ctaButtons}>
              <Button href="#contato" variant="secondary" style={{ borderColor: 'var(--color-bg)', color: 'var(--color-bg)' }}>Falar com a Lucerpy →</Button>
              <Link href="/projetos" className={styles.ctaLink}>Ver portfólio</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
