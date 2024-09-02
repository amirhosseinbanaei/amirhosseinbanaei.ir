import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        typography: {
          primary: "hsl(var(--typography-primary))",
          secondary: "hsl(var(--typography-secondary))",
        },
      },
      backgroundImage: {
        heroSection: "url('/heroSection/herosection-bg.svg')",
        waveLine: "url('/heroSection/line.svg')"
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addVariant, e }: { addVariant: any; e: any }) {
      addVariant(
        "fa",
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
