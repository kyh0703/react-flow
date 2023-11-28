import type { Config } from 'tailwindcss'
import { colors, letterSpacings } from './src/themes'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    letterSpacing: letterSpacings,
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        dash: 'dash 1.5s ease-in-out infinite',
        rotate: 'rotate 2s linear infinite',
      },
      keyframes: {
        dash: {
          '0%': {
            strokeDasharray: '1, 150',
            strokeDashoffset: '0',
          },
          '50%': {
            strokeDasharray: '90, 150',
            strokeDashoffset: '-35',
          },
          '100%': {
            strokeDasharray: '90, 150',
            strokeDashoffset: '-124',
          },
        },
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
  },
  corePlugins: { preflight: false },
  plugins: [require('@tailwindcss/typography')],
}
export default config
