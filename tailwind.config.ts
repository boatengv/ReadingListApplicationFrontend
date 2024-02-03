import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'golden-brown': '#F2D9A1',
        'dark-brown': '#381E0F',
        'light-brown': '#ECAF6C',
        'black-rgba': 'rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '108': '28rem',
        '128': '32rem',
        '160': '900px'
      },
      width: {
        '108': '28rem',
        '128': '512px',
        '140':'552px',
        '120%':'120%',
        '150%':'150%',
        'xl':'2440px',
        '200':'200%'
      },
      spacing: {
        "6/10":"60%"
      }
    },
  },
  plugins: [],
}
export default config
