import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from '@mantine/core';
import '../assets/stylesheets/katibeh.css'
import '../assets/stylesheets/prozaLibre.css'

 const themeOverride = createTheme({
  white: '#FFF0D1',
  black: '#132F1A',

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  fontFamily: 'ProzaLibre-Regular, sans-serif',

  headings: {
    fontFamily: 'Katibeh, sans-serif',
    sizes: {
      h1: { fontSize: rem(51.2) },
      h2: { fontSize: rem(39.4) },
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

