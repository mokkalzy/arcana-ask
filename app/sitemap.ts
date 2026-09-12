import { MetadataRoute } from 'next';
import { getAllCardSlugs } from '@/lib/tarot-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcana-ask.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/free-tarot-reading',
    '/yes-or-no-tarot',
    '/daily-tarot',
    '/one-card-tarot',
    '/three-card-tarot',
    '/celtic-cross-tarot',
    '/love-tarot',
    '/career-tarot',
    '/random-tarot-card',
    '/tarot-card-generator',
    '/online-tarot-reading',
    '/ai-tarot',
    '/tarot-spreads',
    '/tarot-card-meanings',
    '/meanings/major-arcana',
    '/guides/how-to-read-tarot',
    '/guides/tarot-for-beginners',
    '/disclaimer',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route.includes('yes-or-no') || route.includes('free-tarot') ? 0.9 : 0.8,
  }));

  const cardPages = getAllCardSlugs().map((slug) => ({
    url: `${SITE_URL}/meanings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...cardPages];
}
