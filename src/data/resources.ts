import type { TopicId } from './topics';

export interface Resource {
  title: string;
  by?: string;
  url?: string;
  topics: (TopicId | 'general')[];
}

export const RESOURCES: Resource[] = [
  { title: 'Facing Codependence', by: 'Pia Mellody, Andrea Wells Miller & J. Keith Miller', topics: ['general'] },
  { title: 'Breaking Free', by: 'Pia Mellody & Andrea Wells Miller', topics: ['general'] },
  { title: 'Codependent No More', by: 'Melody Beattie', topics: ['general'] },
  { title: 'The Language of Letting Go', by: 'Melody Beattie', topics: ['general', 'self-esteem'] },
  { title: 'Changes That Heal', by: 'Dr. Henry Cloud', topics: ['general'] },
  { title: 'Theories of Counseling and Psychotherapy', by: 'Nancy Murdock', topics: ['general'] },
  { title: 'Imago Dei Ministries', url: 'https://www.idmin.org', topics: ['general'] },
  { title: 'Hiding From Love', by: 'Dr. John Townsend', topics: ['reality'] },
  { title: 'Color Code Personality Test', url: 'https://colorcode.com', topics: ['reality'] },
  { title: 'Mind Over Emotions', by: 'Dr. Les Carter', topics: ['reality'] },
  { title: "Good 'n' Angry: How to Handle Your Anger Positively", by: 'Les Carter', topics: ['reality'] },
  { title: 'Feel the Fear & Do It Anyway', by: 'Susan Jeffers, Ph.D.', topics: ['reality'] },
  { title: 'Letting Go of Shame', by: 'Ronald & Patricia Potter-Efron', topics: ['reality'] },
  { title: 'Change Your Brain, Change Your Life', by: 'Daniel Amen', topics: ['reality'] },
  { title: 'Boundaries', by: 'Drs. Henry Cloud & John Townsend', topics: ['boundaries'] },
  { title: 'Searching for Significance', by: 'Robert S. McGee', topics: ['self-esteem'] },
  { title: 'The Power of TED', by: 'David Emerald', topics: ['self-esteem'] },
];

export const resourcesFor = (topic: TopicId | 'general') => RESOURCES.filter((r) => r.topics.includes(topic));
