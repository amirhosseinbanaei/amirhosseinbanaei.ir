// @ts-check
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://amirhosseinbanaei.ir',
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts',
    }),
    sitemap({
      i18n: {
        defaultLocale: 'fa',
        locales: {
          en: 'en-US',
          fa: 'fa-IR'
        },
      },
      xslURL: '/sitemap.xsl'
    })
  ],
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa",
  },
  experimental: {
    svg: {
      mode: 'sprite'
    }
  },
});