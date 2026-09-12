import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';

export const metadata = createMetadata({
  title: 'Online Tarot Reading - Free & Instant',
  description: 'Online tarot reading free and instant. No download, no sign-up. Professional tarot interpretations available 24/7.',
  path: '/online-tarot-reading',
  keywords: ['online tarot reading', 'internet tarot', 'virtual tarot', 'web tarot'],
});

export default function OnlineTarotReadingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Online Tarot Reading
        </h1>
        <p className="text-xl text-gray-300">
          Professional online tarot readings available instantly, 24/7. No download or installation required—start reading now.
        </p>
      </div>

      <ReadingWidget spreadId="three-card" />

      <div className="max-w-4xl mx-auto mt-16 space-y-8">
        <section className="card">
          <h2 className="text-2xl font-serif font-bold text-gold mb-4">
            Benefits of Online Tarot Reading
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
            <li>Available anytime, anywhere—24/7 access</li>
            <li>Complete privacy—read alone in your own space</li>
            <li>No pressure or judgment from a reader</li>
            <li>Take your time to reflect on each card</li>
            <li>Save and review readings whenever you want</li>
            <li>Unlimited readings—practice as much as you like</li>
          </ul>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/yes-or-no-tarot" className="card hover:border-gold/40 transition-all">
            <h3 className="text-lg font-bold text-gold mb-2">Yes or No Tarot</h3>
            <p className="text-gray-400 text-sm">Quick yes/no guidance</p>
          </Link>
          <Link href="/celtic-cross-tarot" className="card hover:border-gold/40 transition-all">
            <h3 className="text-lg font-bold text-gold mb-2">Celtic Cross</h3>
            <p className="text-gray-400 text-sm">Comprehensive 10-card reading</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
