export interface SpreadPosition {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
}

export interface Spread {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
  cardCount: number;
}

export const SPREADS: Record<string, Spread> = {
  'yes-no': {
    id: 'yes-no',
    name: 'Yes or No',
    description: 'A single card to provide guidance on a yes/no question. Upright generally suggests yes, reversed suggests no or reconsider.',
    cardCount: 1,
    positions: [
      {
        id: 'answer',
        name: 'Answer',
        description: 'The answer to your question',
        x: 50,
        y: 50,
      },
    ],
  },
  'one-card': {
    id: 'one-card',
    name: 'One Card',
    description: 'A single card for daily guidance, inspiration, or insight into your current situation.',
    cardCount: 1,
    positions: [
      {
        id: 'card',
        name: 'Today\'s Message',
        description: 'Guidance for your day or situation',
        x: 50,
        y: 50,
      },
    ],
  },
  'three-card': {
    id: 'three-card',
    name: 'Three Card: Past, Present, Future',
    description: 'Classic three-card spread revealing the trajectory of your situation through time.',
    cardCount: 3,
    positions: [
      {
        id: 'past',
        name: 'Past',
        description: 'Past influences and foundations',
        x: 25,
        y: 50,
      },
      {
        id: 'present',
        name: 'Present',
        description: 'Current situation and challenges',
        x: 50,
        y: 50,
      },
      {
        id: 'future',
        name: 'Future',
        description: 'Likely outcome and potential',
        x: 75,
        y: 50,
      },
    ],
  },
  'situation-action-outcome': {
    id: 'situation-action-outcome',
    name: 'Situation, Action, Outcome',
    description: 'Understand your current situation, the action you should take, and the likely outcome.',
    cardCount: 3,
    positions: [
      {
        id: 'situation',
        name: 'Situation',
        description: 'The current state of affairs',
        x: 25,
        y: 50,
      },
      {
        id: 'action',
        name: 'Action',
        description: 'What you should do',
        x: 50,
        y: 50,
      },
      {
        id: 'outcome',
        name: 'Outcome',
        description: 'The likely result',
        x: 75,
        y: 50,
      },
    ],
  },
  'celtic-cross': {
    id: 'celtic-cross',
    name: 'Celtic Cross',
    description: 'The most popular 10-card spread for deep, comprehensive insight into any situation.',
    cardCount: 10,
    positions: [
      {
        id: 'present',
        name: '1. Present',
        description: 'Your current situation',
        x: 40,
        y: 50,
      },
      {
        id: 'challenge',
        name: '2. Challenge',
        description: 'What crosses or challenges you',
        x: 40,
        y: 50,
      },
      {
        id: 'foundation',
        name: '3. Foundation',
        description: 'The foundation or root cause',
        x: 40,
        y: 70,
      },
      {
        id: 'past',
        name: '4. Past',
        description: 'Recent past influences',
        x: 20,
        y: 50,
      },
      {
        id: 'crown',
        name: '5. Crown',
        description: 'Best that can be achieved',
        x: 40,
        y: 30,
      },
      {
        id: 'future',
        name: '6. Future',
        description: 'Near future',
        x: 60,
        y: 50,
      },
      {
        id: 'self',
        name: '7. Self',
        description: 'Your attitude and approach',
        x: 75,
        y: 80,
      },
      {
        id: 'environment',
        name: '8. Environment',
        description: 'External influences',
        x: 75,
        y: 65,
      },
      {
        id: 'hopes',
        name: '9. Hopes & Fears',
        description: 'Your hopes and fears',
        x: 75,
        y: 50,
      },
      {
        id: 'outcome',
        name: '10. Outcome',
        description: 'Final outcome',
        x: 75,
        y: 35,
      },
    ],
  },
};

export function getSpreadById(id: string): Spread | undefined {
  return SPREADS[id];
}

export function getAllSpreads(): Spread[] {
  return Object.values(SPREADS);
}

export interface ReadingCard {
  card: import('./tarot-data').TarotCard;
  position: SpreadPosition;
  reversed: boolean;
}

export interface Reading {
  id: string;
  timestamp: number;
  question: string;
  spread: Spread;
  cards: ReadingCard[];
  synthesis?: string;
}
