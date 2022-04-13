/* Change base values */

const textbase = 1.33 /* base of typography */
const textscale = 1.33 /* scale of typography */

const radiusbase = 0.25 /* base of border-radius */

module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './stories/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      display: ['Open Sans',],
      body: ['Open Sans',],
    },
    fontSize: {
      h1: [`${textbase * (textscale ** 7)}rem`,{lineHeight: `${textbase * (textscale ** 7) * 1.2}rem`,},],
      h2: [`${textbase * (textscale ** 6)}rem`,{lineHeight: `${textbase * (textscale ** 6) * 1.2}rem`,},],
      h3: [`${textbase * (textscale ** 5)}rem`,{lineHeight: `${textbase * (textscale ** 5) * 1.2}rem`,},],
      h4: [`${textbase * (textscale ** 4)}rem`,{lineHeight: `${textbase * (textscale ** 4) * 1.3}rem`,},],
      h5: [`${textbase * (textscale ** 3)}rem`,{lineHeight: `${textbase * (textscale ** 3) * 1.3}rem`,},],
      h6: [`${textbase * (textscale ** 2)}rem`,{lineHeight: `${textbase * (textscale ** 2) * 1.3}rem`,},],
      body: [`${textbase}rem`,{lineHeight: `${textbase * 1.5}rem`,},],
      body2: [`${textbase / textscale}rem`,{lineHeight: `${textbase / textscale * 1.5}rem`,},],
      caption: [`${textbase / (textscale ** 2)}rem`, {lineHeight: `${textbase / (textscale ** 2) * 1.5}rem`,},],
      button: [`${textbase / textscale}rem`,{lineHeight: `${textbase}rem`,},],
    },
    borderRadius: {
      'none': '0',
      DEFAULT: '0.25rem',
      '2': `${radiusbase * 2}rem`,
      '3': `${radiusbase * 3}rem`,
      '4': `${radiusbase * 4}rem`,
      '8': `${radiusbase * 8}rem`,
      '12': `${radiusbase * 12}rem`,
      '16': `${radiusbase * 16}rem`,
    },
    extend: {
      zIndex: {
        'n': '-100',
      },
      colors: {
        primary: {
          50: '#e6e6ff',
          100: '#ccccff',
          200: '#9999ff',
          300: '#6666ff',
          400: '#3333ff',
          500: '#0000ff',
          600: '#0000cc',
          700: '#000099',
          800: '#000066',
          900: '#000033',
        },
        secondary: {
        },
      },
      height: {
        '0.5em': '0.5em',
        '1em': '1em',
        '1.25em': '1.25em',
        '1.5em': '1.5em',
        '2em': '2em',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
      },
      minHeight: {
        'image': '240px',
      },
      width: {
        '0.5em': '0.5em',
        '1em': '1em',
        '1.25em': '1.25em',
        '1.5em': '1.5em',
        '2em': '2em',
      },
      margin: {
        '0.5em': '0.5em',
        '1em': '1em',
        '1.25em': '1.25em',
        '1.5em': '1.5em',
        '2em': '2em',
      },
    },
  },
  plugins: [],
}
