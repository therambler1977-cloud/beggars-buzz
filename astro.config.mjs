import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://beggarsbuzz.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
