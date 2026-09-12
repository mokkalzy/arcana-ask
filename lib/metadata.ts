import { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://arcana-ask.com';
const SITE_NAME = 'Arcana Ask';
const SITE_DESCRIPTION = 'Free online tarot reading. Get instant guidance with yes/no tarot, daily tarot cards, Celtic Cross spread, and more. No sign-up required.';

export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = '',
  keywords = [],
  type = 'website',
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: 'website' | 'article';
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  
  const defaultKeywords = [
    'tarot reading',
    'free tarot',
    'online tarot',
    'tarot cards',
    'divination',
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    authors: [{ name: SITE_NAME }],
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export const DEFAULT_METADATA = createMetadata({
  title: 'Free Online Tarot Reading',
  description: SITE_DESCRIPTION,
  keywords: ['yes no tarot', 'daily tarot', 'tarot spreads', 'celtic cross tarot'],
});
