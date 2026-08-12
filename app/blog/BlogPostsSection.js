'use client';

import { useState } from 'react';
import Card from '@/components/Card/Card';
import styles from './page.module.css';

function toTitleCase(tag) {
  return tag.charAt(0) + tag.slice(1).toLowerCase();
}

export default function BlogPostsSection({ posts }) {
  const tags = ['Todos', ...Array.from(new Set(posts.map((post) => post.tag).filter(Boolean)))];
  const [activeTag, setActiveTag] = useState('Todos');

  const filteredPosts = activeTag === 'Todos'
    ? posts
    : posts.filter((post) => post.tag === activeTag);

  return (
    <>
      <div className={styles.filters}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.filterBtn} ${activeTag === tag ? styles.active : ''}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag === 'Todos' ? 'Todos' : toTitleCase(tag)}
          </button>
        ))}
      </div>

      <div className={styles.cardsGrid}>
        {filteredPosts.map((post) => (
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

        {filteredPosts.length === 0 && (
          <p>Nenhum artigo encontrado nessa categoria.</p>
        )}
      </div>
    </>
  );
}
