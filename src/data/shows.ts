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
//   private: true                (optional; shows a "Private event" tag and keeps it
//                                 out of Google's event listings)
//
// Past shows stay in this list: they move to "Recent shows" on the Shows page
// on their own once the date has passed.

export interface Show {
  date: string;
  time?: string;
  venue: string;
  city?: string;
  address?: string;
  link?: string;
  note?: string;
  private?: boolean;
}

export const shows: Show[] = [
  {
    date: '2026-08-15',
    time: '8:00 PM – 11:00 PM',
    venue: 'Pub 78',
    city: 'Brookfield, IL',
    address: '3733 Grand Boulevard, Brookfield, IL 60513',
  },
  { date: '2026-08-29', time: '2:00 PM – 4:00 PM', venue: 'Block Party', city: 'Brookfield, IL', private: true },
  { date: '2026-08-30', time: '1:00 PM – 4:00 PM', venue: 'Village Field Club', city: 'La Grange Park, IL', private: true },
  {
    date: '2027-01-30',
    time: '8:00 PM – 11:00 PM',
    venue: 'Pub 78',
    city: 'Brookfield, IL',
    address: '3733 Grand Boulevard, Brookfield, IL 60513',
    note: 'No cover',
  },
];
