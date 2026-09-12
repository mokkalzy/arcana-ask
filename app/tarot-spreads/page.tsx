import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { getAllSpreads } from '@/lib/spreads';

export const metadata = createMetadata({
  title: 'Tarot Spreads - All Free Reading Layouts',
  description: 'Complete guide to tarot spreads. Learn about yes/no, Celtic Cross, three-card, and more tarot reading layouts. All free.',
  path: '/tarot-spreads',
  keywords: ['tarot spreads', 'tarot layouts', 'tarot spread guide'],
});

export default function TarotSpreadsPage() {
  const spreads = [
    { id: 'yes-no', name: 'Yes or No', href: '/yes-or-no-tarot', cards: 1, icon: '❓' },
    { id: 'one-card', name: 'One Card / Daily', href: '/daily-tarot', cards: 1, icon: '🌅' },
    { id: 'three-card', name: 'Three Card (Past-Present-Future)', href: '/three-card-tarot', cards: 3, icon: '🔮' },
    { id: 'situation-action-outcome', name: 'Situation-Action-Outcome', href: '/love-tarot', cards: 3, icon: '💫' },
    { id: 'celtic-cross', name: 'Celtic Cross', href: '/celtic-cross-tarot', cards: 10, icon: '✨' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Tarot Spreads Guide
        </h1>
        <p className="text-xl text-gray-300">
          Explore all our free tarot spreads. From simple one-card draws to comprehensive Celtic Cross readings, find the perfect layout for your question.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {spreads.map((spread) => (
          <Link
            key={spread.id}
            href={spread.href}
            className="card hover:border-gold/40 transition-all hover:scale-105 group"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{spread.icon}</div>
              <div className="flex-1">
                <h2 className="text-xl font-serif font-bold text-gold mb-2 group-hover:underline">
                  {spread.name}
                </h2>
                <p className="text-sm text-gray-400 mb-3">
                  {spread.cards} card{spread.cards > 1 ? 's' : ''}
                </p>
                <span className="text-gold text-sm">Try this spread →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Choosing the Right Tarot Spread
          </h2>
          <p className="text-gray-300 mb-4">
            Different questions call for different spreads. Here's how to choose:
          </p>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">For Quick Yes/No Questions</h3>
              <p>Use the <Link href="/yes-or-no-tarot" className="text-gold hover:underline">Yes or No spread</Link>. One card provides straightforward guidance.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">For Daily Guidance</h3>
              <p>The <Link href="/daily-tarot" className="text-gold hover:underline">Daily Tarot</Link> or One Card spread is perfect for morning inspiration.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">For Understanding Progression</h3>
              <p>The <Link href="/three-card-tarot" className="text-gold hover:underline">Three Card spread</Link> shows past, present, and future or situation-action-outcome.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">For Deep, Complex Questions</h3>
              <p>The <Link href="/celtic-cross-tarot" className="text-gold hover:underline">Celtic Cross</Link> provides comprehensive insight from multiple angles.</p>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            How to Read Tarot Spreads
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Set your intention:</strong> Focus clearly on your question</li>
            <li><strong>Choose your spread:</strong> Match complexity to your question</li>
            <li><strong>Shuffle mindfully:</strong> Concentrate on your question while the cards shuffle</li>
            <li><strong>Draw your cards:</strong> Trust the process—the cards you need will appear</li>
            <li><strong>Read position by position:</strong> Consider each card's placement and meaning</li>
            <li><strong>Look for patterns:</strong> Notice repeated suits, numbers, or themes</li>
            <li><strong>Synthesize the message:</strong> How do the cards tell a complete story?</li>
            <li><strong>Reflect and journal:</strong> Write down insights for future reference</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
