import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { TAROT_DECK, getMajorArcana, getMinorArcana } from '@/lib/tarot-data';

export const metadata = createMetadata({
  title: 'Tarot Card Meanings - Complete 78-Card Guide',
  description: 'Complete tarot card meanings for all 78 cards. Major and Minor Arcana with upright and reversed interpretations. Free comprehensive guide.',
  path: '/tarot-card-meanings',
  keywords: ['tarot card meanings', 'tarot meanings', 'card interpretations', 'major arcana', 'minor arcana'],
});

export default function TarotCardMeaningsPage() {
  const majorArcana = getMajorArcana();
  const minorArcana = getMinorArcana();
  
  const suits = {
    wands: minorArcana.filter(c => c.suit === 'wands'),
    cups: minorArcana.filter(c => c.suit === 'cups'),
    swords: minorArcana.filter(c => c.suit === 'swords'),
    pentacles: minorArcana.filter(c => c.suit === 'pentacles'),
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Tarot Card Meanings
        </h1>
        <p className="text-xl text-gray-300">
          Complete guide to all 78 tarot card meanings. Explore the Major Arcana and Minor Arcana with upright and reversed interpretations.
        </p>
      </div>

      {/* Major Arcana */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-serif font-bold text-gold">
            Major Arcana (22 Cards)
          </h2>
          <Link href="/meanings/major-arcana" className="text-gold hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {majorArcana.map((card) => (
            <Link
              key={card.id}
              href={`/meanings/${card.id}`}
              className="card hover:border-gold/40 transition-all hover:scale-105 p-4 text-center group"
            >
              <div className="text-2xl mb-2">{card.number}</div>
              <h3 className="text-sm font-semibold text-gold group-hover:underline">
                {card.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Minor Arcana by Suit */}
      {Object.entries(suits).map(([suitName, cards]) => (
        <section key={suitName} className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gold mb-6 capitalize">
            {suitName} ({cards.length} Cards)
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {cards.map((card) => (
              <Link
                key={card.id}
                href={`/meanings/${card.id}`}
                className="card hover:border-gold/40 transition-all hover:scale-105 p-3 text-center group"
              >
                <h3 className="text-sm font-semibold text-gold group-hover:underline">
                  {card.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* About Tarot */}
      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Understanding Tarot Card Meanings
          </h2>
          <p className="text-gray-300 mb-3">
            The tarot deck consists of 78 cards divided into two main groups:
          </p>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">Major Arcana (22 cards)</h3>
              <p>
                Represent major life themes, spiritual lessons, and significant events. These cards carry powerful archetypal energy and indicate important turning points.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">Minor Arcana (56 cards)</h3>
              <p>
                Divided into four suits (Wands, Cups, Swords, Pentacles), these cards reflect everyday experiences, challenges, and opportunities in different life areas.
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            The Four Suits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">🔥 Wands</h3>
              <p className="text-sm">Passion, creativity, action, inspiration, energy, enterprise</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">💧 Cups</h3>
              <p className="text-sm">Emotions, relationships, intuition, love, feelings, connections</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">⚔️ Swords</h3>
              <p className="text-sm">Thoughts, communication, conflict, truth, intellect, challenges</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">🪙 Pentacles</h3>
              <p className="text-sm">Material world, money, career, health, practical matters, security</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
