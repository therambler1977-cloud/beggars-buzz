// Photos and videos for the Photos & Video page.
//
// Photos: put image files in src/assets/photos/ and they appear automatically
// (any .jpg, .jpeg, .png or .webp). Astro resizes them when the site builds.
// Add a caption by naming the file, e.g. "rusty-anchor-2026.jpg" shows as
// "Rusty anchor 2026", or list captions below by file name.
export const captions: Record<string, string> = {
  '01-pub-78-on-stage.jpg': 'Live at Pub 78',
  '02-pub-78-crowd.jpg': 'A full house at Pub 78',
  '03-pub-78-band-photo.jpg': 'The band after the show at Pub 78',
  '04-pub-78-guitar-and-bass.jpg': 'Guitar and bass up front at Pub 78',
  '05-block-party-from-the-stage.jpg': 'A summer block party, seen from the stage',
  '06-block-party-setup.jpg': 'Setting up for a block party',
  '07-pub-78-three-up-front.jpg': 'Steve, Marx and Zach in full swing at Pub 78',
};

// Videos. Two kinds:
//  - Clips hosted on this site: put an .mp4 (and a .jpg still for the cover) in
//    public/videos/ and list it with file and poster. Keep clips short and under
//    about 20 MB; Cloudflare Pages won't serve files over 25 MB.
//  - YouTube: paste the full link or just the ID as url.
export interface Video {
  title: string;
  file?: string;
  poster?: string;
  url?: string;
  portrait?: boolean; // true for a clip filmed upright on a phone
}

export const videos: Video[] = [
  { title: 'Live at Pub 78', file: '/videos/pub-78-live.mp4', poster: '/videos/pub-78-live.jpg' },
  { title: 'Packed dance floor at Pub 78', file: '/videos/pub-78-dance-floor.mp4', poster: '/videos/pub-78-dance-floor.jpg' },
  { title: 'The full band at Pub 78', file: '/videos/pub-78-full-band.mp4', poster: '/videos/pub-78-full-band.jpg' },
  { title: 'Steve on lead guitar at Pub 78', file: '/videos/pub-78-steve-solo.mp4', poster: '/videos/pub-78-steve-solo.jpg', portrait: true },
  // { title: 'Live at the Rusty Anchor', url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' },
];
