import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Daily Tarot Card - Free Daily Reading',
  description: 'Draw your free daily tarot card for guidance and inspiration. Get your tarot card of the day every morning. Start each day with insight.',
  path: '/daily-tarot',
  keywords: ['daily tarot', 'daily tarot card', 'tarot card of the day', 'daily reading'],
});

export default function DailyTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Daily Tarot Card
        </h1>
        <p className="text-xl text-gray-300">
          Draw your free daily tarot card for guidance and insight. Your tarot card of the day provides inspiration, perspective, and wisdom to carry with you.
        </p>
      </div>

      <ReadingWidget 
        spreadId="one-card"
        defaultQuestion="What guidance do I need today?"
        suggestedQuestions={[
          'What should I focus on today?',
          'What energy surrounds me today?',
          'What lesson should I learn today?',
          'What do I need to know right now?',
        ]}
      />

      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Why Draw a Daily Tarot Card?
          </h2>
          <p className="text-gray-300 mb-3">
            A daily tarot practice offers powerful benefits for self-awareness and personal growth. Drawing your tarot card of the day helps you:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Start each day with intention and mindfulness</li>
            <li>Gain perspective on your current energy and circumstances</li>
            <li>Develop your intuition through regular practice</li>
            <li>Notice patterns and themes across multiple readings</li>
            <li>Access wisdom and guidance whenever you need it</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            How to Use Your Daily Tarot Card
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Draw in the morning:</strong> Set your intention for the day</li>
            <li><strong>Reflect on the meaning:</strong> Read the interpretation with an open mind</li>
            <li><strong>Carry it with you:</strong> Keep the card's wisdom in mind throughout your day</li>
            <li><strong>Journal about it:</strong> Note how the card's themes showed up in your experiences</li>
            <li><strong>Review at night:</strong> Reflect on how the guidance manifested</li>
          </ol>
        </section>

        <section className="bg-ink-light rounded-xl p-6">
          <h3 className="text-xl font-bold text-gold mb-4">More Free Tarot Readings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/yes-or-no-tarot" className="text-gray-300 hover:text-gold transition-colors">
              → Yes or No Tarot
            </Link>
            <Link href="/three-card-tarot" className="text-gray-300 hover:text-gold transition-colors">
              → Three Card Reading
            </Link>
            <Link href="/love-tarot" className="text-gray-300 hover:text-gold transition-colors">
              → Love Tarot
            </Link>
            <Link href="/celtic-cross-tarot" className="text-gray-300 hover:text-gold transition-colors">
              → Celtic Cross
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
