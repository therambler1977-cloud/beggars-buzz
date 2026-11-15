// Band members, shown on The Band page in this order.
// To add a photo, put it in src/assets/band/ and import it at the top, e.g.
//   import zach from '../assets/band/zach.jpg';
// then set photo: zach. Members without a photo get the bee.
import type { ImageMetadata } from 'astro';
import groupPhoto from '../assets/photos/03-pub-78-band-photo.jpg';
import zachPhoto from '../assets/band/zach.jpg';
import stevePhoto from '../assets/band/steve.jpg';
import tomPhoto from '../assets/band/tom.jpg';

// The photo at the top of The Band page.
export const bandPhoto = { src: groupPhoto, alt: "The five members of Beggar's Buzz on stage at Pub 78" };

export interface Member {
  name: string;
  role: string;
  bio: string; // leave as '' to show just name and role
  photo?: ImageMetadata;
}

// TODO: a short bio for each member. An empty bio ('') is simply left off the page.
export const members: Member[] = [
  { name: 'Zach Pizzolato', role: 'Vocals & guitar', bio: '', photo: zachPhoto },
  { name: 'Tom Fairbairn', role: 'Vocals & keys', bio: '', photo: tomPhoto },
  { name: 'Steve Wollard', role: 'Lead guitar', bio: '', photo: stevePhoto },
  { name: 'Alex Hamer', role: 'Bass', bio: '' },
  { name: 'Marx Enuff', role: 'Drums', bio: '' },
];

// TODO: the band's story, shown above the lineup. One string per paragraph.
export const story: string[] = [
  "Beggar's Buzz plays the rock & roll songs everybody knows the words to, from the 60s through the 90s.",
  // TODO: add how the band got together, where you usually play, and what a night with you is like.
];
