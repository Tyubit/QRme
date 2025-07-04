import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'], // 👈 make Roboto the default
      },
    },
  },
  plugins: [],
}

export default config