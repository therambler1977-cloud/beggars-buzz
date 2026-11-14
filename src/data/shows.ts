// Upcoming shows. Add one entry per gig; the site sorts them by date and hides
// past shows automatically (also in visitors' browsers, so you don't need to
// redeploy the day after a gig to clear it).
//
//   date:  'YYYY-MM-DD'          (required)
//   time:  '8:00 PM'             (optional)
//   venue: 'The Rusty Anchor'    (required; use 'Private event' for closed gigs)
//   city:  'Brookfield, IL'      (optional)
//   address: '123 Main St, Brookfield, IL'  (optional; makes a directions link)
//   link:  'https://...'         (optional; the venue's event page or tickets)
//   note:  'No cover', '21+'     (optional)

export interface Show {
  date: string;
  time?: string;
  venue: string;
  city?: string;
  address?: string;
  link?: string;
  note?: string;
}

// TODO: replace these samples with real gigs.
export const shows: Show[] = [
  { date: '2026-12-05', time: '8:00 PM', venue: 'Sample Venue', city: 'Your Town, IL', note: 'No cover' },
  { date: '2026-12-19', time: '9:00 PM', venue: 'Another Sample Bar', city: 'Your Town, IL' },
  { date: '2026-12-31', time: '9:00 PM', venue: "New Year's Eve Party", city: 'Your Town, IL', note: 'Tickets at the door' },
];
