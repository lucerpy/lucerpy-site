import { getSortedPostsData } from '@/lib/blog';

export default function sitemap() {
  const baseUrl = 'https://lucerpy.com.br';

  const staticRoutes = [
    '',
    '/servicos',
    '/projetos',
    '/projetos/cavent-engenharia',
    '/quem-somos',
    '/blog',
    '/privacidade',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : (route === '/servicos' || route === '/projetos' ? 0.8 : 0.6),
  }));

  const posts = getSortedPostsData();
  const blogRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
