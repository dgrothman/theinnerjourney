// Everything that changes term to term lives here. Update this file for a new term.

export const SITE = {
  name: 'The Inner Journey',
  tagline: 'Finding Peace Within',
  url: 'https://www.theinnerjourney.training',
  // Brevo embedded-form action URL (Brevo → Contacts → Forms → Share → HTML).
  // Empty string hides the signup form and shows an email link instead.
  brevoFormAction: '',
};

export interface Term {
  name: string;          // "Fall 2026"
  firstClass: string;    // ISO date of class 1
  weeks: number;
  weekday: string;
  time: string;
  signupUrl: string;
  location: { name?: string; street: string; city: string; mapsUrl: string };
}

// Set to null between terms; the home page swaps to "next class coming soon".
export const TERM: Term | null = {
  name: 'Fall 2026',
  firstClass: '2026-10-06',
  weeks: 6,
  weekday: 'Tuesdays',
  time: '6:15–8:15pm',
  signupUrl: 'https://forms.gle/JpghHjQvYL5mWRKk9',
  location: {
    street: '6280 McLeod Dr, Suite 120',
    city: 'Las Vegas, NV 89120',
    mapsUrl: 'https://maps.google.com/?q=6280+McLeod+Dr+Suite+120+Las+Vegas+NV+89120',
  },
};

const DAY = 86_400_000;

/** Date of class n (1-based) this term. */
export function classDate(term: Term, n: number): Date {
  return new Date(Date.parse(term.firstClass + 'T12:00:00Z') + (n - 1) * 7 * DAY);
}

export function lastClass(term: Term): Date {
  return classDate(term, term.weeks);
}

const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...opts });
export const fmtShort = (d: Date) => fmt({ weekday: 'short', month: 'short', day: 'numeric' }).format(d);
export const fmtMonthDay = (d: Date) => fmt({ month: 'short', day: 'numeric' }).format(d);
export const fmtLong = (d: Date) => fmt({ weekday: 'long', month: 'long', day: 'numeric' }).format(d);
