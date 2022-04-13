import {  MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  fontFamily: 'Noto Sans, sans-serif',
  colorScheme: 'light',
  headings: { fontFamily: 'Noto Sans, sans-serif' },
  breakpoints: {
     xs: 576,
     sm: 768,
     md: 992,
     lg: 1200,
     xl: 1400   
  },
  colors: {
    primary : [
      '#1877f2',
      '#f0f2f5',
      '#ffffff',
      '#42b72a',
      '#f0f2f5',
      '#f6f2f5',
      '#f0fqf5',
      '#f0f9f5',
      '#f012f5',
      '#f092f5',
    ],
  },
  other: {
    appShellDefaultStyles: {
      maxWidth: '1800px',
     minHeight: '100vh',
      margin: '0px auto'
    },
  },
};
