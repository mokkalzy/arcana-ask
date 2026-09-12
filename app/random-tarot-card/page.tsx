import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Random Tarot Card Generator - Draw Any Card',
  description: 'Random tarot card generator. Draw a completely random card from the 78-card deck for spontaneous guidance and exploration.',
  path: '/random-tarot-card',
  keywords: ['random tarot card', 'tarot card generator', 'random card'],
});

export default function RandomTarotCardPage() {
  const suggestedQuestions = [
    'Surprise me with a random card',
    'What should I explore today?',
    'What\'s my random message?',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Random Tarot Card
        </h1>
        <p className="text-xl text-gray-300">
          Draw a completely random tarot card. Perfect for exploring the deck, daily practice, or spontaneous guidance.
        </p>
      </div>

      <ReadingWidget 
        spreadId="one-card"
        defaultQuestion="What message does the universe have for me?"
        suggestedQuestions={suggestedQuestions}
      />
    </div>
  );
}
