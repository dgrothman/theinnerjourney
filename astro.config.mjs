// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import oldMkdocsRedirects from './src/data/redirects.json' with { type: 'json' };

export default defineConfig({
  site: 'https://www.theinnerjourney.training',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  // Old MkDocs URLs (bookmarks, past emails) -> new pages. Static build emits meta-refresh stubs.
  redirects: oldMkdocsRedirects,
  integrations: [sitemap()],
});
