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
})
