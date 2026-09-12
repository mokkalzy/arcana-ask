'use client';

import { useState, useEffect } from 'react';
import { Spread, getSpreadById } from '@/lib/spreads';
import { createReading, determineQuestionCategory, interpretCardInContext } from '@/lib/reading-engine';
import { Reading, ReadingCard as ReadingCardType } from '@/lib/spreads';
import TarotCard from './TarotCard';
import { motion, AnimatePresence } from 'framer-motion';
import { saveReading } from '@/lib/storage';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

interface ReadingWidgetProps {
  spreadId: string;
  suggestedQuestions?: string[];
  defaultQuestion?: string;
}

export default function ReadingWidget({ spreadId, suggestedQuestions, defaultQuestion }: ReadingWidgetProps) {
  const [step, setStep] = useState<'question' | 'options' | 'shuffle' | 'draw' | 'reveal'>('question');
  const [question, setQuestion] = useState(defaultQuestion || '');
  const [allowReversals, setAllowReversals] = useState(true);
  const [reading, setReading] = useState<Reading | null>(null);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [spread, setSpread] = useState<Spread | null>(null);

  useEffect(() => {
    const loadedSpread = getSpreadById(spreadId);
    setSpread(loadedSpread || null);
  }, [spreadId]);

  const handleStartReading = () => {
    if (!question.trim()) return;
    trackEvent(AnalyticsEvents.READING_START, { spread: spreadId, question });
    setStep('options');
  };

  const handleBeginShuffle = () => {
    setStep('shuffle');
    setTimeout(() => {
      setStep('draw');
    }, 2000);
  };

  const handleDrawCards = () => {
    if (!spread) return;
    
    const newReading = createReading(question, spread, allowReversals);
    setReading(newReading);
    setStep('reveal');
    
    saveReading(newReading);
    trackEvent(AnalyticsEvents.READING_COMPLETE, { 
      spread: spreadId, 
      cardCount: spread.cardCount 
    });
  };

  const handleFlipCard = (index: number) => {
    setFlippedCards(prev => new Set(prev).add(index));
    trackEvent(AnalyticsEvents.CARD_FLIP, { cardIndex: index });
  };

  const handleFlipAll = () => {
    if (!reading) return;
    const allIndices = new Set(reading.cards.map((_, i) => i));
    setFlippedCards(allIndices);
  };

  const handleNewReading = () => {
    setStep('question');
    setQuestion('');
    setReading(null);
    setFlippedCards(new Set());
  };

  if (!spread) {
    return <div className="text-center text-gray-400">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {step === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gold mb-4">
                What's on your mind?
              </h2>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Enter your question or what you'd like guidance on..."
                className="w-full bg-ink border border-gold/30 rounded-lg p-4 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-gold min-h-[120px]"
              />
              
              {suggestedQuestions && suggestedQuestions.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-400 mb-2">Or try one of these:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => setQuestion(q)}
                        className="text-sm px-3 py-1 bg-ink-lighter border border-gold/20 rounded-full hover:border-gold/50 transition-colors text-gray-300"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <button
                onClick={handleStartReading}
                disabled={!question.trim()}
                className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Begin Reading
              </button>
            </div>
          </motion.div>
        )}

        {step === 'options' && (
          <motion.div
            key="options"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-bold text-gold mb-4">
                Reading Options
              </h2>
              
              <div className="mb-6">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={allowReversals}
                    onChange={(e) => setAllowReversals(e.target.checked)}
                    className="w-5 h-5 rounded border-gold/30 bg-ink text-gold focus:ring-gold"
                  />
                  <span className="text-gray-300">
                    Allow reversed cards (adds depth and nuance)
                  </span>
                </label>
              </div>

              <div className="bg-ink-lighter border border-gold/20 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-300 mb-2">
                  <strong className="text-gold">Your question:</strong>
                </p>
                <p className="text-gray-100">{question}</p>
              </div>

              <button onClick={handleBeginShuffle} className="btn-primary w-full">
                Shuffle the Cards
              </button>
            </div>
          </motion.div>
        )}

        {step === 'shuffle' && (
          <motion.div
            key="shuffle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-6 animate-pulse">🔮</div>
            <h2 className="text-3xl font-serif font-bold text-gold mb-4">
              Shuffling the cards...
            </h2>
            <p className="text-gray-400">
              Focus on your question while the cards are shuffled
            </p>
          </motion.div>
        )}

        {step === 'draw' && (
          <motion.div
            key="draw"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-gold mb-8">
              The cards are ready
            </h2>
            <button onClick={handleDrawCards} className="btn-primary text-lg">
              Draw Your Cards
            </button>
          </motion.div>
        )}

        {step === 'reveal' && reading && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Cards Display */}
            <div className="grid gap-6" style={{
              gridTemplateColumns: `repeat(${Math.min(spread.cardCount, 5)}, 1fr)`,
            }}>
              {reading.cards.map((readingCard, index) => {
                const isFlipped = flippedCards.has(index);
                return (
                  <div key={index} className="space-y-2">
                    <div 
                      className="aspect-[2/3.5] cursor-pointer"
                      onClick={() => !isFlipped && handleFlipCard(index)}
                    >
                      <TarotCard
                        card={readingCard.card}
                        reversed={readingCard.reversed}
                        faceUp={isFlipped}
                        animateFlip={true}
                      />
                    </div>
                    <p className="text-center text-sm font-semibold text-gold">
                      {readingCard.position.name}
                    </p>
                  </div>
                );
              })}
            </div>

            {flippedCards.size < reading.cards.length && (
              <div className="text-center">
                <button onClick={handleFlipAll} className="btn-secondary">
                  Reveal All Cards
                </button>
              </div>
            )}

            {flippedCards.size === reading.cards.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Synthesis */}
                <div className="card">
                  <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                    Reading Overview
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {reading.synthesis}
                  </p>
                </div>

                {/* Individual Card Meanings */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-gold">
                    Card by Card
                  </h3>
                  {reading.cards.map((readingCard, index) => {
                    const category = determineQuestionCategory(question);
                    const meaning = interpretCardInContext(readingCard, question, category);
                    const generalMeaning = readingCard.reversed 
                      ? readingCard.card.reversed.meaning 
                      : readingCard.card.upright.meaning;
                    
                    return (
                      <div key={index} className="card">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-24 flex-shrink-0">
                            <TarotCard
                              card={readingCard.card}
                              reversed={readingCard.reversed}
                              faceUp={true}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-gold mb-1">
                              {readingCard.card.name} {readingCard.reversed && '(Reversed)'}
                            </h4>
                            <p className="text-sm text-gray-400 mb-2">
                              {readingCard.position.name} • {readingCard.position.description}
                            </p>
                            <p className="text-gray-300 mb-2">
                              <strong>For your question:</strong> {meaning}
                            </p>
                            <p className="text-gray-400 text-sm">
                              {generalMeaning}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={handleNewReading} className="btn-primary">
                    New Reading
                  </button>
                  <button 
                    onClick={() => {
                      trackEvent(AnalyticsEvents.READING_SAVE);
                      alert('Reading saved to your browser!');
                    }}
                    className="btn-secondary"
                  >
                    💾 Saved Automatically
                  </button>
                </div>

                {/* Entertainment Disclaimer */}
                <div className="text-center text-sm text-gray-500 mt-8">
                  <p>
                    ✦ Tarot readings are for entertainment and self-reflection only. 
                    They do not provide medical, legal, or financial advice.
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
