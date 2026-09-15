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
      
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-stone mb-6 tracking-tight leading-[1.1]">
            Yes or No Tarot
          </h1>
          <p className="text-xl text-stone-100 mb-8 leading-relaxed">
            Draw a single card for clear guidance. Upright cards suggest affirmative energy, reversed cards indicate obstacles or reconsideration.
          </p>
        </div>

        {/* Widget */}
        <div className="mb-24">
          <ReadingWidget 
            spreadId="yes-no" 
            suggestedQuestions={suggestedQuestions}
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="card">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
              How This Reading Works
            </h2>
            <div className="space-y-4 text-stone-100 leading-relaxed">
              <p>
                The yes-or-no spread uses a single card to offer guidance on questions requiring clear direction. It's one of tarot's most direct approaches, ideal for moments when you need focused insight.
              </p>
              <p className="pt-4">
                <span className="text-stone font-medium">Interpreting your card:</span>
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span><strong className="text-stone">Upright cards</strong> — positive energy, forward movement, or affirmative guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span><strong className="text-stone">Reversed cards</strong> — obstacles, reconsideration, or cautionary guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span><strong className="text-stone">Major Arcana</strong> — stronger, more definitive energy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span><strong className="text-stone">Minor Arcana</strong> — gentler, more conditional answers</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
              Getting the Most from Your Reading
            </h2>
            <ol className="space-y-4 text-stone-100 leading-relaxed">
              <li className="flex items-start gap-4">
                <span className="text-terracotta font-serif text-lg flex-shrink-0">1.</span>
                <div>
                  <strong className="text-stone block mb-1">Frame your question clearly</strong>
                  Shape it as a specific yes-or-no question for the most direct guidance.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-terracotta font-serif text-lg flex-shrink-0">2.</span>
                <div>
                  <strong className="text-stone block mb-1">Stay focused</strong>
                  Hold your question in mind as you shuffle and draw.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-terracotta font-serif text-lg flex-shrink-0">3.</span>
                <div>
                  <strong className="text-stone block mb-1">Trust the first answer</strong>
                  Avoid drawing repeatedly for the same question—the first card holds your answer.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-terracotta font-serif text-lg flex-shrink-0">4.</span>
                <div>
                  <strong className="text-stone block mb-1">Consider context</strong>
                  Read both traditional meanings to understand the full picture.
                </div>
              </li>
            </ol>
          </section>

          <section className="card">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
              When to Use This Spread
            </h2>
            <p className="text-stone-100 mb-4 leading-relaxed">
              Yes-or-no tarot is particularly valuable for:
            </p>
            <ul className="space-y-3 text-stone-100 leading-relaxed ml-6">
              <li className="flex items-start gap-3">
                <span className="text-terracotta mt-1">◇</span>
                <span>Quick guidance on time-sensitive decisions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta mt-1">◇</span>
                <span>Confirming or challenging your intuition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta mt-1">◇</span>
                <span>Daily check-ins on simple matters</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta mt-1">◇</span>
                <span>Breaking through indecision</span>
              </li>
            </ul>
            <p className="text-stone-100 mt-6 pt-6 border-t border-stone-100/10 leading-relaxed">
              For situations requiring deeper insight, explore our{' '}
              <Link href="/three-card-tarot" className="text-terracotta hover:text-terracotta-light transition-colors">
                Three Card Reading
              </Link>
              {' '}or{' '}
              <Link href="/celtic-cross-tarot" className="text-terracotta hover:text-terracotta-light transition-colors">
                Celtic Cross Spread
              </Link>.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-8 tracking-tight">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="text-xl font-serif font-light text-stone mb-3">
                  How accurate are online yes-or-no readings?
                </h3>
                <p className="text-stone-100 leading-relaxed">
                  Tarot—whether online or in person—offers perspective rather than prediction. The value lies in contemplating how traditional card meanings might illuminate your situation from a new angle.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-serif font-light text-stone mb-3">
                  Can I ask multiple questions?
                </h3>
                <p className="text-stone-100 leading-relaxed">
                  Yes, you can do unlimited free readings. However, avoid asking the same question repeatedly—trust your first reading's guidance.
                </p>
              </div>
              <div className="card">
                <h3 className="text-xl font-serif font-light text-stone mb-3">
                  What if the answer isn't clear?
                </h3>
                <p className="text-stone-100 leading-relaxed">
                  Sometimes a card suggests the situation is more nuanced than yes or no. Consider both upright and reversed interpretations, and whether a more detailed spread might serve you better.
                </p>
              </div>
            </div>
          </section>

          {/* Related Tools */}
          <section className="bg-midnight-50 border border-stone-100/10 rounded-sm p-8">
            <h3 className="text-xl font-serif font-light text-stone mb-6 tracking-tight">Related Readings</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/daily-tarot" className="text-stone-100 hover:text-terracotta transition-colors flex items-center gap-2">
                <span className="text-terracotta">→</span> Daily Tarot Card
              </Link>
              <Link href="/one-card-tarot" className="text-stone-100 hover:text-terracotta transition-colors flex items-center gap-2">
                <span className="text-terracotta">→</span> One Card Reading
              </Link>
              <Link href="/three-card-tarot" className="text-stone-100 hover:text-terracotta transition-colors flex items-center gap-2">
                <span className="text-terracotta">→</span> Three Card Reading
              </Link>
              <Link href="/random-tarot-card" className="text-stone-100 hover:text-terracotta transition-colors flex items-center gap-2">
                <span className="text-terracotta">→</span> Random Card
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
