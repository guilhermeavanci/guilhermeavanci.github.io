/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

const skillButtons = {
  '.btn-skill-nextjs': {
    'background-color': '#000',
    'border-color': '#000',
    color: '#FFF'
  },
  '.btn-skill-nextjs:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#000'
  },
  '.btn-skill-reactjs': {
    'background-color': '#149ECA',
    'border-color': '#149ECA',
    color: '#FFF'
  },
  '.btn-skill-reactjs:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#149ECA'
  },
  '.btn-skill-typescript': {
    'background-color': '#3178c6',
    'border-color': '#3178c6',
    color: '#FFF'
  },
  '.btn-skill-typescript:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#3178c6'
  },
  '.btn-skill-html': {
    'background-color': '#f14a29',
    'border-color': '#f14a29',
    color: '#FFF'
  },
  '.btn-skill-html:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#f14a29'
  },
  '.btn-skill-css': {
    'background-color': '#264de4',
    'border-color': '#264de4',
    color: '#FFF'
  },
  '.btn-skill-css:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#264de4'
  },
  '.btn-skill-rest': {
    'background-color': '#009CD5',
    'border-color': '#009CD5',
    color: '#FFF'
  },
  '.btn-skill-rest:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#009CD5'
  },
  '.btn-skill-redux': {
    'background-color': '#764abc',
    'border-color': '#764abc',
    color: '#FFF'
  },
  '.btn-skill-redux:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#764abc'
  },
  '.btn-skill-graphql': {
    'background-color': '#d64292',
    'border-color': '#d64292',
    color: '#FFF'
  },
  '.btn-skill-graphql:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#d64292'
  },
  '.btn-skill-flutter': {
    'background-color': '#0468d7',
    'border-color': '#0468d7',
    color: '#FFF'
  },
  '.btn-skill-flutter:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#0468d7'
  },
  '.btn-skill-dart': {
    'background-color': '#1967d2',
    'border-color': '#1967d2',
    color: '#FFF'
  },
  '.btn-skill-dart:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#1967d2'
  },
  '.btn-skill-javascript': {
    'background-color': '#F7DF1E',
    'border-color': '#F7DF1E',
    color: '#000'
  },
  '.btn-skill-javascript:hover': {
    'background-color': '#000',
    'border-color': '#000',
    color: '#F7DF1E'
  },
  '.btn-skill-sass': {
    'background-color': '#BF4080',
    'border-color': '#BF4080',
    color: '#FFF'
  },
  '.btn-skill-sass:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#BF4080'
  },
  '.btn-skill-java': {
    'background-color': '#EB2025',
    'border-color': '#EB2025',
    color: '#FFF'
  },
  '.btn-skill-java:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#EB2025'
  },
  '.btn-skill-objective-c': {
    'background-color': '#808080',
    'border-color': '#808080',
    color: '#FFF'
  },
  '.btn-skill-objective-c:hover': {
    'background-color': '#FFF',
    'border-color': '#FFF',
    color: '#808080'
  },
  '.btn-skill-ejs': {
    'background-color': '#b4ca65',
    'border-color': '#b4ca65',
    color: '#a91e50'
  },
  '.btn-skill-ejs:hover': {
    'background-color': '#a91e50',
    'border-color': '#a91e50',
    color: '#b4ca65'
  }
}

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [typography, daisyui],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        emerald: {
          ...themes.emerald,
          ...skillButtons
        }
      },
      {
        forest: {
          ...themes.forest,
          ...skillButtons
        }
      }
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'forest', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root' // The element that receives theme color CSS variables
  }
}
