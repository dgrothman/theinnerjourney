// Class recordings, newest term first. Add a term block when new audio is posted.

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
    term: 'Q1 2026',
    recordings: [
      { n: 1, title: 'Class 1', spotifyEpisode: '3y8aI01UUH5l5CY6VIJAj6' },
      { n: 2, title: 'Class 2', spotifyEpisode: '21UJFpb7bYGOy3ohKxQpOf' },
    ],
  },
];

/** Most recent recording for a session, if any. */
export function latestRecording(n: number) {
  for (const t of AUDIO) {
    const r = t.recordings.find((r) => r.n === n);
    if (r) return { term: t.term, ...r };
  }
  return undefined;
}

export const spotifyUrl = (id: string) => `https://open.spotify.com/episode/${id}`;
export const spotifyEmbed = (id: string) => `https://open.spotify.com/embed/episode/${id}?theme=0`;
