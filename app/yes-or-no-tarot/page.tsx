import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Yes or No Tarot - Free Instant Answer',
  description: 'Get a yes or no tarot answer instantly. Free yes no tarot reading online. Draw a single card for clear guidance on your question. No sign-up required.',
  path: '/yes-or-no-tarot',
  keywords: ['yes or no tarot', 'yes no tarot', 'tarot yes or no', 'single card reading'],
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Yes or No Tarot Reading',
  description: 'Free online yes or no tarot reading for instant guidance',
  applicationCategory: 'Entertainment',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export default function YesOrNoTarotPage() {
  const suggestedQuestions = [
    'Should I take this job offer?',
    'Is this the right time to move?',
    'Will this relationship work out?',
    'Should I pursue this opportunity?',
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
            Yes or No Tarot
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Get instant guidance with a free yes or no tarot reading. Draw a single card to receive clear insight on your question. This yes no tarot spread provides straightforward answers—upright cards suggest "yes" energy, while reversed cards indicate "no" or reconsider.
          </p>
        </div>

        {/* Widget */}
        <div className="mb-16">
          <ReadingWidget 
            spreadId="yes-no" 
            suggestedQuestions={suggestedQuestions}
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              How Yes or No Tarot Works
            </h2>
            <p className="text-gray-300 mb-3">
              The yes or no tarot reading is one of the simplest and most popular tarot spreads. It uses a single card to provide guidance on a specific question requiring a yes or no answer.
            </p>
            <p className="text-gray-300 mb-3">
              <strong className="text-gold">How to interpret:</strong>
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Upright cards</strong> generally suggest positive energy, forward movement, or "yes"</li>
              <li><strong>Reversed cards</strong> indicate obstacles, reconsideration, or "no"</li>
              <li><strong>Major Arcana</strong> cards carry stronger, more definitive energy</li>
              <li><strong>Minor Arcana</strong> cards suggest gentler or more conditional answers</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Tips for Your Yes No Tarot Reading
            </h2>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>Be specific:</strong> Frame your question clearly as a yes/no question</li>
              <li><strong>Stay focused:</strong> Concentrate on your question while shuffling</li>
              <li><strong>Trust your intuition:</strong> The card's traditional meaning combines with your inner wisdom</li>
              <li><strong>Consider context:</strong> Read both the upright and reversed meanings to understand the full picture</li>
              <li><strong>Don't over-ask:</strong> Avoid drawing repeatedly for the same question—trust the first answer</li>
            </ol>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              When to Use Yes or No Tarot
            </h2>
            <p className="text-gray-300 mb-3">
              Yes no tarot readings are perfect for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Quick decision-making guidance</li>
              <li>Confirming your intuition about a choice</li>
              <li>Getting perspective on time-sensitive questions</li>
              <li>Daily guidance on simple matters</li>
              <li>Breaking through indecision</li>
            </ul>
            <p className="text-gray-300 mt-4">
              For more complex situations requiring deeper insight, try our <Link href="/three-card-tarot" className="text-gold hover:underline">Three Card Reading</Link> or <Link href="/celtic-cross-tarot" className="text-gold hover:underline">Celtic Cross Spread</Link>.
            </p>
          </section>

          {/* FAQ */}
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Yes No Tarot FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Is online yes or no tarot accurate?
                </h3>
                <p className="text-gray-300">
                  Tarot readings—whether online or in-person—are tools for reflection and gaining perspective, not fortune-telling. The value comes from contemplating how the card's traditional wisdom applies to your situation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  Can I ask multiple yes/no questions?
                </h3>
                <p className="text-gray-300">
                  Yes! You can do unlimited free readings. However, for best results, avoid asking the same question repeatedly. Trust the guidance from your first reading.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gold mb-1">
                  What if the answer isn't clear?
                </h3>
                <p className="text-gray-300">
                  Sometimes a card's meaning suggests the situation is more nuanced than yes/no. Read both the upright and reversed interpretations, and consider whether your question might benefit from a more detailed spread.
                </p>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="bg-ink-light rounded-xl p-6">
            <h3 className="text-xl font-bold text-gold mb-4">Related Tarot Readings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/daily-tarot" className="text-gray-300 hover:text-gold transition-colors">
                → Daily Tarot Card
              </Link>
              <Link href="/one-card-tarot" className="text-gray-300 hover:text-gold transition-colors">
                → One Card Reading
              </Link>
              <Link href="/three-card-tarot" className="text-gray-300 hover:text-gold transition-colors">
                → Three Card Reading
              </Link>
              <Link href="/random-tarot-card" className="text-gray-300 hover:text-gold transition-colors">
                → Random Tarot Card
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
