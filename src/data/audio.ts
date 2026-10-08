// Class recordings, newest term first. Add a term block when new audio is posted.
// Name the current term exactly like TERM.name in site.ts (e.g. 'Fall 2026') so class pages show it.
import { TERM } from './site';

export interface Recording {
  n: number;           // session number
  title: string;
  spotifyEpisode: string;
}

export interface AudioTerm {
  term: string;
  recordings: Recording[];
}

export const AUDIO: AudioTerm[] = [
  {
    term: 'Fall 2026',
    recordings: [
      { n: 1, title: 'Class 1', spotifyEpisode: '4AvEKJNOxCwejqLuFvIWq5' },
    ],
  },
  {
    term: 'Q1 2026',
    recordings: [
      { n: 1, title: 'Class 1', spotifyEpisode: '3y8aI01UUH5l5CY6VIJAj6' },
      { n: 2, title: 'Class 2', spotifyEpisode: '21UJFpb7bYGOy3ohKxQpOf' },
    ],
  },
];

/** This term's recording for a session, if posted. Older terms stay on the Audio page only. */
export function currentRecording(n: number) {
  const t = AUDIO.find((t) => t.term === TERM?.name);
  const r = t?.recordings.find((r) => r.n === n);
  return t && r ? { term: t.term, ...r } : undefined;
}

export const spotifyUrl = (id: string) => `https://open.spotify.com/episode/${id}`;
export const spotifyEmbed = (id: string) => `https://open.spotify.com/embed/episode/${id}?theme=0`;
