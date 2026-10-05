// The five core symptoms — one stone each in the logo. Order is the path order.

export const TOPIC_IDS = ['reality', 'boundaries', 'self-care', 'moderation', 'self-esteem'] as const;
export type TopicId = (typeof TOPIC_IDS)[number];

export interface Topic {
  id: TopicId;
  name: string;
  short: string;   // one line for the home path
  intro: string;   // topic page lede
  groups: { name: string; blurb: string }[];
}

export const TOPICS: Topic[] = [
  {
    id: 'reality',
    name: 'Reality',
    short: 'What you think, feel and do, and why owning it matters. Includes safe people and feelings.',
    intro: "Your reality is what you think, feel, see and do. We look at why it's hard to own, how we try to control other people's reality, and the feelings that make it up.",
    groups: [
      { name: 'Safe people', blurb: 'Who we can share our reality with, and how to tell.' },
      { name: 'Owning your reality', blurb: "Why it's hard, and tools that help." },
      { name: 'Feelings', blurb: 'The part of reality we feel: where feelings come from and how to handle them.' },
    ],
  },
  {
    id: 'boundaries',
    name: 'Boundaries',
    short: 'The containers that protect your reality and keep you from forcing it on others.',
    intro: 'Boundaries are the containers of our reality. They protect it from others, and they keep us from pushing it onto them.',
    groups: [
      { name: 'Understanding boundaries', blurb: 'What boundaries are, and what they are not.' },
      { name: 'Setting boundaries', blurb: 'Putting them into words and practice.' },
    ],
  },
  {
    id: 'self-care',
    name: 'Self Care',
    short: 'Knowing your needs and wants, and sharing them in relationships.',
    intro: 'Knowing our needs and wants is a key step toward connection. Balanced with the needs and wants of others, it builds relationships that fill both people.',
    groups: [{ name: 'Needs and wants', blurb: 'Recognizing them, and caring for yourself as an adult.' }],
  },
  {
    id: 'moderation',
    name: 'Moderation',
    short: 'Bringing the over-the-top and the suppressed back to balance. Includes grace, truth and time.',
    intro: 'As you grow, you notice areas that are over the top or suppressed. Moderation is the balancing piece that ties reality and boundaries together.',
    groups: [
      { name: 'Finding balance', blurb: 'Where moderation issues come from, and tools for balance.' },
      { name: 'Grace, truth and time', blurb: 'The ingredients that keep us moving along the journey.' },
    ],
  },
  {
    id: 'self-esteem',
    name: 'Self Esteem',
    short: 'Keeping your value within yourself. Includes the drama triangle.',
    intro: 'Self esteem is the sense of value we all strive for. We look at keeping it within ourselves, and noticing when we have placed it in others.',
    groups: [
      { name: 'Understanding self esteem', blurb: 'What healthy self esteem looks like and where issues come from.' },
      { name: 'Relationships', blurb: 'Detachment and guidelines for healthy relationships.' },
    ],
  },
];

export const topicById = (id: string) => TOPICS.find((t) => t.id === id)!;
