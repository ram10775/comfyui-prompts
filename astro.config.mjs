import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ram10775.github.io',
  base: '/comfyui-prompts',
  integrations: [sitemap()],
});
