import { getPostData, getSortedPostsData } from '@/lib/blog';
import styles from './post.module.css';
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return { title: 'Post não encontrado' };
  }

  const postUrl = `https://lucerpy.com.br/blog/${slug}`;

  return {
    title: `${postData.title} | Lucerpy Blog`,
    description: postData.description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: postData.title,
      description: postData.description,
      url: postUrl,
      type: 'article',
      publishedTime: postData.date,
      authors: ['Lucerpy Digital'],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.description,
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "description": postData.description,
    "datePublished": postData.date,
    "author": {
      "@type": "Organization",
      "name": "Lucerpy Digital",
      "url": "https://lucerpy.com.br"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lucerpy Digital",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lucerpy.com.br/favicon.ico"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://lucerpy.com.br/blog/${slug}`
    }
  };

  return (
    <article className={styles.article}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
