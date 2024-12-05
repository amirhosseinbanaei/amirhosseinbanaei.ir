import plugin from 'tailwindcss/plugin';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        typography: {
          primary: 'hsl(var(--typography-primary))',
          secondary: 'hsl(var(--typography-secondary))',
        },
      },
      backgroundImage: {
        heroSection: "url('/hero/background.svg')",
        waveLine: "url('/hero/wave-line.svg')",
      },
      fontFamily: {
        Vazirmatn: ['Vazirmatn', ...defaultTheme.fontFamily.sans],
        Inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }: { addComponents: any; theme: any }) {
      addComponents({
        ':root': {
          '--background': '244 30.6% 9.6%',
          '--primary': '221.2 83.2% 53.3%',
          '--secondary': '210 40% 96.1%',
          '--typography-primary': '0 0% 96.1%',
          '--typography-secondary': '217.1 15% 55.7%',
        },
      });
    },
    plugin(function ({ addVariant, e }: { addVariant: any; e: any }) {
      addVariant(
        'fa',
        ({
          modifySelectors,
          separator,
        }: {
          modifySelectors: any;
          separator: any;
        }) => {
          modifySelectors(({ className }: { className: any }) => {
            return `.fa .${e(`fa${separator}${className}`)}`;
          });
        },
      );
    }),
  ],
};
export default config;
