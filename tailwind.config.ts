import type { Config } from 'tailwindcss';
import { colors, letterSpacings } from './src/themes';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      letterSpacing: letterSpacings,
    },
  },
  corePlugins: { preflight: false },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
