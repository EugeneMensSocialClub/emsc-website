import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from '@mantine/core';
import '../assets/stylesheets/katibeh.css'
import '../assets/stylesheets/prozaLibre.css'

 const themeOverride = createTheme({
  breakpoints: {
    xs: '30em',  // 480px
    sm: '48em',  // 768px
    md: '64em',  // 1024px
    lg: '74em',  // 1184px
    xl: '90em',  // 1440px
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  white: '#FFF0D1',
  black: '#132F1A',
  colors: {
    green: [
      '#1B3624',
      '#22452D',  // * Brand [1]
      '#274F33',
      '#2D5D3C',  // * Brand [3]
      '#336B44',
      '#39794C',
      '#408754',
      '#47955C',
      '#4EA364',
      '#55B16C',
    ],
    orange: [
      '#E6732F',
      '#EE7E2F',
      '#F68930',  // * Brand [2]
      '#F79430',
      '#F89F31',
      '#FCB031',  // * Brand [6]
      '#FDBB32',
      '#FEC633',
      '#FFD134',
      '#FFDC35',
    ]
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontFamily: 'ProzaLibre-Regular, sans-serif',

  headings: {
    fontFamily: 'Katibeh, sans-serif',
    sizes: {
      h1: { fontSize: rem(51.2) },
      h2: { fontSize: rem(39.4), lineHeight: '1'},
      h3: { fontSize: rem(30.3) },
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

