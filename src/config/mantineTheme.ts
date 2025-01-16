import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from '@mantine/core';

 const themeOverride = createTheme({
  white: '#FFF0D1',
  black: '#132F1A',

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(51.2) },
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

