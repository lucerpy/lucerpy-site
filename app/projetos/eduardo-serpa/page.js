import styles from './page.module.css';
import Button from '@/components/Button/Button';
import Link from 'next/link';
import Image from 'next/image';
import CtaBackground from '@/components/CtaBackground/CtaBackground';

export const metadata = {
  title: 'Case Eduardo Serpa',
  description: 'Portfólio pessoal do fundador da Lucerpy: currículo, stack técnica, experiência, projetos e automações em código aberto numa única página.',
  alternates: {
    canonical: 'https://lucerpy.com.br/projetos/eduardo-serpa',
  },
  openGraph: {
    title: 'Case Eduardo Serpa | Lucerpy',
    description: 'Portfólio pessoal do fundador da Lucerpy: currículo, stack técnica, experiência, projetos e automações em código aberto numa única página.',
    url: 'https://lucerpy.com.br/projetos/eduardo-serpa',
    images: [
      {
        url: 'https://lucerpy.com.br/cases/eduardo-serpa/hero.jpeg',
        width: 1440,
        height: 900,
        alt: 'Case Eduardo Serpa',
      },
    ],
  },
};

export default function EduardoSerpa() {
  return (
    <article className={styles.caseArticle}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/projetos" className={styles.backLink}>← Voltar para projetos</Link>
          <div className={styles.tag}>LANDING PAGE · PORTFÓLIO PESSOAL</div>
          <h1 className={styles.heroTitle}>Eduardo Serpa</h1>
          <p className={styles.heroDescription}>
            Portfólio pessoal de Eduardo Serpa, fundador da Lucerpy: currículo, stack técnica, experiência profissional, projetos reais e automações publicadas em código aberto, tudo numa única página de rolagem. Veja o site no ar em{' '}
            <a href="https://eduardo-serpa.vercel.app/" target="_blank" rel="noopener noreferrer">eduardo-serpa.vercel.app</a>.
          </p>
          <div className={styles.metricsRow}>
            <div className={styles.metric}>
              <strong>7 seções</strong>
              <span>Sobre, stack, experiência, projetos, automações, formação e contato</span>
            </div>
            <div className={styles.metric}>
              <strong>8 repositórios</strong>
              <span>Automações e integrações publicadas no GitHub</span>
            </div>
            <div className={styles.metric}>
              <strong>5 anos</strong>
              <span>De experiência com Shopify traduzidos em currículo vivo</span>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <h2>Um currículo que também é prova de trabalho</h2>
            <p>Em vez de um PDF estático, a página junta o histórico profissional com os próprios artefatos técnicos — código real, cases reais, stack real — como evidência de cada linha do currículo.</p>
          </div>

          <div className={styles.presentationGallery}>
            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/hero.jpeg"
                  alt="Eduardo Serpa - Seção inicial"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Especialidade antes do nome bonito</h3>
                <p>O hero abre com a especialidade concreta — e-commerce, integrações, automação e IA aplicada — e não um cargo genérico, direto ao ponto de quem está avaliando um perfil técnico específico.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/stack.jpeg"
                  alt="Eduardo Serpa - Stack técnica organizada por área"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Stack separada por função, não numa lista solta</h3>
                <p>E-commerce & front, backend & infra, IA & automação, marketing & suporte: agrupar por área ajuda o recrutador técnico a achar rápido a informação que importa pra vaga específica que está avaliando.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/experiencia.jpeg"
                  alt="Eduardo Serpa - Linha do tempo de experiência profissional"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Trajetória em linha do tempo, com o que cada etapa realmente entregou</h3>
                <p>Cada posição vem com o trabalho técnico feito nela, não só cargo e data — de auxiliar de comércio a especialista técnico até a construção da própria plataforma de e-commerce e IA.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/projetos.jpeg"
                  alt="Eduardo Serpa - Seção de projetos reais"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Cases da própria Lucerpy, linkados de verdade</h3>
                <p>Torqx, GuiaLMS, Cavent Engenharia e outros cases reais da agência aparecem com link direto pro case completo — prova social que qualquer um pode conferir, não só uma lista de nomes de projeto.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/automacoes.jpeg"
                  alt="Eduardo Serpa - Automações publicadas em código aberto no GitHub"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Código de verdade, não só a promessa de saber programar</h3>
                <p>Repositórios reais de integração Shopify ↔ ERP ↔ CRM, sincronização com TalentLMS e geração de voucher — sanitizados para portfólio, mas rodando em cima do mesmo problema que resolveriam em produção.</p>
              </div>
            </div>

            <div className={styles.presentationItem}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/cases/eduardo-serpa/contato.jpeg"
                  alt="Eduardo Serpa - Seção de contato"
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={styles.caseImage}
                />
              </div>
              <div className={styles.itemInfo}>
                <h3>Aberto sobre o que está buscando, sem enrolação</h3>
                <p>CLT ou PJ, remoto, híbrido ou presencial — a seção de contato já deixa claro o tipo de oportunidade que faz sentido, poupando ida e volta de quem está entrando em contato pela primeira vez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} id="contato">
        <CtaBackground variant="eduardo-serpa" />
        <div className={styles.ctaOverlay} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Precisa de um portfólio que prove o que você sabe fazer?</h2>
            <p className={styles.ctaDescription}>Currículo em página não precisa ser PDF estático — pode ser prova de trabalho de verdade.</p>
            <div className={styles.ctaButtons}>
              <Button href="/contato" variant="secondary">Falar com a equipe →</Button>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
