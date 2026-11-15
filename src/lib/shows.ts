import { shows, type Show } from '../data/shows';

/** Today's date as YYYY-MM-DD in the band's time zone (Central). */
export function today(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Chicago' }).format(new Date());
}

/** Shows from today on, soonest first. */
export function upcomingShows(): Show[] {
  const t = today();
  return [...shows].filter((s) => s.date >= t).sort((a, b) => a.date.localeCompare(b.date));
}

/** Every show, newest first (the page decides which are past). */
export function allShowsNewestFirst(): Show[] {
  return [...shows].sort((a, b) => b.date.localeCompare(a.date));
}

function parts(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
}
const fmt = (date: string, o: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...o }).format(parts(date));

export const dayName = (date: string) => fmt(date, { weekday: 'short' });
export const monthName = (date: string) => fmt(date, { month: 'short' });
export const dayNum = (date: string) => fmt(date, { day: 'numeric' });
export const longDate = (date: string) => fmt(date, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

export const directionsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

/** Start time as ISO local time for schema.org, e.g. 2026-12-05T20:00 */
export function isoStart(s: Show): string {
  const m = s.time?.match(/(\d{1,2})(?::(\d{2}))?\s*(am|pm)/i);
  if (!m) return s.date;
  let h = Number(m[1]) % 12;
  if (m[3].toLowerCase() === 'pm') h += 12;
  return `${s.date}T${String(h).padStart(2, '0')}:${m[2] ?? '00'}`;
}
