import {
  Theme as OldTheme,
  ThemeOptions as OldOptions,
} from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme extends OldTheme {
    filters: {
      sm: string
      md: string
      lg: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends OldOptions {
    filters: {
      sm: string
      md: string
      lg: string
    }
  }
}
