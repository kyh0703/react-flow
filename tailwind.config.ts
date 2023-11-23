import type { Config } from 'tailwindcss'

const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) }
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) }
const px0_200 = { ...Array.from(Array(201)).map((_, i) => `${i}px`) }

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#3f51b5',
      primaryDar: '#2c387e',
      primaryLight: '#6573c3',
      secondary: '#f50057',
      secondaryDark: '#ab003c',
      secondaryLight: '#f73378',
      border: '#cdced2',
      danger: '#ed1c24',
      dangerDark: '#a50d12',
      placeholder: '#a0a0a0',
      gray: '#6b6b6b',
      black: '#000',
      white: '#fff',
      text: '#000',
    },
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
