import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_IDS } from './data/topics';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    topic: z.enum(TOPIC_IDS),
    group: z.string(),
    order: z.number(),
    summary: z.string().optional(),
  }),
});

export const collections = { articles };
