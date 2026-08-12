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

const PROJECTS = [
  {
    tag: 'LANDING PAGE',
    title: 'Lançamento imobiliário',
    description: 'Alta conversão para lançamento residencial com integração CRM e automação de leads.',
    image: '/cases/imobiliario.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #2e1065, #4c1d95)',
  },
  {
    tag: 'E-COMMERCE',
    title: 'Loja Streetwear',
    description: 'E-commerce completo com integrações de pagamento e logística automatizada.',
    image: '/cases/streetwear.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #064e3b, #047857)',
  },
  {
    tag: 'INSTITUCIONAL',
    title: 'Escritório de Advocacia',
    description: 'Presença digital sóbria e confiável para área jurídica, com foco em autoridade.',
    image: '/cases/advocacia.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #78350f, #451a03)',
  },
  {
    tag: 'APP',
    title: 'Clínica de Estética',
    description: 'Interface mobile-first para agendamento e gestão de clientes com notificações automáticas.',
    image: '/cases/estetica.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #1e3a8a, #172554)',
  },
  {
    tag: 'SAAS',
    title: 'SaaS B2B',
    description: 'Landing page de alta performance para produto de software com trial gratuito e onboarding.',
    image: '/cases/saas.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #4c1d95, #2e1065)',
  },
  {
    tag: 'INSTITUCIONAL',
    title: 'Consultoria Financeira',
    description: 'Site institucional com portal do cliente e integração com sistema de gestão patrimonial.',
    image: '/cases/saas.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #14532d, #064e3b)',
  },
];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState(null);

  const filteredProjects = activeTag
    ? PROJECTS.filter((project) => project.tag === activeTag)
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

        {filteredProjects.map((project) => (
          <Card
            key={project.title}
            type="project"
            tag={project.tag}
            title={project.title}
            description={project.description}
            image={project.image}
            imagePlaceholder={project.imagePlaceholder}
          />
        ))}

        {filteredProjects.length === 0 && (
          <p>Nenhum projeto encontrado nessa categoria.</p>
        )}
      </div>
    </>
  );
}
