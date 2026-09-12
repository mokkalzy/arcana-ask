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
    <div className="container mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Free Tarot Reading Online
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Welcome to your free online tarot reading. Choose your spread below and receive instant guidance from the cards. No sign-up, no payment, no limits—just authentic tarot wisdom whenever you need it.
        </p>
      </div>

      {/* Spread Options */}
      <div className="mb-16">
        <h2 className="section-title text-center mb-8">
          Choose Your Free Tarot Spread
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: 'Yes or No',
              href: '/yes-or-no-tarot',
              description: 'Single card for quick yes/no guidance',
              icon: '❓',
            },
            {
              name: 'Daily Tarot',
              href: '/daily-tarot',
              description: 'Your card for today',
              icon: '🌅',
            },
            {
              name: 'Three Card',
              href: '/three-card-tarot',
              description: 'Past, Present, Future',
              icon: '🔮',
            },
            {
              name: 'Love Tarot',
              href: '/love-tarot',
              description: 'Romantic guidance',
              icon: '💕',
            },
            {
              name: 'Career Tarot',
              href: '/career-tarot',
              description: 'Professional insights',
              icon: '💼',
            },
            {
              name: 'Celtic Cross',
              href: '/celtic-cross-tarot',
              description: 'Comprehensive 10-card spread',
              icon: '✨',
            },
          ].map((spread) => (
            <Link
              key={spread.href}
              href={spread.href}
              className="card hover:border-gold/40 transition-all hover:scale-105 text-center group"
            >
              <div className="text-4xl mb-3">{spread.icon}</div>
              <h3 className="text-xl font-serif font-bold text-gold mb-2">
                {spread.name}
              </h3>
              <p className="text-gray-400 mb-3">{spread.description}</p>
              <span className="text-gold group-hover:underline">Start Reading →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Default Widget */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-gold mb-2">
            Or Start a Three Card Reading Now
          </h2>
          <p className="text-gray-400">
            The classic Past-Present-Future spread
          </p>
        </div>
        <ReadingWidget spreadId="three-card" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Why Arcana Ask is the Best Free Tarot Reading Site
          </h2>
          <div className="space-y-3 text-gray-300">
            <p>
              <strong className="text-gold">100% Free Forever:</strong> Unlike other sites that tease you with one free reading then demand payment, every reading on Arcana Ask is completely free. No credit card, no premium tier, no catches.
            </p>
            <p>
              <strong className="text-gold">No Sign-Up Required:</strong> Start reading immediately. We don't collect your email, create accounts, or require any personal information.
            </p>
            <p>
              <strong className="text-gold">Authentic Interpretations:</strong> Our readings use traditional Rider-Waite-Smith meanings refined over centuries of tarot practice. Each card interpretation is thoughtfully crafted.
            </p>
            <p>
              <strong className="text-gold">Beautiful Experience:</strong> Enjoy smooth card animations, satisfying shuffles, and a mystical-yet-modern design that works perfectly on mobile or desktop.
            </p>
            <p>
              <strong className="text-gold">Unlimited Readings:</strong> Draw as many cards as you need, whenever you need them. Save your readings in your browser for future reference.
            </p>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            How to Get the Most from Your Free Tarot Reading
          </h2>
          <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
            <li><strong>Choose the right spread:</strong> Match your spread to your question's complexity</li>
            <li><strong>Frame your question clearly:</strong> Specific questions yield more useful guidance</li>
            <li><strong>Create a calm space:</strong> Find a quiet moment to focus on your reading</li>
            <li><strong>Trust the process:</strong> The cards you draw are the cards you need</li>
            <li><strong>Reflect deeply:</strong> Consider how each card's meaning applies to your unique situation</li>
            <li><strong>Take notes:</strong> Your readings are saved automatically—review them over time</li>
            <li><strong>Don't overdo it:</strong> Trust your first reading rather than drawing repeatedly for the same question</li>
          </ol>
        </section>

        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            About Online Tarot Readings
          </h2>
          <p className="text-gray-300 mb-3">
            Tarot has been used for centuries as a tool for reflection, perspective, and self-discovery. Each of the 78 cards in a tarot deck carries layered symbolic meaning drawn from various mystical traditions, archetypes, and universal human experiences.
          </p>
          <p className="text-gray-300 mb-3">
            When you draw cards online, the digital shuffle creates a random selection just as valid as physical cards—what matters is your intention, focus, and openness to the wisdom the cards reveal. The power of tarot lies not in supernatural prediction, but in how it helps you access your own intuition and see your situation from new angles.
          </p>
          <p className="text-gray-300">
            Our free tarot readings are provided for entertainment and self-reflection. They offer perspective and food for thought, not certainty about the future. Trust yourself, use the readings as a mirror for contemplation, and remember you always have free will to shape your path.
          </p>
        </section>

        {/* FAQ */}
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Free Tarot Reading FAQ
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">
                Is this really completely free?
              </h3>
              <p className="text-gray-300">
                Yes! There are no hidden fees, no "unlock premium" prompts, and no credit card requests. Every spread is free, forever.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">
                Are online tarot readings as good as in-person?
              </h3>
              <p className="text-gray-300">
                The cards' wisdom remains the same whether drawn physically or digitally. What matters most is your focus, intention, and reflection on the meanings.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">
                Can I trust free tarot readings?
              </h3>
              <p className="text-gray-300">
                Our readings use authentic Rider-Waite-Smith card meanings. "Free" doesn't mean low-quality—it means we believe tarot wisdom should be accessible to everyone.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gold mb-1">
                How many readings can I do?
              </h3>
              <p className="text-gray-300">
                Unlimited! Do as many readings as you like, whenever you like.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
