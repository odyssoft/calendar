import { ButtonGroup, IconButton, styled } from '@mui/material'

import { Column, Flex, Row, Text } from '../styles'

const Button = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  flex: 1,
  width: 30,
  maxWidth: 30,
  height: 30,
  maxHeight: 30,
  minWidth: 'unset',
  minHeight: 'unset',
  borderRadius: 4,
  padding: 'unset',
  '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
}))

export const Container = styled(Flex)<{ week: boolean }>(({ week }) => ({
  borderRadius: 9,
  flexDirection: 'column',
  height: 245,
  minHeight: 245,
  overflow: 'hidden',
  width: 32 * (week ? 8 : 7),
  '& > div': { flex: 1 },
}))

export const Day = Object.assign(
  styled(Column)({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  {
    Button: styled(Button)<{
      index: number
      selected: boolean
    }>(({ index, selected, theme }) => ({
      position: 'relative',
      zIndex: selected ? 7 : 7 - index,
      '&:before': {
        content: '""',
        position: 'absolute',
        ...(!selected && { opacity: 0 }),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: theme.palette.primary.main,
        width: 25,
        height: 25,
        borderRadius: '50%',
        zIndex: -1,
        transition: 'opacity 0.25s ease-in-out',
      },
      '&:disabled': {
        background: 'unset',
        cursor: 'unset !important',
      },
      '&:not(:disabled):hover': {
        background: 'unset',
        '&:before': { opacity: 1 },
      },
    })),

    Text: styled(Text)<{ disabled: boolean; month: boolean }>(
      ({ disabled, month, theme }) => ({
        color: theme.palette.text.primary,
        fontSize: theme.fontSizes.xs,
        fontWeight: theme.fontWeights.semibold,
        opacity: !month || disabled ? 0.25 : 1,
      })
    ),
  }
)

export const DaysText = styled(Text)(({ theme }) => ({
  fontSize: theme.fontSizes.sm,
  fontWeight: theme.fontWeights.bold,
}))

export const Header = Object.assign(
  styled(Row)(({ theme }) => ({
    color: theme.palette.text.primary,
    height: '2em',
    maxHeight: 'calc(220px / 7)',
  })),
  {
    Button,

    Group: styled(ButtonGroup)({
      boxShadow: 'unset',
      flex: 1,
      maxWidth: '100%',
      width: '100%',
    }),

    Title: styled(Column)<{ controls: boolean }>(({ controls }) => ({
      alignItems: controls ? 'center' : 'flex-start',
      flex: 1,
      justifyContent: 'center',
    })),

    TitleButton: styled(IconButton)<{ controls: boolean }>(
      ({ controls, theme }) => ({
        backdropFilter: 'unset',
        border: 'unset !important',
        borderRadius: 4,
        boxShadow: 'unset',
        color: theme.palette.text.primary,
        fontSize: theme.fontSizes.xs,
        fontWeight: theme.fontWeights.bold,
        justifyContent: !controls ? 'left' : undefined,
        height: 'calc(220px / 7)',
        padding: controls ? 'unset' : '.5rem',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        width: controls ? 'calc(100% - 112px)' : '100%',
        '&:hover': { border: 'unset', background: 'rgba(255, 255, 255, 0.08)' },
      })
    ),
  }
)

export const Week = Object.assign(
  styled(Column)({ background: 'rgba(175, 175, 175, .25)' }),
  {
    Button,

    Text: styled(Text)(({ theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xs,
      fontWeight: theme.fontWeights.semibold,
      opacity: 0.25,
    })),
  }
)
