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
];

// Every card lives in one filterable list - featured (real cases, with a
// case page) and concept (autoral exercises, no client behind them) alike.
// Keeping the featured cards out of this list used to mean the filter
// buttons only ever touched the 6 concept cards below, while Cavent/
// Inventário/Torqx/GuiaLMS stayed pinned at the top regardless of which
// filter was active - looked broken, since "E-commerce" would still show
// three cards that have nothing to do with e-commerce.
const ALL_PROJECTS = [
  {
    featured: true,
    category: 'INSTITUCIONAL',
    tag: 'DESTAQUE',
    title: 'Cavent Engenharia',
    description: 'Redesign completo do site institucional focado em conversão de leads B2B. Resultado: +180% em contatos qualificados em apenas 3 meses após o lançamento.',
    image: '/cases/cavent/tela1.jpeg',
    imagePlaceholder: 'linear-gradient(45deg, #0f172a, #1e293b)',
    href: '/projetos/cavent-engenharia',
    metrics: [
      { value: '+180%', label: 'leads qualificados' },
      { value: '3x', label: 'mais rápido' }
    ],
  },
  {
    featured: true,
    category: 'APP',
    tag: 'DESTAQUE',
    title: 'Inventário de TI',
    description: 'Exercício autoral: dashboard para controle de ativos de TI em tempo real, com gestão de colaboradores, kits de boas-vindas e devoluções.',
    image: '/cases/inventario-ti.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #1e3a8a, #0f172a)',
    href: '/projetos/inventario-ti',
    metrics: [
      { value: '6', label: 'módulos integrados' },
      { value: '100%', label: 'responsivo' }
    ],
  },
  {
    featured: true,
    category: 'E-COMMERCE',
    tag: 'DESTAQUE',
    title: 'Torqx',
    description: 'Loja Shopify internacional para a Torqx Testing Equipment, distribuidora exclusiva da AW Dynamometer na América Latina.',
    image: '/cases/torqx/torqx-top.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #7A1230, #0C0D11)',
    href: '/projetos/torqx',
    metrics: [
      { value: '12 anos', label: 'de mercado' },
      { value: '5 marcas', label: 'confiam nos equipamentos' }
    ],
  },
  {
    featured: true,
    category: 'INSTITUCIONAL',
    tag: 'DESTAQUE',
    title: 'GuiaLMS',
    description: 'Portal de conteúdo sobre plataformas de treinamento corporativo (LMS): editorial estruturado, categorias temáticas e captura de newsletter.',
    image: '/cases/guialms/guialms-home.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #3A2E7A, #0C0D11)',
    href: '/projetos/guialms',
    metrics: [
      { value: '6 seções', label: 'de conteúdo' },
      { value: 'Editorial', label: 'que também converte' }
    ],
  },
  {
    featured: true,
    category: 'INSTITUCIONAL',
    tag: 'DESTAQUE',
    title: 'NK3IT',
    description: 'Site institucional para empresa de infraestrutura e suporte de TI, com foco em geração de leads corporativos: gestão de cloud, backup, segurança e Microsoft 365.',
    image: '/cases/nk3it/tela1.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #0a1a3a, #050b1a)',
    href: '/projetos/nk3it',
    metrics: [
      { value: '21 anos', label: 'de mercado' },
      { value: '80%', label: 'de aumento em produtividade' }
    ],
  },
  {
    featured: true,
    category: 'E-COMMERCE',
    tag: 'DESTAQUE',
    title: 'Weaver',
    description: 'E-commerce de streetwear e cultura skate: shapes, apparel e sneakers com identidade forte de marca e navegação por categoria.',
    image: '/cases/weaver/tela1.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #C2410C, #1c1917)',
    href: '/projetos/weaver',
    metrics: [
      { value: '3', label: 'categorias integradas' },
      { value: '100%', label: 'identidade autoral' }
    ],
  },
  {
    featured: false,
    category: 'LANDING PAGE',
    tag: 'CONCEITO · LANDING PAGE',
    title: 'Prestige Imóveis',
    description: 'Exercício autoral: portal imobiliário de alto padrão com busca por localização, tipo e faixa de preço, e vitrine de imóveis em destaque.',
    image: '/cases/imobiliario.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #1a2e22, #0d1a14)',
  },
  {
    featured: false,
    category: 'INSTITUCIONAL',
    tag: 'CONCEITO · INSTITUCIONAL',
    title: 'Moraes & Associados',
    description: 'Exercício autoral: presença digital sóbria e confiável para escritório de advocacia, com captação de consulta gratuita direto no hero.',
    image: '/cases/advocacia.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #0f1e33, #06101d)',
  },
  {
    featured: false,
    category: 'APP',
    tag: 'CONCEITO · APP',
    title: 'Sorriso Vivo',
    description: 'Exercício autoral: site para clínica odontológica com agendamento em destaque, prova social e indicadores de confiança logo no hero.',
    image: '/cases/estetica.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #0d3b36, #06201c)',
  },
  {
    featured: false,
    category: 'INSTITUCIONAL',
    tag: 'CONCEITO · INSTITUCIONAL',
    title: 'Prospera',
    description: 'Exercício autoral: produto de consultoria financeira com IA, apresentando o assistente em ação já na dobra inicial.',
    image: '/cases/financeira.jpg',
    imagePlaceholder: 'linear-gradient(45deg, #241b4d, #140f2e)',
  },
];

export default function ProjectsSection() {
  const [activeTag, setActiveTag] = useState(null);

  const filteredProjects = activeTag
    ? ALL_PROJECTS.filter((project) => project.category === activeTag)
    : ALL_PROJECTS;

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
        {filteredProjects.map((project) => {
          const card = (
            <Card
              type="project"
              tag={project.tag}
              title={project.title}
              description={project.description}
              image={project.image}
              imagePlaceholder={project.imagePlaceholder}
              href={project.href}
              metrics={project.metrics}
            />
          );

          return project.featured ? (
            <div key={project.title} className={styles.featuredCard}>
              {card}
            </div>
          ) : (
            <div key={project.title}>{card}</div>
          );
        })}

        {filteredProjects.length === 0 && (
          <p>Nenhum projeto encontrado nessa categoria.</p>
        )}
      </div>
    </>
  );
}
