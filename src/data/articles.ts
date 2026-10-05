import { getCollection, type CollectionEntry } from 'astro:content';
import type { TopicId } from './topics';

export type Article = CollectionEntry<'articles'>;

export const slugOf = (a: Article) => a.id.split('/').pop()!;
export const articleUrl = (a: Article) => `/topics/${a.data.topic}/${slugOf(a)}/`;

export async function articlesFor(topic: TopicId) {
  return (await getCollection('articles', (a) => a.data.topic === topic)).sort((a, b) => a.data.order - b.data.order);
}

/** Resolve a session reading entry ("slug" within topic, or "topic/slug"). */
export async function resolveReading(topic: TopicId, refs: string[]) {
  const all = await getCollection('articles');
  return refs.map((ref) => {
    const id = ref.includes('/') ? ref : `${topic}/${ref}`;
    const hit = all.find((a) => a.id === id);
    if (!hit) throw new Error(`Session reading not found: ${id}`);
    return hit;
  });
}
