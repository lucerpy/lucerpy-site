import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import Link from 'next/link';
import LiquidMetalHero from '@/components/originkit/liquid-metal-hero';
import { LogoMarquee } from '@/components/originkit/ui/hero-22/logo-marquee';
import '@/components/originkit/hero-22.css';
import CtaMarquee from '@/components/CtaMarquee/CtaMarquee';
import { PORTFOLIO_IMAGES_TOP, PORTFOLIO_IMAGES_BOTTOM } from '@/components/CtaMarquee/portfolioImages';
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
    question: "Vocês fazem chatbot de atendimento no WhatsApp com IA?",
    answer: "Sim! Implementamos automação de atendimento no WhatsApp — do menu de triagem simples ao chatbot com IA integrado ao seu CRM — para responder o cliente na hora sem perder o toque humano nos casos que precisam de atenção real."
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
      <LiquidMetalHero />

      <section className="z-20 flex w-full flex-col items-center overflow-hidden border-t border-[#2D3039] bg-[#16181F] py-2 ipad:py-3">
        <LogoMarquee />
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
            <Button href="/projetos" variant="link" aria-label="Ver todos os projetos">Ver todos →</Button>
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
              title="Conceito Metais"
              description="Migração de WordPress para Shopify com nova identidade visual, para loja de acessibilidade, torneiras e itens hospitalares com a linha NBR 9050 em destaque."
              image="/cases/conceito-metais/antes-depois/depois-inicio.jpg"
              imagePlaceholder="linear-gradient(45deg, #3A2A0A, #0C0D11)"
              href="/projetos/conceito-metais"
              metrics={[
                { value: 'Shopify', label: 'migração completa' },
                { value: '27', label: 'páginas redesenhadas' }
              ]}
            />
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
              description="Sites institucionais, landing pages e aplicações web construídos com performance real e código limpo."
            />
            <Card
              type="service"
              number="03"
              title="Automações & CRMs"
              description="Chatbots de atendimento no WhatsApp com IA, integrações com CRM e fluxos que conectam suas ferramentas de vendas para você não perder nenhum lead."
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
            <Button href="/blog" variant="link" aria-label="Ver todos os artigos do blog">Ver todos →</Button>
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

      <CtaMarquee
        title="Pronto para o próximo nível?"
        description="Vamos conversar sobre o seu projeto. A primeira call é por nossa conta."
        buttonText="Falar com a Lucerpy →"
        buttonHref="/contato"
        secondaryText="Ver portfólio"
        secondaryHref="/projetos"
        imagesTop={PORTFOLIO_IMAGES_TOP}
        imagesBottom={PORTFOLIO_IMAGES_BOTTOM}
      />
    </>
  );
}
