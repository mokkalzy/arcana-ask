import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Three Card Tarot Reading - Past Present Future',
  description: 'Free three card tarot reading online. See your past, present, and future with this classic tarot spread. Get comprehensive insight now.',
  path: '/three-card-tarot',
  keywords: ['three card tarot', 'past present future tarot', '3 card reading'],
});

export default function ThreeCardTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Three Card Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          The classic Past-Present-Future spread. Three cards reveal where you've been, where you are, and where you're headed.
        </p>
      </div>

      <ReadingWidget 
        spreadId="three-card"
        suggestedQuestions={[
          'What is the trajectory of my current situation?',
          'How did I get here and where am I going?',
          'What path am I on?',
        ]}
      />

      <div className="max-w-4xl mx-auto mt-16 card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          Understanding the Three Card Spread
        </h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="text-lg font-bold text-gold mb-1">Card 1: Past</h3>
            <p>The foundation and influences that have led to your current situation. What you're moving from.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold mb-1">Card 2: Present</h3>
            <p>Your current circumstances, challenges, and opportunities. Where you stand right now.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gold mb-1">Card 3: Future</h3>
            <p>The likely outcome or direction. What you're moving toward based on the current path.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
