import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Love Tarot Reading - Free Relationship Guidance',
  description: 'Free love tarot reading online. Get insights into your romantic relationships, dating, and matters of the heart. Instant guidance.',
  path: '/love-tarot',
  keywords: ['love tarot', 'relationship tarot', 'romance tarot', 'love reading'],
});

export default function LoveTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Love Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          Get free guidance on matters of the heart. Ask about romance, relationships, dating, or love prospects.
        </p>
      </div>

      <ReadingWidget 
        spreadId="situation-action-outcome"
        suggestedQuestions={[
          'What energy surrounds my love life right now?',
          'How can I improve my relationship?',
          'What should I know about this connection?',
          'Where is this relationship heading?',
        ]}
      />

      <div className="max-w-4xl mx-auto mt-16 card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          Love Tarot Guidance
        </h2>
        <p className="text-gray-300 mb-3">
          Love tarot readings offer insight into romantic situations, helping you understand relationship dynamics, identify patterns, and gain clarity on matters of the heart.
        </p>
        <p className="text-gray-300">
          This Situation-Action-Outcome spread is perfect for love questions: it shows your current romantic situation, the action you should take, and the likely outcome.
        </p>
      </div>
    </div>
  );
}
