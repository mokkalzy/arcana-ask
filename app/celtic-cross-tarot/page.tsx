import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Celtic Cross Tarot - Free 10-Card Reading',
  description: 'Free Celtic Cross tarot reading online. The most popular comprehensive spread. Get deep insight with all 10 positions interpreted.',
  path: '/celtic-cross-tarot',
  keywords: ['celtic cross tarot', 'celtic cross spread', '10 card tarot'],
});

export default function CelticCrossTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Celtic Cross Tarot
        </h1>
        <p className="text-xl text-gray-300">
          The most comprehensive tarot spread. Ten cards reveal deep insight into your situation from multiple angles.
        </p>
      </div>

      <ReadingWidget 
        spreadId="celtic-cross"
        suggestedQuestions={[
          'What do I need to understand about my current situation?',
          'What influences are shaping my life right now?',
          'How can I navigate this complex situation?',
        ]}
      />

      <div className="max-w-4xl mx-auto mt-16 card">
        <h2 className="text-2xl font-serif font-bold text-gold mb-4">
          The Celtic Cross Positions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <strong className="text-gold">1. Present:</strong> Your current situation
          </div>
          <div>
            <strong className="text-gold">2. Challenge:</strong> What crosses or challenges you
          </div>
          <div>
            <strong className="text-gold">3. Foundation:</strong> The root cause or basis
          </div>
          <div>
            <strong className="text-gold">4. Past:</strong> Recent past influences
          </div>
          <div>
            <strong className="text-gold">5. Crown:</strong> Best that can be achieved
          </div>
          <div>
            <strong className="text-gold">6. Future:</strong> Near future developments
          </div>
          <div>
            <strong className="text-gold">7. Self:</strong> Your attitude and approach
          </div>
          <div>
            <strong className="text-gold">8. Environment:</strong> External influences
          </div>
          <div>
            <strong className="text-gold">9. Hopes & Fears:</strong> Your inner hopes and fears
          </div>
          <div>
            <strong className="text-gold">10. Outcome:</strong> The final outcome
          </div>
        </div>
      </div>
    </div>
  );
}
