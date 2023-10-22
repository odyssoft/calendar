import { CssBaseline } from '@mui/material'
import { ThemeProvider as Theme } from '@mui/material/styles'
import React from 'react'

import { theme } from './theme'

export const ThemeProvider = ({ children }: React.PropsWithChildren) => (
  <Theme theme={theme}>
    <CssBaseline />
    {children}
  </Theme>
)
