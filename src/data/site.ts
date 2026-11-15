// Band-wide settings. Edit this file to change the name, tagline, links and the booking form.

export const site = {
  name: "Beggar's Buzz",
  url: 'https://www.beggarsbuzz.com',
  tagline: 'Rock & roll songs you love',
  decades: ['60s', '70s', '80s', '90s'],
  description:
    "Beggar's Buzz is a classic rock cover band playing the rock & roll songs you love from the 60s, 70s, 80s and 90s. See upcoming shows or book the band for your venue or party.",
  // TODO: the area you play, e.g. "Chicago's western suburbs". Shown on the home page and to Google.
  area: 'the Chicagoland area',

  // While this is true, every page shows a thin "sample content" bar so nobody mistakes
  // placeholder shows, songs or bios for the real thing. Set it to false before going live.
  draft: false,

  // Social links. Leave a value empty ('') to hide that icon.
  social: {
    facebook: '', // TODO e.g. 'https://www.facebook.com/beggarsbuzz'
    instagram: '', // TODO
    youtube: '', // TODO
    tiktok: '',
  },

  // Booking form. Get a free access key at https://web3forms.com by entering the email
  // that should receive booking requests, then paste the key here. Until it is set, the
  // form shows a "not connected yet" note instead of sending.
  web3formsKey: '',
};

export const nav = [
  { href: '/shows/', label: 'Shows' },
  { href: '/songs/', label: 'Song List' },
  { href: '/media/', label: 'Photos & Video' },
  { href: '/band/', label: 'The Band' },
  { href: '/book/', label: 'Book Us' },
];
