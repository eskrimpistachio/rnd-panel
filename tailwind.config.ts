import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-10' : '#765CDE',
        'primary-20' : '#3F0071',
        'primary-30' : '#150050',
        'secondary-10' : '#EE5D80',
        'secondary-20' : '#FB2576',
        'base-30' : '#2B2F41',
        'base-40' : '#03001C',
      },
    },
  },
  plugins: [],
}
export default config
