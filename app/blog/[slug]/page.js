import { getPostData, getSortedPostsData } from '@/lib/blog';
import styles from './post.module.css';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return { title: 'Post não encontrado' };
  }

  return {
    title: `${postData.title} | Lucerpy Blog`,
    description: postData.description,
  };
}

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    return (
      <div className="container" style={{ paddingTop: '120px', minHeight: '60vh' }}>
        <h1>Post não encontrado</h1>
        <Link href="/blog" className="text-primary">← Voltar para o blog</Link>
      </div>
    );
  }

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>← Voltar para o blog</Link>
          <div className={styles.tag}>{postData.tag || 'ARTIGO'}</div>
          <h1 className={styles.title}>{postData.title}</h1>
          <p className={styles.description}>{postData.description}</p>
          <div className={styles.meta}>
            Publicado em: {new Date(postData.date).toLocaleDateString('pt-BR')}
          </div>
        </div>
      </header>

      <div className="container">
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </article>
  );
}
