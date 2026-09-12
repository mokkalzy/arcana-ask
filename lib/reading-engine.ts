import { TarotCard, TAROT_DECK } from './tarot-data';
import { Spread, SpreadPosition, ReadingCard, Reading } from './spreads';

export function shuffleDeck(seed?: number): TarotCard[] {
  const deck = [...TAROT_DECK];
  
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  
  return deck;
}

export function drawCards(
  spread: Spread,
  allowReversals: boolean = true,
  shuffledDeck?: TarotCard[]
): ReadingCard[] {
  const deck = shuffledDeck || shuffleDeck();
  const drawnCards: ReadingCard[] = [];
  
  for (let i = 0; i < spread.cardCount; i++) {
    const card = deck[i];
    const position = spread.positions[i];
    const reversed = allowReversals && Math.random() > 0.5;
    
    drawnCards.push({
      card,
      position,
      reversed,
    });
  }
  
  return drawnCards;
}

export function generateSynthesis(
  question: string,
  spread: Spread,
  cards: ReadingCard[]
): string {
  const cardDescriptions = cards.map((rc, idx) => {
    const orientation = rc.reversed ? 'reversed' : 'upright';
    const meaning = rc.reversed ? rc.card.reversed.meaning : rc.card.upright.meaning;
    return `${rc.position.name}: ${rc.card.name} (${orientation}) - ${meaning}`;
  }).join(' ');

  if (spread.id === 'yes-no') {
    const card = cards[0];
    const isYes = !card.reversed;
    const confidence = card.card.arcana === 'major' ? 'strong' : 'gentle';
    
    return isYes
      ? `The cards suggest a ${confidence} yes. ${card.card.name} indicates ${card.card.upright.meaning.split('.')[0].toLowerCase()}.`
      : `The cards suggest caution or reconsideration. ${card.card.name} reversed indicates ${card.card.reversed.meaning.split('.')[0].toLowerCase()}.`;
  }

  if (spread.id === 'three-card' || spread.id === 'situation-action-outcome') {
    const [first, second, third] = cards;
    return `Looking at the journey shown in the cards: ${first.card.name} ${first.reversed ? '(reversed)' : ''} in the ${first.position.name} position suggests ${(first.reversed ? first.card.reversed.meaning : first.card.upright.meaning).split('.')[0].toLowerCase()}. Moving to ${second.position.name}, ${second.card.name} ${second.reversed ? '(reversed)' : ''} indicates ${(second.reversed ? second.card.reversed.meaning : second.card.upright.meaning).split('.')[0].toLowerCase()}. Finally, ${third.card.name} ${third.reversed ? '(reversed)' : ''} as the ${third.position.name} shows ${(third.reversed ? third.card.reversed.meaning : third.card.upright.meaning).split('.')[0].toLowerCase()}. These cards together suggest a path from your current foundation through present action toward a clear outcome.`;
  }

  if (spread.id === 'celtic-cross') {
    return `This Celtic Cross reading reveals a complex situation. At the heart of the matter, ${cards[0].card.name} represents your present circumstances, while what crosses you is ${cards[1].card.name}. The foundation of this situation lies in ${cards[2].card.name}, with recent influences from ${cards[3].card.name}. Your best potential outcome is shown by ${cards[4].card.name}, with the near future bringing ${cards[5].card.name}. Your approach is reflected in ${cards[6].card.name}, while external factors show up as ${cards[7].card.name}. Your hopes and fears manifest as ${cards[8].card.name}, and the ultimate outcome is indicated by ${cards[9].card.name}. This spread reveals the interconnected nature of your situation and the multiple forces at play.`;
  }

  return `The cards reveal insight into your question about ${question}. ${cardDescriptions}`;
}

export function createReading(
  question: string,
  spread: Spread,
  allowReversals: boolean = true
): Reading {
  const cards = drawCards(spread, allowReversals);
  const synthesis = generateSynthesis(question, spread, cards);
  
  return {
    id: `reading-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    timestamp: Date.now(),
    question,
    spread,
    cards,
    synthesis,
  };
}

export function interpretCardInContext(
  card: ReadingCard,
  question: string,
  questionCategory?: 'love' | 'career' | 'general'
): string {
  const meanings = card.reversed ? card.card.reversed : card.card.upright;
  
  if (questionCategory === 'love') {
    return meanings.love;
  } else if (questionCategory === 'career') {
    return meanings.career;
  } else {
    return meanings.meaning;
  }
}

export function determineQuestionCategory(question: string): 'love' | 'career' | 'general' {
  const lowerQuestion = question.toLowerCase();
  
  const loveKeywords = ['love', 'relationship', 'romance', 'dating', 'partner', 'marriage', 'boyfriend', 'girlfriend', 'crush', 'heart'];
  const careerKeywords = ['career', 'job', 'work', 'business', 'money', 'financial', 'promotion', 'interview', 'professional', 'income'];
  
  if (loveKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    return 'love';
  } else if (careerKeywords.some(keyword => lowerQuestion.includes(keyword))) {
    return 'career';
  }
  
  return 'general';
}
