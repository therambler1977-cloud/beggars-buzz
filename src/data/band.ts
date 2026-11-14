// Band members, shown on The Band page in this order.
// To add a photo, put it in src/assets/band/ and import it at the top, e.g.
//   import zach from '../assets/band/zach.jpg';
// then set photo: zach. Members without a photo get the bee.
import type { ImageMetadata } from 'astro';
import groupPhoto from '../assets/photos/03-pub-78-band-photo.jpg';

// The photo at the top of The Band page.
export const bandPhoto = { src: groupPhoto, alt: "The five members of Beggar's Buzz on stage at Pub 78" };

export interface Member {
  name: string;
  role: string;
  bio: string;
  photo?: ImageMetadata;
}

// TODO: real names and bios. Roles other than Zach's are a guess from the gig photos; fix as needed.
export const members: Member[] = [
  { name: 'Zach Pizzolato', role: 'Vocals & guitar', bio: 'A sentence or two about Zach: how long he has been playing, favorite song to cover, day job.' },
  { name: 'Member Name', role: 'Guitar', bio: 'A sentence or two about this member.' },
  { name: 'Member Name', role: 'Bass', bio: 'A sentence or two about this member.' },
  { name: 'Member Name', role: 'Keys', bio: 'A sentence or two about this member.' },
  { name: 'Member Name', role: 'Drums', bio: 'A sentence or two about this member.' },
];

// TODO: the band's story, shown above the lineup. One string per paragraph.
export const story: string[] = [
  "Beggar's Buzz plays the rock & roll songs everybody knows the words to, from the 60s through the 90s.",
  'Replace this with how the band got together, where you usually play, and what a night with you is like.',
];
