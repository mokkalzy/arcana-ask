import { getCardBySlug, getAllCardSlugs, TAROT_DECK } from '@/lib/tarot-data';
import { createMetadata } from '@/lib/metadata';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import TarotCard from '@/components/TarotCard';

export async function generateStaticParams() {
  return getAllCardSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const card = getCardBySlug(params.slug);
  
  if (!card) {
    return {};
  }

  return createMetadata({
    title: `${card.name} Tarot Card Meaning`,
    description: `${card.name} tarot card meaning. Learn upright and reversed interpretations for love, career, and general readings. ${card.keywords.join(', ')}.`,
    path: `/meanings/${params.slug}`,
    keywords: [card.name, ...card.keywords, 'tarot meaning', 'card interpretation'],
  });
}

export default function CardMeaningPage({ params }: { params: { slug: string } }) {
  const card = getCardBySlug(params.slug);

  if (!card) {
    notFound();
  }

  const cardIndex = TAROT_DECK.findIndex(c => c.id === card.id);
  const prevCard = cardIndex > 0 ? TAROT_DECK[cardIndex - 1] : null;
  const nextCard = cardIndex < TAROT_DECK.length - 1 ? TAROT_DECK[cardIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-gold/20 rounded-full text-gold text-sm font-semibold mb-4">
            {card.arcana === 'major' ? 'Major Arcana' : `Minor Arcana - ${card.suit?.toUpperCase()}`}
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
            {card.name}
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {card.keywords.map((keyword) => (
              <span
                key={keyword}
                className="px-3 py-1 bg-ink-light border border-gold/30 rounded-full text-sm text-gray-300"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Card Display */}
        <div className="flex justify-center mb-12">
          <div className="w-48 h-80">
            <TarotCard card={card} faceUp={true} />
          </div>
        </div>

        {/* Meanings */}
        <div className="space-y-8">
          {/* Upright */}
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Upright Meaning
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {card.upright.meaning}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">💕 Love & Relationships</h3>
                <p className="text-gray-300 text-sm">{card.upright.love}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">💼 Career & Finance</h3>
                <p className="text-gray-300 text-sm">{card.upright.career}</p>
              </div>
            </div>
          </section>

          {/* Reversed */}
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Reversed Meaning
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {card.reversed.meaning}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">💕 Love & Relationships</h3>
                <p className="text-gray-300 text-sm">{card.reversed.love}</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-2">💼 Career & Finance</h3>
                <p className="text-gray-300 text-sm">{card.reversed.career}</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="card bg-gradient-to-br from-ink-light to-ink-lighter text-center">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Draw {card.name} in a Reading
            </h3>
            <p className="text-gray-300 mb-6">
              Want to see what {card.name} means in the context of your question? Try a free reading now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/yes-or-no-tarot" className="btn-primary">
                Yes or No Reading
              </Link>
              <Link href="/three-card-tarot" className="btn-secondary">
                Three Card Reading
              </Link>
              <Link href="/love-tarot" className="btn-secondary">
                Love Reading
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gold/20">
            {prevCard ? (
              <Link
                href={`/meanings/${prevCard.id}`}
                className="text-gold hover:underline"
              >
                ← {prevCard.name}
              </Link>
            ) : (
              <div></div>
            )}
            <Link href="/tarot-card-meanings" className="text-gold hover:underline">
              All Cards
            </Link>
            {nextCard ? (
              <Link
                href={`/meanings/${nextCard.id}`}
                className="text-gold hover:underline"
              >
                {nextCard.name} →
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
