import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Free Tarot Reading Online - Instant & Accurate',
  description: 'Get your free tarot reading online now. Choose from yes/no, daily, Celtic Cross, and more spreads. No sign-up or payment required. Instant guidance.',
  path: '/free-tarot-reading',
  keywords: ['free tarot reading', 'free online tarot', 'tarot reading online free', 'free tarot'],
});

export default function FreeTarotReadingPage() {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-stone mb-6 tracking-tight leading-[1.1]">
          Free Tarot Reading
        </h1>
        <p className="text-xl text-stone-100 leading-relaxed">
          Choose your spread and begin. No sign-up, no payment, no limits—thoughtful tarot guidance whenever you need it.
        </p>
      </div>

      {/* Spread Options */}
      <div className="mb-24">
        <h2 className="section-title text-center mb-12">
          Choose Your Reading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: 'Yes or No',
              href: '/yes-or-no-tarot',
              description: 'Clear guidance for binary questions',
              icon: '⚖',
            },
            {
              name: 'Daily Card',
              href: '/daily-tarot',
              description: 'One card to guide your day',
              icon: '☀',
            },
            {
              name: 'Three Cards',
              href: '/three-card-tarot',
              description: 'Past, present, and future',
              icon: '◇',
            },
            {
              name: 'Love Reading',
              href: '/love-tarot',
              description: 'Insight into relationships',
              icon: '♡',
            },
            {
              name: 'Career Path',
              href: '/career-tarot',
              description: 'Professional guidance',
              icon: '⚘',
            },
            {
              name: 'Celtic Cross',
              href: '/celtic-cross-tarot',
              description: 'Comprehensive ten-card spread',
              icon: '✤',
            },
          ].map((spread, index) => (
            <Link
              key={spread.href}
              href={spread.href}
              className="card-elevated hover:scale-[1.02] transition-all group text-center"
            >
              <div className="text-5xl mb-6 text-stone-100 opacity-60 group-hover:opacity-100 transition-opacity">
                {spread.icon}
              </div>
              <h3 className="text-2xl font-serif font-light text-stone mb-3 tracking-tight">
                {spread.name}
              </h3>
              <p className="text-stone-100 mb-4 leading-relaxed">{spread.description}</p>
              <div className="flex items-center justify-center text-terracotta font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                <span>Begin</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Default Widget */}
      <div className="mb-24 bg-midnight-50 border border-stone-100/10 rounded-sm py-16">
        <div className="text-center mb-12 px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-stone mb-4 tracking-tight">
            Start a Three Card Reading
          </h2>
          <p className="text-stone-100 leading-relaxed">
            The classic past-present-future spread
          </p>
        </div>
        <div className="px-6">
          <ReadingWidget spreadId="three-card" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="card">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
            Why Choose Arcana Ask
          </h2>
          <div className="space-y-5 text-stone-100 leading-relaxed">
            <p>
              <span className="text-terracotta font-medium">Always Free.</span> Every reading on Arcana Ask is completely free. No credit card, no premium tier, no hidden costs.
            </p>
            <p>
              <span className="text-terracotta font-medium">No Sign-Up.</span> Begin reading immediately. We don't collect your email or require any personal information.
            </p>
            <p>
              <span className="text-terracotta font-medium">Thoughtful Interpretations.</span> Our readings use traditional tarot meanings refined over centuries of practice, with context-aware guidance for your specific questions.
            </p>
            <p>
              <span className="text-terracotta font-medium">Considered Design.</span> A carefully crafted experience that works beautifully on any device, with intentional animations and refined visual design.
            </p>
            <p>
              <span className="text-terracotta font-medium">Unlimited Access.</span> Draw as many cards as you need, whenever you need them. Your readings save automatically in your browser.
            </p>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
            Getting the Most from Your Reading
          </h2>
          <ol className="space-y-4 text-stone-100 leading-relaxed">
            {[
              { title: 'Match spread to question', desc: 'Choose a spread that fits your question\'s complexity' },
              { title: 'Frame clearly', desc: 'Specific questions yield more useful guidance' },
              { title: 'Create space', desc: 'Find a quiet moment to focus on your reading' },
              { title: 'Trust the draw', desc: 'The cards you receive are the ones you need' },
              { title: 'Reflect deeply', desc: 'Consider how each meaning applies to your situation' },
              { title: 'Review over time', desc: 'Your readings are saved—patterns emerge with reflection' },
              { title: 'Trust the first reading', desc: 'Avoid drawing repeatedly for the same question' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-terracotta font-serif text-lg flex-shrink-0">{i + 1}.</span>
                <div>
                  <strong className="text-stone block mb-1">{item.title}</strong>
                  {item.desc}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="card">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
            About Tarot Reading
          </h2>
          <div className="space-y-4 text-stone-100 leading-relaxed">
            <p>
              Tarot has been used for centuries as a tool for reflection, perspective, and self-discovery. Each of the 78 cards carries layered symbolic meaning drawn from archetypal patterns and universal human experiences.
            </p>
            <p>
              When you draw cards online, the digital shuffle creates a selection as valid as physical cards—what matters is your intention, focus, and openness to insight. The power of tarot lies in how it helps you access your own wisdom and see your situation from new angles.
            </p>
            <p>
              These readings are offered for reflection and entertainment. They provide perspective and contemplation, not certainty about the future. Trust yourself, use the readings as a mirror, and remember you always have agency to shape your path.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl md:text-3xl font-serif font-light text-stone mb-8 tracking-tight">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-serif font-light text-stone mb-3">
                Is this really completely free?
              </h3>
              <p className="text-stone-100 leading-relaxed">
                Yes. There are no hidden fees, no premium prompts, and no payment requests. Every spread is free, always.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-serif font-light text-stone mb-3">
                Are online readings as valuable as in-person?
              </h3>
              <p className="text-stone-100 leading-relaxed">
                The cards' wisdom remains the same whether drawn physically or digitally. What matters is your focus, intention, and reflection on the meanings.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-serif font-light text-stone mb-3">
                Can I trust free tarot readings?
              </h3>
              <p className="text-stone-100 leading-relaxed">
                Our readings use authentic traditional card meanings. Free doesn't mean lower quality—it means we believe tarot wisdom should be accessible to everyone.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-serif font-light text-stone mb-3">
                How many readings can I do?
              </h3>
              <p className="text-stone-100 leading-relaxed">
                Unlimited. Do as many readings as you like, whenever you like.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
