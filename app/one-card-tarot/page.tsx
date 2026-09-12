import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'One Card Tarot Reading - Simple & Powerful',
  description: 'Free one card tarot reading online. Get clear, focused guidance with a single tarot card. Perfect for quick questions and daily wisdom.',
  path: '/one-card-tarot',
  keywords: ['one card tarot', 'single card reading', 'one card reading'],
});

export default function OneCardTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          One Card Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          Sometimes one card is all you need. Draw a single tarot card for clear, focused guidance on any question.
        </p>
      </div>

      <ReadingWidget 
        spreadId="one-card"
        suggestedQuestions={[
          'What do I most need to know right now?',
          'What energy should I embrace today?',
          'What is blocking my progress?',
          'What will help me most?',
        ]}
      />
    </div>
  );
}
