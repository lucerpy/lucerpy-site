import { getSortedPostsData } from '@/lib/blog';
import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache de 1 hora

export async function GET() {
  const posts = getSortedPostsData();
  const site_url = 'https://lucerpy.com.br';

  const feedItems = posts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${site_url}/blog/${post.slug}</link>
      <guid>${site_url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.tag}</category>
    </item>
  `).join('');

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Lucerpy Blog</title>
      <link>${site_url}</link>
      <description>Conteúdo que realmente agrega: design, tecnologia e estratégia digital.</description>
      <atom:link href="${site_url}/feed.xml" rel="self" type="application/rss+xml" />
      <language>pt-br</language>
      ${feedItems}
    </channel>
  </rss>`;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}

