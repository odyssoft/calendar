import { Checkbox, FormControlLabel, styled } from '@mui/material'
import { Flex } from '../styles'

export const Sidebar = Object.assign(
  styled(Flex)(({ theme }) => ({
    backdropFilter: theme.filters.sm,
    flexDirection: 'column',
    padding: '.75rem .5rem',
    borderRight: `1px solid ${theme.colors.border}`,
    maxHeight: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  })),
  {
    Checkbox: styled(Checkbox)<{ color: string }>(({ color, theme }) => ({
      color: theme.palette.text.primary,
      padding: '.5rem',
      '& > svg': { color },
    })),

    ControlLabel: styled(FormControlLabel)({
      '&:hover svg': {
        opacity: 0.75,
      },
    }),
  }
)
