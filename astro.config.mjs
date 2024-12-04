import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
  ],
  site: 'https://your-domain.com',
  image: {
    service: {
      entrypoint: 'sharp',
      config: {
        quality: 80,
        format: ['webp', 'avif', 'jpeg'],
      }
    }
  }
});
