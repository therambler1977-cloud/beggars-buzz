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

export const shows: Show[] = [
  {
    date: '2027-01-30',
    time: '8:00 PM – 11:00 PM',
    venue: 'Pub 78',
    city: 'Brookfield, IL',
    address: '3733 Grand Boulevard, Brookfield, IL 60513',
    note: 'No cover',
  },
];
