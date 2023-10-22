import { AppBar, Button, IconButton, styled } from '@mui/material'
import { Flex } from '../styles'

export const Header = Object.assign(styled(Flex)({ flex: 1 }), {
  Button: styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    border: `2px solid ${theme.colors.border}`,
    // height: 32,
    '&:hover': {
      border: `2px solid ${theme.colors.border}`,
      borderRightColor: theme.colors.border,
    },
    '&.MuiButtonGroup-middleButton:hover, .MuiButtonGroup-firstButton:hover': {
      borderLeftColor: theme.colors.border,
    },
  })),
  Content: styled(Flex)({ flex: 1 }),
  IconButton: styled(IconButton)(({ theme }) => ({
    borderRadius: 12,
    color: theme.palette.text.primary,
  })),
  Nav: styled(AppBar)(({ theme }) => ({
    alignItems: 'center',
    backdropFilter: theme.filters.sm,
    backgroundColor: 'unset',
    borderBottom: `1px solid ${theme.colors.border}`,
    flexDirection: 'row',
    gap: '.5rem',
    justifyContent: 'space-between',
    padding: '.5rem .25rem',
    position: 'relative',
    width: '100%',
  })),
})
