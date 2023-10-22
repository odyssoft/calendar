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
  }
}
