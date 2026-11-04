import { defineConfig } from 'astro/config';

// Fully static output: Cloudflare serves the files from /dist as they are.
export default defineConfig({
  output: 'static',
  site: 'https://aectis.be',
});
