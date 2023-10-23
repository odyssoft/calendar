import { createTheme } from '@mui/material'

export const theme = createTheme({
  colors: {
    border: 'rgba(255, 255, 255, 0.15)',
  },
  filters: {
    sm: 'blur(16px) saturate(1.5)',
    md: 'blur(16px) saturate(2.5)',
    lg: 'blur(21px) saturate(3)',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  palette: {
    background: {
      default: '#29292E',
      paper: '#202024',
    },
    text: {
      primary: '#E1E1E6',
      secondary: '#A8A8B3',
      disabled: '#737380',
    },
  },
  textShadow: '0px 0px .25em black',
})
