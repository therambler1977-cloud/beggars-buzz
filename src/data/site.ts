// Band-wide settings. Edit this file to change the name, tagline, links and the booking form.

export const site = {
  name: "Beggar's Buzz",
  url: 'https://beggarsbuzz.com',
  // Public contact email (forwards to Zach through Cloudflare Email Routing). Shown on Book Us.
  email: 'info@beggarsbuzz.com',
  tagline: 'Rock & roll songs you love',
  decades: ['60s', '70s', '80s', '90s'],
  description:
    "Beggar's Buzz is a classic rock cover band playing the rock & roll songs you love from the 60s, 70s, 80s and 90s. See upcoming shows or book the band for your venue or party.",
  // The area the band plays. Shown on the home page and to Google.
  area: 'the Chicagoland area',

  // While this is true, every page shows a thin "sample content" bar so nobody mistakes
  // placeholder shows, songs or bios for the real thing. Set it to false before going live.
  draft: false,

  // Social links. Leave a value empty ('') to hide that icon.
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61577007092126',
    instagram: 'https://www.instagram.com/beggarsbuzz/',
    youtube: '', // TODO
    tiktok: '',
  },

  // Booking form, sent through Formspree (https://formspree.io). In Formspree,
  // create a form that emails the band, then copy its form ID: the part after
  // /f/ in its endpoint, e.g. 'xyzabcde' from https://formspree.io/f/xyzabcde.
  // Until it is set, the form shows a "not connected yet" note instead of sending.
  formspreeId: 'xzerewwn',
};

export const nav = [
  { href: '/shows/', label: 'Shows' },
  { href: '/songs/', label: 'Song List' },
  { href: '/media/', label: 'Photos & Video' },
  { href: '/band/', label: 'The Band' },
  { href: '/book/', label: 'Book Us' },
];
