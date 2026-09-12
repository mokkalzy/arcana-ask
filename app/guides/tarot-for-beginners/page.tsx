import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Tarot for Beginners - Complete Starter Guide',
  description: 'New to tarot? Start here. Learn the basics of tarot reading, card meanings, spreads, and how to begin your tarot journey.',
  path: '/guides/tarot-for-beginners',
  keywords: ['tarot for beginners', 'tarot basics', 'learn tarot', 'beginner tarot guide'],
});

export default function TarotForBeginnersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6 text-center">
          Tarot for Beginners
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Your complete starter guide to tarot reading
        </p>

        <div className="space-y-8">
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              What is Tarot?
            </h2>
            <p className="text-gray-300 mb-3">
              Tarot is a deck of 78 cards used for reflection, self-discovery, and gaining perspective on life questions. Each card carries symbolic meanings developed over centuries of use.
            </p>
            <p className="text-gray-300">
              Tarot isn't about predicting a fixed future—it's about exploring possibilities, understanding yourself, and gaining insight into situations. Think of it as a mirror for your intuition and subconscious wisdom.
            </p>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              The Structure of a Tarot Deck
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Major Arcana (22 cards)
                </h3>
                <p>
                  The "big picture" cards representing major life themes and spiritual lessons. From The Fool (0) to The World (21), these cards indicate significant events or important influences. <Link href="/meanings/major-arcana" className="text-gold hover:underline">Explore Major Arcana</Link>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Minor Arcana (56 cards)
                </h3>
                <p className="mb-2">
                  Four suits reflecting everyday experiences:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong>Wands:</strong> Passion, creativity, action, inspiration</li>
                  <li><strong>Cups:</strong> Emotions, relationships, intuition, love</li>
                  <li><strong>Swords:</strong> Thoughts, communication, challenges, truth</li>
                  <li><strong>Pentacles:</strong> Material world, money, career, security</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              How to Start Reading Tarot
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>Start simple:</strong> Begin with <Link href="/daily-tarot" className="text-gold hover:underline">one-card daily draws</Link> to learn card meanings</li>
              <li><strong>Learn gradually:</strong> Focus on a few cards at a time rather than memorizing all 78 at once</li>
              <li><strong>Practice regularly:</strong> Daily practice builds intuition and familiarity</li>
              <li><strong>Keep a journal:</strong> Record your readings and reflect on them over time</li>
              <li><strong>Trust your intuition:</strong> Your personal interpretations matter as much as traditional meanings</li>
              <li><strong>Move to simple spreads:</strong> Try <Link href="/three-card-tarot" className="text-gold hover:underline">three-card readings</Link> when ready</li>
            </ol>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Understanding Upright and Reversed Cards
            </h2>
            <div className="space-y-3 text-gray-300">
              <div>
                <strong className="text-gold">Upright:</strong> The card's energy flows freely. Traditional, positive expression of the card's meaning.
              </div>
              <div>
                <strong className="text-gold">Reversed:</strong> Blocked energy, internal processing, or the shadow side of the card. Not necessarily negative—often indicates an area needing attention or a different approach.
              </div>
              <p className="text-sm mt-3">
                <em>Tip: Beginners can start by reading all cards upright until comfortable, then gradually incorporate reversals.</em>
              </p>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Common Beginner Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Do I need to buy a physical deck?
                </h3>
                <p className="text-gray-300">
                  No! Online tarot is perfect for learning and practicing. You can always get a physical deck later if you want one.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Can tarot predict the future?
                </h3>
                <p className="text-gray-300">
                  Tarot shows possibilities and patterns, not fixed fate. You always have free will to change your path. Think of tarot as a tool for insight, not fortune-telling.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Are Death or Devil cards bad?
                </h3>
                <p className="text-gray-300">
                  No cards are inherently bad. Death represents transformation and endings that lead to new beginnings. The Devil represents bondage and shadow work. Both offer valuable lessons.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  How often should I do readings?
                </h3>
                <p className="text-gray-300">
                  Daily single-card draws are great for practice. For deeper questions, trust your first reading rather than drawing repeatedly for the same question.
                </p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Your First Reading: Step by Step
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li>Choose a simple spread like <Link href="/yes-or-no-tarot" className="text-gold hover:underline">Yes or No</Link> or <Link href="/daily-tarot" className="text-gold hover:underline">Daily Card</Link></li>
              <li>Formulate a clear question</li>
              <li>Focus on your question while the cards shuffle</li>
              <li>Draw your card(s)</li>
              <li>Look up the card meaning on our <Link href="/tarot-card-meanings" className="text-gold hover:underline">card meanings page</Link></li>
              <li>Reflect on how the meaning relates to your question</li>
              <li>Write down your thoughts and insights</li>
            </ol>
          </section>

          <div className="text-center card bg-gradient-to-br from-ink-light to-ink-lighter">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Ready to Begin?
            </h3>
            <p className="text-gray-300 mb-6">
              Start your tarot journey with a simple one-card reading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/daily-tarot" className="btn-primary">
                Draw Your First Card
              </Link>
              <Link href="/tarot-card-meanings" className="btn-secondary">
                Browse Card Meanings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
