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

// TODO: a short bio for each member.
export const members: Member[] = [
  { name: 'Zach Pizzolato', role: 'Vocals & guitar', bio: 'A sentence or two about Zach: years playing, favorite song to cover, day job.' },
  { name: 'Tom Fairbairn', role: 'Vocals & keys', bio: 'A sentence or two about Tom: years playing, favorite song to cover, day job.' },
  { name: 'Steve Wollard', role: 'Lead guitar', bio: 'A sentence or two about Steve: years playing, favorite song to cover, day job.' },
  { name: 'Alex Hamer', role: 'Bass', bio: 'A sentence or two about Alex: years playing, favorite song to cover, day job.' },
  { name: 'Marx Enuff', role: 'Drums', bio: 'A sentence or two about Marx: years playing, favorite song to cover, day job.' },
];

// TODO: the band's story, shown above the lineup. One string per paragraph.
export const story: string[] = [
  "Beggar's Buzz plays the rock & roll songs everybody knows the words to, from the 60s through the 90s.",
  'Replace this with how the band got together, where you usually play, and what a night with you is like.',
];
