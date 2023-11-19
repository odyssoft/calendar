import { Checkbox, FormControlLabel, styled } from '@mui/material'

import { Flex } from '../styles'

export const Sidebar = Object.assign(
  styled(Flex)({ flex: 1, maxWidth: '100%', maxHeight: '100%' }),
  {
    Checkbox: styled(Checkbox)<{ background: string }>(
      ({ background, theme }) => ({
        color: background,
        padding: '.5rem',
        '& .MuiFormControlLabel-label': {
          color: background,
        },
        '& > span': { color: `${background} !important` },
        '& > svg': { color: background },
      })
    ),

    Content: styled(Flex)({
      flex: 1,
      maxWidth: '100%',
      maxHeight: '100%',
    }),

    ControlLabel: styled(FormControlLabel)<{ background?: string }>(
      ({ background }) => ({
        color: background,
        '& .MuiFormControlLabel-label': {
          color: 'inherit',
        },
        '&:hover svg': {
          opacity: 0.75,
        },
      })
    ),

    Nav: styled(({ visible, ...rest }: any) => <Flex {...rest} />)<{
      visible: boolean
    }>(({ theme, visible }) => ({
      backdropFilter: theme.filters.sm,
      borderRight: visible ? `1px solid ${theme.colors.border}` : 'unset',
      flexDirection: 'column',
      padding: `.75rem ${visible ? '.5rem' : 0}`,
      maxHeight: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      transition: 'all 0.25s ease-in-out',
      width: visible ? 237 : 0,
    })),
  }
)
