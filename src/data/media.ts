// Photos and videos for the Photos & Video page.
//
// Photos: put image files in src/assets/photos/ and they appear automatically
// (any .jpg, .jpeg, .png or .webp). Astro resizes them when the site builds.
// Add a caption by naming the file, e.g. "rusty-anchor-2026.jpg" shows as
// "Rusty anchor 2026", or list captions below by file name.
export const captions: Record<string, string> = {
  // 'rusty-anchor-2026.jpg': 'Packed house at the Rusty Anchor',
};

// Videos: paste YouTube links. Either the full link or just the ID works.
// TODO: add the band's videos.
export const videos: { url: string; title: string }[] = [
  // { url: 'https://www.youtube.com/watch?v=XXXXXXXXXXX', title: 'Live at the Rusty Anchor' },
];
