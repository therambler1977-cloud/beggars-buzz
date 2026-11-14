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
};

// Videos: paste YouTube links. Either the full link or just the ID works.
// TODO: add the band's videos.
export const videos: { url: string; title: string }[] = [
  // { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: 'Live at the Rusty Anchor' },
];
