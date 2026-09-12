import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'How to Read Tarot Cards - Complete Beginner Guide',
  description: 'Learn how to read tarot cards with this complete guide. Step-by-step instructions for beginners, from choosing a spread to interpreting cards.',
  path: '/guides/how-to-read-tarot',
  keywords: ['how to read tarot', 'tarot reading guide', 'learn tarot', 'tarot tutorial'],
});

export default function HowToReadTarotPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6 text-center">
          How to Read Tarot Cards
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          A complete guide to reading tarot for yourself and others
        </p>

        <div className="space-y-8">
          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 1: Prepare Your Space
            </h2>
            <p className="text-gray-300 mb-3">
              Create a calm, focused environment for your reading. Find a quiet space where you won't be interrupted. Some readers light candles or incense, but what matters most is your mental clarity and focus.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Find a quiet, comfortable space</li>
              <li>Clear your mind of distractions</li>
              <li>Have a notebook handy to record insights</li>
              <li>Set your intention for the reading</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 2: Formulate Your Question
            </h2>
            <p className="text-gray-300 mb-3">
              The quality of your question affects the quality of your reading. Be specific but not overly restrictive.
            </p>
            <div className="space-y-3 text-gray-300">
              <div>
                <strong className="text-gold">Good questions:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>"What should I know about this job opportunity?"</li>
                  <li>"How can I improve my relationship with [person]?"</li>
                  <li>"What energy surrounds me right now?"</li>
                </ul>
              </div>
              <div>
                <strong className="text-gold">Avoid:</strong>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li>Questions with yes/no answers (unless using a yes/no spread)</li>
                  <li>Questions about other people's private thoughts or actions</li>
                  <li>Medical, legal, or financial advice</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 3: Choose Your Spread
            </h2>
            <p className="text-gray-300 mb-3">
              Match your spread to your question's complexity:
            </p>
            <div className="space-y-3 text-gray-300">
              <div>
                <Link href="/yes-or-no-tarot" className="text-gold hover:underline font-bold">
                  One Card / Yes or No
                </Link>
                <p className="text-sm">For simple questions or daily guidance</p>
              </div>
              <div>
                <Link href="/three-card-tarot" className="text-gold hover:underline font-bold">
                  Three Card Spread
                </Link>
                <p className="text-sm">For understanding progression or different aspects</p>
              </div>
              <div>
                <Link href="/celtic-cross-tarot" className="text-gold hover:underline font-bold">
                  Celtic Cross
                </Link>
                <p className="text-sm">For complex situations requiring deep insight</p>
              </div>
            </div>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 4: Shuffle and Draw
            </h2>
            <p className="text-gray-300 mb-3">
              Focus on your question while shuffling. When you feel ready, draw your cards. Trust your intuition—the cards you draw are the cards you need.
            </p>
            <p className="text-gray-300">
              <strong className="text-gold">Online vs Physical:</strong> Digital shuffles are just as valid as physical ones. What matters is your focus and intention.
            </p>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 5: Interpret Each Card
            </h2>
            <p className="text-gray-300 mb-3">
              Look at each card's position and meaning:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-3 ml-4">
              <li><strong>Note the position:</strong> What aspect of your question does this position represent?</li>
              <li><strong>Observe the card:</strong> Which card appeared? Major or Minor Arcana?</li>
              <li><strong>Check orientation:</strong> Is it upright or reversed?</li>
              <li><strong>Read the meaning:</strong> Start with <Link href="/tarot-card-meanings" className="text-gold hover:underline">traditional meanings</Link></li>
              <li><strong>Trust your intuition:</strong> How does this card relate to your specific situation?</li>
            </ol>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 6: Look at the Bigger Picture
            </h2>
            <p className="text-gray-300 mb-3">
              After interpreting individual cards, step back and look at the reading as a whole:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Are there repeated suits? (Multiple Cups = emotional focus, Wands = action)</li>
              <li>Many Major Arcana = significant spiritual lessons or major life events</li>
              <li>Predominantly reversed cards = internal work needed or obstacles</li>
              <li>What story do the cards tell together?</li>
            </ul>
          </section>

          <section className="card">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Step 7: Record and Reflect
            </h2>
            <p className="text-gray-300 mb-3">
              Write down your reading and interpretation. Come back to it later—you may see new insights. Our readings are automatically saved so you can review them anytime.
            </p>
            <p className="text-gray-300">
              Track patterns across readings. Do certain cards appear frequently? This can reveal ongoing themes or lessons in your life.
            </p>
          </section>

          <section className="card bg-ink-lighter">
            <h2 className="text-2xl font-serif font-bold text-gold mb-4">
              Important Reminders
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li><strong>Tarot offers perspective, not absolute truth:</strong> Use it as a tool for reflection</li>
              <li><strong>You have free will:</strong> Cards show possibilities, not fixed fate</li>
              <li><strong>Don't overdo it:</strong> Avoid drawing repeatedly for the same question</li>
              <li><strong>Trust yourself:</strong> Your intuition is as important as the traditional meanings</li>
              <li><strong>Practice regularly:</strong> Skill develops with consistent practice</li>
            </ul>
          </section>

          <div className="text-center card bg-gradient-to-br from-ink-light to-ink-lighter">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">
              Ready to Practice?
            </h3>
            <p className="text-gray-300 mb-6">
              Start with a simple reading and build your skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/daily-tarot" className="btn-primary">
                Try a Daily Card
              </Link>
              <Link href="/free-tarot-reading" className="btn-secondary">
                All Free Readings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
