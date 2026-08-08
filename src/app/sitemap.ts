import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/business', '/buy-sell', '/contact', '/repairs', '/blog'];
  const serviceRoutes = [
    '/repairs/iphone-repair',
    '/repairs/samsung-repair',
    '/repairs/ipad-tablet-repair',
    '/repairs/laptop-macbook-repair',
    '/repairs/games-console-repair',
    '/repairs/smartwatch-repair',
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: route === '' ? 1 : 0.8,
    })),
    ...serviceRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
