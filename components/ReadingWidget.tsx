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
    
    // For single-card spreads, skip to shuffle immediately
    if (spread && spread.cardCount === 1) {
      setStep('shuffle');
      setTimeout(() => {
        setStep('draw');
      }, 1500);
    } else {
      setStep('options');
    }
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-stone mb-6 tracking-tight">
                What question brings you here?
              </h2>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Take a moment to consider your question..."
                className="w-full bg-midnight-100 border border-stone-100/20 rounded-sm p-6 text-stone-50 placeholder-stone-100/50 focus:outline-none focus:border-terracotta/50 transition-colors min-h-[140px] resize-none"
              />
              
              {suggestedQuestions && suggestedQuestions.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm text-stone-100 mb-3 font-medium uppercase tracking-wider">Suggested</p>
                  <div className="flex flex-wrap gap-3">
                    {suggestedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => setQuestion(q)}
                        className="text-sm px-4 py-2 bg-midnight-100 border border-stone-100/20 rounded-sm hover:border-terracotta/50 transition-all text-stone-100 hover:text-stone"
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
                className="btn-primary w-full mt-8 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {step === 'options' && (
          <motion.div
            key="options"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-8"
          >
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-3xl font-serif font-light text-stone mb-6 tracking-tight">
                Reading Preferences
              </h2>
              
              <div className="mb-8">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={allowReversals}
                    onChange={(e) => setAllowReversals(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded-sm border-stone-100/30 bg-midnight-100 text-terracotta focus:ring-terracotta focus:ring-offset-0 transition-colors"
                  />
                  <div>
                    <span className="text-stone group-hover:text-stone-50 transition-colors block mb-1">
                      Include reversed cards
                    </span>
                    <span className="text-sm text-stone-100">
                      Adds nuance and complexity to your reading
                    </span>
                  </div>
                </label>
              </div>

              <div className="bg-midnight-100 border border-stone-100/20 rounded-sm p-6 mb-8">
                <p className="text-sm text-stone-100 mb-2 uppercase tracking-wider font-medium">
                  Your Question
                </p>
                <p className="text-stone leading-relaxed">{question}</p>
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
            className="text-center py-24"
          >
            <motion.div 
              className="text-7xl mb-8 text-stone-100"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ◇
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-stone mb-4">
              Shuffling
            </h2>
            <p className="text-stone-100 max-w-md mx-auto leading-relaxed">
              Hold your question in mind as the cards are prepared
            </p>
          </motion.div>
        )}

        {step === 'draw' && (
          <motion.div
            key="draw"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center py-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-light text-stone mb-8">
              The cards are ready
            </h2>
            <button onClick={handleDrawCards} className="btn-primary text-lg px-12 py-5">
              Reveal Your Reading
            </button>
          </motion.div>
        )}

        {step === 'reveal' && reading && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Cards Display */}
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {reading.cards.map((readingCard, index) => {
                const isFlipped = flippedCards.has(index);
                return (
                  <motion.div 
                    key={index} 
                    className="space-y-4 flex-shrink-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div 
                      className="reading-card cursor-pointer"
                      onClick={() => !isFlipped && handleFlipCard(index)}
                    >
                      <TarotCard
                        card={readingCard.card}
                        reversed={readingCard.reversed}
                        faceUp={isFlipped}
                        animateFlip={true}
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-stone uppercase tracking-wider">
                      {readingCard.position.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {flippedCards.size < reading.cards.length && (
              <div className="text-center py-8">
                <p className="text-stone-100 mb-6">Tap cards to reveal, or</p>
                <button onClick={handleFlipAll} className="btn-secondary">
                  Reveal All
                </button>
              </div>
            )}

            {flippedCards.size === reading.cards.length && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-10"
              >
                {/* Synthesis */}
                <div className="card max-w-4xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-serif font-light text-stone mb-6 tracking-tight">
                    Your Reading
                  </h3>
                  <p className="text-stone-100 leading-relaxed text-lg">
                    {reading.synthesis}
                  </p>
                </div>

                {/* Individual Card Meanings */}
                {reading.cards.length > 1 && (
                  <div className="space-y-6 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-serif font-light text-stone mb-6 tracking-tight">
                      The Cards in Detail
                    </h3>
                  {reading.cards.map((readingCard, index) => {
                    const category = determineQuestionCategory(question);
                    const meaning = interpretCardInContext(readingCard, question, category);
                    const generalMeaning = readingCard.reversed 
                      ? readingCard.card.reversed.meaning 
                      : readingCard.card.upright.meaning;
                    
                    return (
                      <div key={index} className="card">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                          <div className="w-full md:w-24 h-36 flex-shrink-0">
                            <TarotCard
                              card={readingCard.card}
                              reversed={readingCard.reversed}
                              faceUp={true}
                            />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <h4 className="text-xl font-serif font-light text-stone mb-1">
                                {readingCard.card.name} {readingCard.reversed && '(Reversed)'}
                              </h4>
                              <p className="text-sm text-stone-100 uppercase tracking-wider">
                                {readingCard.position.name}
                              </p>
                            </div>
                            <p className="text-stone-100 text-sm leading-relaxed border-l-2 border-terracotta/30 pl-4">
                              {readingCard.position.description}
                            </p>
                            <div className="space-y-3 pt-2">
                              <div>
                                <p className="text-sm font-medium text-terracotta mb-2 uppercase tracking-wider">For Your Question</p>
                                <p className="text-stone-100 leading-relaxed">
                                  {meaning}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-stone-100 mb-2 uppercase tracking-wider opacity-60">Traditional Meaning</p>
                                <p className="text-stone-100 leading-relaxed opacity-80 text-sm">
                                  {generalMeaning}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                  <button onClick={handleNewReading} className="btn-primary">
                    New Reading
                  </button>
                  <button 
                    onClick={() => {
                      trackEvent(AnalyticsEvents.READING_SAVE);
                    }}
                    className="btn-secondary opacity-60 cursor-default"
                    disabled
                  >
                    Saved
                  </button>
                </div>

                {/* Entertainment Disclaimer */}
                <div className="text-center text-sm text-stone-100/50 mt-12 max-w-2xl mx-auto leading-relaxed">
                  <p>
                    Tarot readings are offered for entertainment and self-reflection. 
                    They do not constitute professional advice of any kind.
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
