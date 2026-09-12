import Link from 'next/link';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Free Online Tarot Reading - Arcana Ask',
  description: 'Get your free online tarot reading now. Choose from yes/no tarot, daily card, Celtic Cross, and more spreads. No sign-up required. Instant guidance.',
  keywords: ['free tarot reading', 'online tarot', 'yes no tarot', 'daily tarot', 'tarot card reading'],
});

export default function HomePage() {
  const spreads = [
    {
      name: 'Yes or No Tarot',
      description: 'Quick guidance on a yes/no question',
      href: '/yes-or-no-tarot',
      icon: '❓',
      popular: true,
    },
    {
      name: 'Daily Tarot',
      description: 'Your card for today',
      href: '/daily-tarot',
      icon: '🌅',
      popular: true,
    },
    {
      name: 'Love Tarot',
      description: 'Insights into romance and relationships',
      href: '/love-tarot',
      icon: '💕',
      popular: true,
    },
    {
      name: 'Three Card Reading',
      description: 'Past, Present, Future spread',
      href: '/three-card-tarot',
      icon: '🔮',
    },
    {
      name: 'Celtic Cross',
      description: 'Comprehensive 10-card spread',
      href: '/celtic-cross-tarot',
      icon: '✨',
    },
    {
      name: 'Career Tarot',
      description: 'Professional guidance and insights',
      href: '/career-tarot',
      icon: '💼',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-6">
          Free Online Tarot Reading
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Ask the cards your question and receive instant guidance. Choose from multiple spreads including yes/no tarot, daily readings, Celtic Cross, and more. No sign-up required—start your free tarot reading now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/free-tarot-reading" className="btn-primary text-lg">
            Get Your Free Reading ✦
          </Link>
          <Link href="/random-tarot-card" className="btn-secondary text-lg">
            Draw a Random Card
          </Link>
        </div>
      </section>

      {/* Popular Spreads */}
      <section className="mb-16">
        <h2 className="section-title text-center mb-8">
          Choose Your Tarot Spread
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spreads.map((spread) => (
            <Link
              key={spread.href}
              href={spread.href}
              className="card hover:border-gold/40 transition-all duration-300 hover:scale-105 relative group"
            >
              {spread.popular && (
                <span className="absolute -top-3 -right-3 bg-gold text-ink text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-4xl mb-4">{spread.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gold mb-2">
                {spread.name}
              </h3>
              <p className="text-gray-400">{spread.description}</p>
              <div className="mt-4 text-gold group-hover:translate-x-2 transition-transform inline-block">
                Start Reading →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16 bg-ink-light rounded-2xl p-8 md:p-12">
        <h2 className="section-title text-center mb-8">
          Why Choose Arcana Ask?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="text-xl font-bold text-gold mb-2">100% Free</h3>
            <p className="text-gray-400">
              No hidden fees, no credit card required. Unlimited readings, always free.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-gold mb-2">No Sign-Up</h3>
            <p className="text-gray-400">
              Start reading immediately. No account creation or personal information needed.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-gold mb-2">Mobile Friendly</h3>
            <p className="text-gray-400">
              Beautiful card animations and smooth experience on any device.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto prose prose-invert">
        <h2 className="text-3xl font-serif font-bold text-gold mb-4">
          About Online Tarot Reading
        </h2>
        <p className="text-gray-300 mb-4">
          Welcome to Arcana Ask, your trusted source for free online tarot readings. Whether you're seeking a quick yes or no answer, daily guidance, or deep insight through a Celtic Cross spread, our tarot reader provides thoughtful interpretations based on traditional Rider-Waite-Smith meanings.
        </p>
        <p className="text-gray-300 mb-4">
          Tarot cards have been used for centuries as a tool for reflection and gaining perspective on life's questions. Each card in the 78-card deck carries symbolic meaning, from the Major Arcana's profound life lessons to the Minor Arcana's everyday wisdom about love, career, challenges, and opportunities.
        </p>
        <p className="text-gray-300 mb-4">
          Our online tarot reading tool combines traditional tarot wisdom with modern convenience. Simply choose your spread, focus on your question, and let the cards guide you. Remember, tarot readings are for entertainment and self-reflection—they offer perspective, not certainty.
        </p>
      </section>

      {/* FAQ */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-bold text-gold mb-2">
              Is this tarot reading really free?
            </h3>
            <p className="text-gray-300">
              Yes! Arcana Ask is completely free with no hidden costs. You can do unlimited readings without ever entering payment information.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gold mb-2">
              How accurate are online tarot readings?
            </h3>
            <p className="text-gray-300">
              Tarot is a tool for reflection and gaining perspective, not fortune-telling. Our readings provide traditional interpretations based on established tarot meanings. The value comes from reflecting on how the cards' wisdom applies to your situation.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gold mb-2">
              What is a yes or no tarot reading?
            </h3>
            <p className="text-gray-300">
              A yes or no tarot reading uses a single card to provide guidance on a question. Upright cards generally suggest "yes" or positive energy, while reversed cards suggest "no" or the need to reconsider.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-gold mb-2">
              Can I save my tarot readings?
            </h3>
            <p className="text-gray-300">
              Yes! Your readings are automatically saved in your browser so you can review them later. Your reading history is private and stored only on your device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
