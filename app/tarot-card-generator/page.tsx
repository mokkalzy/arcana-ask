import ReadingWidget from '@/components/ReadingWidget';
import { createMetadata } from '@/lib/metadata';

export const metadata = createMetadata({
  title: 'Tarot Card Generator - Random Card Draw',
  description: 'Tarot card generator for random draws. Generate tarot cards instantly for readings, practice, or exploration of the deck.',
  path: '/tarot-card-generator',
  keywords: ['tarot card generator', 'generate tarot cards', 'tarot randomizer'],
});

export default function TarotCardGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
          Tarot Card Generator
        </h1>
        <p className="text-xl text-gray-300">
          Generate random tarot cards instantly. Perfect for readings, learning the deck, or spontaneous guidance.
        </p>
      </div>

      <ReadingWidget 
        spreadId="one-card"
        defaultQuestion="Generate a card for me"
      />
    </div>
  );
}
