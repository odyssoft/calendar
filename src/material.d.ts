import {
  Theme as OldTheme,
  ThemeOptions as OldOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme extends OldTheme {
    boxShadows: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    colors: {
      border: string
    }
    filters: {
      sm: string
      md: string
      lg: string
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
      '8xl': string
      '9xl': string
    }
    fontWeights: {
      hairline: number
      thin: number
      light: number
      normal: number
      medium: number
      semibold: number
      bold: number
      extrabold: number
      black: number
    }
    space: {
      0: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
    }
    textShadow: string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends OldOptions {
    boxShadows: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    colors: {
      border: string
    }
    filters: {
      sm: string
      md: string
      lg: string
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
      '8xl': string
      '9xl': string
    }
    fontWeights: {
      hairline: number
      thin: number
      light: number
      normal: number
      medium: number
      semibold: number
      bold: number
      extrabold: number
      black: number
    }
    space: {
      0: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
    }
    textShadow: string
  }
}
