import { IconButton, styled } from '@mui/material'
import { Column, Flex, Text } from '../styles'
import { CalendarView } from '../types'

export const Body = Object.assign(
  styled(Flex)({
    alignItems: 'baseline',
    flex: 1,
    flexFlow: 'column nowrap',
    overflowX: 'auto',
  }),
  {
    Container: styled(Flex)({
      flex: 1,
      flexFlow: 'row nowrap',
      overflowY: 'auto',
      minWidth: '100%',
      zIndex: 1,
    }),
    Content: styled(Flex)<{ height?: number | string }>(
      ({ height = 1008 }) => ({
        alignItems: 'center',
        flex: 1,
        flexFlow: 'column nowrap',
        height,
        minHeight: '100%',
        overflowAnchor: 'none',
        overscrollBehavior: 'contain auto',
      })
    ),
  }
)

export const DayButton = styled(IconButton)<{
  isDay?: boolean
  isMonth?: boolean
}>(({ isDay, isMonth, theme }) => ({
  ...(isDay && {
    background: '#F31260',
    '&:hover': { background: '#F31260 !important' },
  }),
  border: 'none !important',
  borderRadius: '4px',
  color: theme.palette.text.primary,
  fontSize: '.9rem',
  fontWeight: theme.fontWeights.semibold,
  height: 25,
  marginLeft: '.1em',
  marginRight: '.1em',
  maxWidth: 25,
  minWidth: 25,
  padding: '0 !important',
  opacity: isMonth ? 1 : 0.5,
  width: 25,
}))

export const Header = Object.assign(
  styled(Flex)(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.border}`,
    boxShadow: theme.shadows[6],
    flexFlow: 'column',
    maxHeight: '50%',
    minWidth: '100%',
  })),
  {
    Column: styled(Column)<{ view: CalendarView }>(({ view }) => ({
      alignItems: view === 'month' ? 'flex-end' : undefined,
      flex: 1,
      minWidth: 150,
      paddingBottom: '.125rem',
      paddingTop: '1rem',
    })),
    Day: styled(Text)<{ view: CalendarView }>(({ theme, view }) => ({
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.bold,
      textAlign: view !== 'month' ? 'center' : undefined,
      width: ['day', 'week'].includes(view) ? 150 : undefined,
      'div:first-child': { fontSize: theme.fontSizes.xs },
      'div:last-child > button': {
        color: theme.palette.text.primary,
        fontSize: theme.fontSizes['xl'],
        fontWeight: theme.fontWeights.semibold,
      },
    })),
    Space: styled(Column)(({ theme }) => ({
      borderRight: `1px solid ${theme.colors.border}`,
      maxWidth: '3.5rem',
      width: '3.5rem',
    })),
  }
)
