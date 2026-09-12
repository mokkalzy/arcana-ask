import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Career Tarot Reading - Professional Guidance',
  description: 'Free career tarot reading online. Get insights on job opportunities, career changes, workplace challenges, and professional growth.',
  path: '/career-tarot',
  keywords: ['career tarot', 'job tarot', 'work tarot', 'career guidance'],
});

export default function CareerTarotPage() {
  const suggestedQuestions = [
    'Should I take this job opportunity?',
    'How can I advance in my career?',
    'What\'s blocking my professional growth?',
    'What energy surrounds my work situation?',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Career Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          Get free guidance on career decisions, job opportunities, workplace challenges, and professional growth.
        </p>
      </div>

      <ReadingWidget 
        spreadId="situation-action-outcome"
        suggestedQuestions={suggestedQuestions}
      />

      <div className="max-w-4xl mx-auto mt-16 card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          Career Tarot Insights
        </h2>
        <p className="text-gray-300 mb-3">
          Career tarot readings help you gain perspective on professional matters, understand workplace dynamics, and make informed decisions about your career path.
        </p>
        <p className="text-gray-300 text-sm">
          <em>Note: Tarot provides reflection and perspective, not professional career counseling or financial advice.</em>
        </p>
      </div>
    </div>
  );
}
