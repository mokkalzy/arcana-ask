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
      name: 'Yes or No',
      description: 'Clear guidance for decisive moments',
      href: '/yes-or-no-tarot',
      icon: '⚖',
      popular: true,
    },
    {
      name: 'Daily Card',
      description: 'One card to guide your day',
      href: '/daily-tarot',
      icon: '☀',
      popular: true,
    },
    {
      name: 'Love Reading',
      description: 'Insight into relationships and connection',
      href: '/love-tarot',
      icon: '♡',
      popular: true,
    },
    {
      name: 'Three Cards',
      description: 'Past, present, and future revealed',
      href: '/three-card-tarot',
      icon: '◇',
    },
    {
      name: 'Celtic Cross',
      description: 'Deep insight across ten positions',
      href: '/celtic-cross-tarot',
      icon: '✤',
    },
    {
      name: 'Career Path',
      description: 'Professional guidance and clarity',
      href: '/career-tarot',
      icon: '⚘',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section - More Editorial */}
      <section className="container mx-auto px-6 lg:px-8 pt-20 pb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-stone tracking-tight leading-[1.1] animate-fade-in">
            Ask the cards
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 leading-relaxed max-w-2xl mx-auto font-light animate-slide-up">
            Thoughtful tarot readings for reflection and insight. Choose your spread and begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-up animate-delay-200">
            <Link href="/yes-or-no-tarot" className="btn-primary text-base">
              Begin Reading
            </Link>
            <Link href="/random-tarot-card" className="btn-secondary text-base">
              Draw One Card
            </Link>
          </div>
        </div>
      </section>

      {/* Spreads Grid - More Visual Hierarchy */}
      <section className="container mx-auto px-6 lg:px-8 pb-24">
        <h2 className="section-title text-center mb-16">
          Choose Your Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {spreads.map((spread, index) => (
            <Link
              key={spread.href}
              href={spread.href}
              className="group relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="card-elevated hover:scale-[1.02] transition-all duration-300 h-full">
                {spread.popular && (
                  <span className="absolute -top-2 -right-2 bg-terracotta text-stone-50 text-xs font-medium px-3 py-1 rounded-sm shadow-md">
                    Popular
                  </span>
                )}
                <div className="text-5xl mb-6 text-stone-100 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {spread.icon}
                </div>
                <h3 className="text-2xl font-serif font-light text-stone mb-3 tracking-tight">
                  {spread.name}
                </h3>
                <p className="text-stone-100 leading-relaxed mb-6">{spread.description}</p>
                <div className="flex items-center text-terracotta font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                  <span>Start reading</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose - Simplified */}
      <section className="border-y border-stone-100/10 bg-midnight-50 py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="text-4xl text-stone-100 opacity-60 mb-4">∞</div>
              <h3 className="text-xl font-serif font-light text-stone">Always Free</h3>
              <p className="text-stone-100 leading-relaxed">
                Unlimited readings with no hidden costs or signup required.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl text-stone-100 opacity-60 mb-4">◈</div>
              <h3 className="text-xl font-serif font-light text-stone">Immediate Access</h3>
              <p className="text-stone-100 leading-relaxed">
                No account needed. Begin your reading right away.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="text-4xl text-stone-100 opacity-60 mb-4">✦</div>
              <h3 className="text-xl font-serif font-light text-stone">Thoughtfully Crafted</h3>
              <p className="text-stone-100 leading-relaxed">
                Carefully designed experience on every device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About - More Editorial */}
      <section className="container mx-auto px-6 lg:px-8 py-24 max-w-4xl">
        <div className="space-y-8 text-stone-100 leading-relaxed text-lg">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-stone mb-8 tracking-tight">
            About Tarot Reading
          </h2>
          <p>
            Tarot offers a mirror for reflection, a framework for contemplating life's questions with intention and depth. Each of the 78 cards carries layers of symbolic meaning, from the Major Arcana's archetypal journeys to the Minor Arcana's everyday wisdom.
          </p>
          <p>
            Whether you're seeking clarity on a yes-or-no question, daily guidance, or deeper insight through a Celtic Cross spread, the cards provide perspective rather than prediction. They invite you to consider your situation from new angles and trust your own intuition.
          </p>
          <p className="text-base text-stone-100/70 pt-4">
            Our readings combine traditional tarot meanings with thoughtful interpretation, designed for reflection and personal insight.
          </p>
        </div>
      </section>

      {/* FAQ - Refined */}
      <section className="container mx-auto px-6 lg:px-8 pb-32 max-w-4xl">
        <h2 className="section-title mb-12">
          Common Questions
        </h2>
        <div className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-serif font-light text-stone mb-3">
              Are these readings free?
            </h3>
            <p className="text-stone-100 leading-relaxed">
              Yes. Arcana Ask is completely free with no limits. You can do unlimited readings without ever entering payment information.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-serif font-light text-stone mb-3">
              How should I approach a reading?
            </h3>
            <p className="text-stone-100 leading-relaxed">
              Tarot is most valuable as a tool for reflection rather than fortune-telling. Come with an open mind, formulate your question clearly, and consider how the cards' traditional meanings might offer new perspective on your situation.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-serif font-light text-stone mb-3">
              What is a yes-or-no reading?
            </h3>
            <p className="text-stone-100 leading-relaxed">
              A single-card reading that offers guidance on a binary question. Upright cards generally suggest affirmative or forward energy, while reversed cards indicate obstacles or the need to reconsider.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-serif font-light text-stone mb-3">
              Can I save my readings?
            </h3>
            <p className="text-stone-100 leading-relaxed">
              Your readings are automatically saved in your browser, so you can return to reflect on them later. Everything stays private on your device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
