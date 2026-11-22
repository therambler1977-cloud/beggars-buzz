# Beggar's Buzz website

Website for [Beggar's Buzz](https://beggarsbuzz.com), a classic rock cover band. It's a static site built with [Astro](https://astro.build) and hosted on Cloudflare Pages.

## Run it locally

Needs Node.js 22 or newer.

```sh
npm install
npm run dev       # live preview at http://localhost:4321
npm run build     # builds the finished site into dist/
```

## Where to change things

| To change | Edit |
| --- | --- |
| Upcoming shows | `src/data/shows.ts` (past shows hide themselves) |
| Song list | `src/data/songs.ts` |
| Band members, bios and the band's story | `src/data/band.ts` (member photos go in `src/assets/band/`) |
| Gig photos | Drop image files into `src/assets/photos/` |
| Videos | `src/data/media.ts` (paste YouTube links) |
| Social links, area you play, booking form (Formspree ID) | `src/data/site.ts` |
| Page text | `src/pages/*.astro` (one file per page) |
| Colors and fonts | `src/styles/global.css` (top of the file) |
| Logo, bee and poster art | `src/assets/` |

You can edit any of these right on github.com: open the file, click the pencil, and commit. Cloudflare rebuilds the site in about a minute.

Search the code for `TODO` to find what still needs real content, and see `TO-CONFIRM.md`.

## Going live checklist

1. Replace the sample shows, songs and bios.
2. Set `draft: false` in `src/data/site.ts`. This removes the "sample content" bar and lets Google index the site.
3. Connect the booking form: in Formspree, create a form that emails the band, and paste its form ID (the part after `/f/` in the endpoint) into `formspreeId` in `src/data/site.ts`.

## Deploying on Cloudflare Pages

1. In Cloudflare, go to Workers & Pages > Create > Pages > Connect to Git, and pick this repository.
2. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
3. Every push to `main` publishes the site; other branches get their own preview link.
4. The site is live at `beggarsbuzz.com` (a custom domain on the Pages project, connected Nov 22, 2026). Email to info@beggarsbuzz.com is forwarded by Cloudflare Email Routing. To also serve `www.beggarsbuzz.com`, add it as a custom domain or redirect it to `beggarsbuzz.com`.
