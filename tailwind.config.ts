import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
