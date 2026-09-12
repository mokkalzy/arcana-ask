import { getMajorArcana } from '@/lib/tarot-data';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Major Arcana Tarot Cards - 22 Card Meanings',
  description: 'Complete guide to the 22 Major Arcana tarot cards. Learn the meanings of The Fool, The Magician, The High Priestess, and all major cards.',
  path: '/meanings/major-arcana',
  keywords: ['major arcana', 'major arcana meanings', 'tarot major cards'],
});

export default function MajorArcanaPage() {
  const majorArcana = getMajorArcana();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Major Arcana
        </h1>
        <p className="text-xl text-gray-300">
          The 22 Major Arcana cards represent life's spiritual and karmic lessons. These are the most powerful cards in the tarot deck.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {majorArcana.map((card) => (
          <Link
            key={card.id}
            href={`/meanings/${card.id}`}
            className="card hover:border-gold/40 transition-all hover:scale-105 group"
          >
            <div className="flex gap-4">
              <div className="text-3xl font-bold text-gold">{card.number}</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-bold text-gold mb-2 group-hover:underline">
                  {card.name}
                </h2>
                <p className="text-sm text-gray-400 mb-2">
                  {card.keywords.join(' • ')}
                </p>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {card.upright.meaning}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="max-w-4xl mx-auto card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          About the Major Arcana
        </h2>
        <p className="text-gray-300">
          The Major Arcana represents the Fool's Journey—a symbolic narrative of life's spiritual lessons from innocence (The Fool) to enlightenment (The World). When Major Arcana cards appear in readings, they indicate significant events, important life lessons, or powerful influences beyond everyday matters.
        </p>
      </div>
    </div>
  );
}
