import {
  Theme as OldTheme,
  ThemeOptions as OldOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme extends OldTheme {
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
    textShadow: string
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends OldOptions {
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
    textShadow: string
  }
}
