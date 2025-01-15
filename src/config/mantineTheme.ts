import {
  createTheme,
  DEFAULT_THEME,
  mergeMantineTheme,
  rem,
} from '@mantine/core';

 const themeOverride = createTheme({
  colors: {
    // Add your color
    'white': [
      '#FFF8EB',
      '#FFF4E2',
      '#FFF1D9',
      '#FFF0D5',
      '#FFF0D1',
      '#FEEAC8',
      '#FEE4BF',
      '#FEDFB6',
      '#FDD9AD',
      '#FDD3A4',
    ]

  },

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

