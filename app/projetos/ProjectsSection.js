'use client';

import { useState } from 'react';
import Card from '@/components/Card/Card';
import styles from './page.module.css';

const FILTERS = [
  { label: 'Todos', tag: null },
  { label: 'Institucional', tag: 'INSTITUCIONAL' },
  { label: 'E-commerce', tag: 'E-COMMERCE' },
  { label: 'Landing Page', tag: 'LANDING PAGE' },
  { label: 'App', tag: 'APP' },
  { label: 'SaaS', tag: 'SAAS' },
];

// Exercícios autorais — não têm cliente real por trás nem case a mostrar,
// por isso levam "CONCEITO" na tag e não abrem link nenhum (Card.js só
// renderiza como link quando recebe href de verdade).
const PROJECTS = [
  {
    category: 'LANDING PAGE',
    tag: 'CONCEITO · LANDING PAGE',
    title: 'Lançamento imobiliário',
    description: 'Exercício autoral: alta conversão para lançamento residencial com integração CRM e automação de leads.',
    image: '/cases/imobiliario.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #2e1065, #4c1d95)',
  },
  {
    category: 'E-COMMERCE',
    tag: 'CONCEITO · E-COMMERCE',
    title: 'Loja Streetwear',
    description: 'Exercício autoral: e-commerce completo com integrações de pagamento e logística automatizada.',
    image: '/cases/streetwear.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #064e3b, #047857)',
  },
  {
    category: 'INSTITUCIONAL',
    tag: 'CONCEITO · INSTITUCIONAL',
    title: 'Escritório de Advocacia',
    description: 'Exercício autoral: presença digital sóbria e confiável para área jurídica, com foco em autoridade.',
    image: '/cases/advocacia.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #78350f, #451a03)',
  },
  {
    category: 'APP',
    tag: 'CONCEITO · APP',
    title: 'Clínica de Estética',
    description: 'Exercício autoral: interface mobile-first para agendamento e gestão de clientes com notificações automáticas.',
    image: '/cases/estetica.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #1e3a8a, #172554)',
  },
  {
    category: 'SAAS',
    tag: 'CONCEITO · SAAS',
    title: 'SaaS B2B',
    description: 'Exercício autoral: landing page de alta performance para produto de software com trial gratuito e onboarding.',
    image: '/cases/saas.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #4c1d95, #2e1065)',
  },
  {
    category: 'INSTITUCIONAL',
    tag: 'CONCEITO · INSTITUCIONAL',
    title: 'Consultoria Financeira',
    description: 'Exercício autoral: site institucional com portal do cliente e integração com sistema de gestão patrimonial.',
    image: '/cases/financeira.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #14532d, #064e3b)',
  },
  // Inventário de TI is featured (below, alongside Cavent) instead of
  // living in this grid - it has its own case page like Cavent does.
];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState(null);

  const filteredProjects = activeTag
    ? PROJECTS.filter((project) => project.category === activeTag)
    : PROJECTS;

  return (
    <>
      <div className={styles.filters}>
        {FILTERS.map((filter) => (
          <button
            key={filter.label}
            className={`${styles.filterBtn} ${activeTag === filter.tag ? styles.active : ''}`}
            onClick={() => setActiveTag(filter.tag)}
          >
            {filter.label}
          </button>
        ))}
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

        <div className={styles.featuredCard}>
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
        </div>

        <div className={styles.featuredCard}>
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

        <div className={styles.featuredCard}>
          <Card
            type="project"
            tag="DESTAQUE"
            title="GuiaLMS"
            description="Portal de conteúdo sobre plataformas de treinamento corporativo (LMS): editorial estruturado, categorias temáticas e captura de newsletter."
            image="/cases/guialms/guialms-home.jpg"
            imagePlaceholder="linear-gradient(45deg, #3A2E7A, #0C0D11)"
            href="/projetos/guialms"
            metrics={[
              { value: '6 seções', label: 'de conteúdo' },
              { value: 'Editorial', label: 'que também converte' }
            ]}
          />
        </div>

        {filteredProjects.map((project) => (
          <Card
            key={project.title}
            type="project"
            tag={project.tag}
            title={project.title}
            description={project.description}
            image={project.image}
            imagePlaceholder={project.imagePlaceholder}
            href={project.href}
          />
        ))}

        {filteredProjects.length === 0 && (
          <p>Nenhum projeto encontrado nessa categoria.</p>
        )}
      </div>
    </>
  );
}
