// Band members, shown on The Band page in this order.
// To add a photo, put it in src/assets/band/ and import it at the top, e.g.
//   import zach from '../assets/band/zach.jpg';
// then set photo: zach. Members without a photo get the bee.
import type { ImageMetadata } from 'astro';

export interface Member {
  name: string;
  role: string;
  bio: string;
  photo?: ImageMetadata;
}

// TODO: replace with the real lineup.
export const members: Member[] = [
  { name: 'Member Name', role: 'Lead vocals', bio: 'A sentence or two about this member: how long they have been playing, favorite song to cover, day job.' },
  { name: 'Member Name', role: 'Lead guitar', bio: 'A sentence or two about this member.' },
  { name: 'Member Name', role: 'Bass & vocals', bio: 'A sentence or two about this member.' },
  { name: 'Member Name', role: 'Drums', bio: 'A sentence or two about this member.' },
];

// TODO: the band's story, shown above the lineup. One string per paragraph.
export const story: string[] = [
  "Beggar's Buzz plays the rock & roll songs everybody knows the words to, from the 60s through the 90s.",
  'Replace this with how the band got together, where you usually play, and what a night with you is like.',
];
