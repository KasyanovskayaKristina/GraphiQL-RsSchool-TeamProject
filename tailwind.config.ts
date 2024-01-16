import type { Config } from 'tailwindcss';

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
    },
    keyframes: {
      appearFromAbove: {
        from: {
          transform: 'translateY(-110%)',
        },
        to: {
          transform: 'translateY(0)',
        },
      },
      fadeInFromAbove: {
        from: {
          transform: 'translateY(-110%)',
          opacity: '0%',
        },
        to: {
          transform: 'translateY(0)',
          opacity: '100%',
        },
      },
      spin: {
        from: {
          transform: 'rotate(0deg)',
        },
        to: {
          transform: 'rotate(360deg)',
        },
      },
    },
    screens: {
      mobile: { min: '200px', max: '499px' },
      tablet: { min: '500px', max: '849px' },
      laptop: { min: '850px', max: '1249px' },
      desctop: { min: '1250px', max: '3000px' },
    },
  },
  plugins: [],
};
export default config;
