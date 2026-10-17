import type { TopicId } from './topics';

// The six evergreen sessions. Dates come from TERM in site.ts.

export interface Session {
  n: number;
  title: string;
  topic: TopicId;
  summary: string;
  /** Article slugs to read this week (within `topic`, or "topic/slug" for another topic). */
  reading: string[];
}

export const CLASSES: Session[] = [
  {
    n: 1,
    title: 'Safe People & the Color Code',
    topic: 'reality',
    summary: 'What makes a person safe and how to recognize one, then the four Color Code personalities: what drives each one, and how understanding them helps us take things less personally.',
    reading: ['safe-people-are', 'color-code-blue', 'color-code-red', 'color-code-white', 'color-code-yellow'],
  },
  {
    n: 2,
    title: 'Reality & Feelings',
    topic: 'reality',
    summary: 'What your reality is made of and why it shapes how you interpret life, including the feelings that are part of it, and the True, Not True, or Questionable tool for sorting what is real.',
    reading: ['difficulty-owning-our-reality', 'tools-to-own-your-reality', 'why-we-are-afraid-to-tell-people-who-we-are',
      'what-generates-feelings', 'feelings-chart', 'five-truths-about-fear', 'how-to-handle-anger', 'letting-go-of-guilt', 'healing-wounds-of-shame', 'stopping-our-pain'],
  },
  {
    n: 3,
    title: 'Boundaries',
    topic: 'boundaries',
    summary: 'Now that we understand our reality, how do we protect it, and protect others from it? Boundaries both protect and contain our reality.',
    reading: ['what-are-boundaries', 'common-myths-about-boundaries', 'property-lines', 'boundary-sketch', 'skills-for-setting-boundaries', 'boundary-statements', 'boundary-violations'],
  },
  {
    n: 4,
    title: 'Self Care',
    topic: 'self-care',
    summary: 'Knowing our wants and needs, and balancing them with the wants and needs of the people we love.',
    reading: ['difficulty-acknowledging-needs-and-wants', 'skills-for-becoming-an-adult'],
  },
  {
    n: 5,
    title: 'Moderation & Grace, Truth, Time',
    topic: 'moderation',
    summary: 'Bringing over-the-top and suppressed areas back to balance, and the grace, truth and time that keep us moving along the journey.',
    reading: ['what-is-moderation', 'where-moderation-issues-come-from', 'difficulty-expressing-reality-moderately', 'moderation-toolbox', 'grace-truth-and-time', 'grace', 'truth', 'good-time-bad-time'],
  },
  {
    n: 6,
    title: 'Self Esteem & the Drama Triangle',
    topic: 'self-esteem',
    summary: 'Where our sense of value comes from, how to keep it within ourselves, and how the drama triangle pulls us into trying to control others.',
    reading: ['difficulty-experiencing-self-esteem', 'where-self-esteem-issues-come-from', 'healthy', 'detachment', 'guidelines-for-relationships'],
  },
];

export const handoutUrl = (n: number) => `/handouts/class-${n}.pdf`;
