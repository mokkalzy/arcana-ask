import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'AI Tarot Reading - Intelligent Interpretation',
  description: 'AI-enhanced tarot readings combine traditional wisdom with intelligent interpretation. Free online AI tarot guidance.',
  path: '/ai-tarot',
  keywords: ['ai tarot', 'artificial intelligence tarot', 'smart tarot'],
});

export default function AITarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          AI Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          Traditional tarot wisdom enhanced with intelligent interpretation. Get context-aware guidance that combines centuries of tarot knowledge with modern understanding.
        </p>
      </div>

      <ReadingWidget spreadId="three-card" />

      <div className="max-w-4xl mx-auto mt-16 card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          How AI Enhances Tarot
        </h2>
        <p className="text-gray-300 mb-3">
          Our readings use traditional Rider-Waite-Smith card meanings refined over centuries. The "AI" aspect refers to how we intelligently match card interpretations to your specific question category (love, career, or general), providing more relevant and personalized guidance.
        </p>
        <p className="text-gray-300">
          This creates a thoughtful reading experience that honors tarot tradition while making interpretations more applicable to your unique situation.
        </p>
      </div>
    </div>
  );
}
