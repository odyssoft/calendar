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

export const Day = Object.assign(
  styled(Column)<{
    between: boolean
    first: boolean
    last: boolean
  }>(({ between, first, last, theme }) => ({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    ...(between && {
      '&:before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: first ? -30 : 0,
        transform: 'translateY(-50%)',
        width: `calc(100% + ${first || last ? 30 : 0}px)`,
        ...(first && {
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }),
        ...(last && {
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
        }),
        height: 27,
        background: theme.palette.primary.main,
        opacity: 0.25,
        zIndex: -2,
      },
    }),
  })),
  {
    Button: styled(Button)<{
      index: number
      selected?: boolean
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
      '&:hover': {
        background: 'unset',
        '&:before': { opacity: 1 },
      },
    })),

    Text: styled(Text)<{ month?: boolean }>(({ month, theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xs,
      fontWeight: theme.fontWeights.semibold,
      opacity: month ? 1 : 0.25,
    })),
  }
)

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

    Title: styled(Column)<{ controls?: boolean }>(({ controls }) => ({
      alignItems: controls ? 'center' : 'flex-start',
      flex: 1,
      justifyContent: 'center',
    })),
  }
)

export const Mini = Object.assign(
  styled(Flex)<{ week: boolean }>(({ week }) => ({
    borderRadius: 9,
    flexDirection: 'column',
    height: 245,
    minHeight: 245,
    overflow: 'hidden',
    width: 32 * (week ? 8 : 7),
    '& > div': { flex: 1 },
  })),
  {
    Button: styled(IconButton)<{
      day?: boolean
      selected?: boolean
    }>(({ day, selected, theme }) => ({
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
      position: 'relative',
      zIndex: 1,
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
      '&:hover': day
        ? { '&:before': { opacity: 1 } }
        : { background: 'rgba(255, 255, 255, 0.08)' },
    })),

    Column: styled(Column)<{
      between: boolean
      first: boolean
      last: boolean
    }>(({ between, first, last, theme }) => ({
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      ...(between && {
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: first ? -10 : 0,
          transform: 'translateY(-50%)',
          width: `calc(100% + ${first || last ? 10 : 0}px)`,
          height: 15,
          background: theme.palette.primary.main,
          opacity: 0.25,
          zIndex: -2,
        },
      }),
    })),

    Text: styled(Text)(({ theme }) => ({
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.bold,
    })),

    TitleButton: styled(IconButton)<{ controls?: boolean }>(
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
        padding: controls ? 5 : undefined,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        width: controls ? 'calc(100% - 112px)' : '100%',
        '&:hover': { border: 'unset', background: 'rgba(255, 255, 255, 0.08)' },
      })
    ),

    WeekText: styled(Text)<{ isMonth?: boolean }>(({ isMonth, theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.xs,
      fontWeight: theme.fontWeights.semibold,
      opacity: isMonth ? 1 : 0.25,
    })),
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
