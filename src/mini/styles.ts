import {
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  styled,
} from '@mui/material'
import { Column, Flex, Row, Text } from '../styles'

export const Mini = Object.assign(
  styled(Flex)({
    borderRadius: 9,
    flexDirection: 'column',
    height: 245,
    minHeight: 245,
    overflow: 'hidden',
    width: 220,
    '& > div': { flex: 1 },
  }),
  {
    Button: styled(IconButton)<{
      between?: boolean
      isFirst?: boolean
      isLast?: boolean
      selected?: boolean
    }>(({ between, isFirst, isLast, selected, theme }) => ({
      color: theme.palette.text.primary,
      flex: 1,
      width: '100%',
      minWidth: 'unset',
      borderRadius: 4,
      padding: 'unset',
      position: 'relative',
      zIndex: 1,
      '&:hover': { background: 'rgba(255, 255, 255, 0.08)' },
      ...(selected && {
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: 'calc(50% - 1px)',
          transform: 'translate(-50%, -50%)',
          background: theme.palette.primary.main,
          width: 25,
          height: 25,
          borderRadius: '50%',
          zIndex: -1,
        },
      }),
      ...(between && {
        '&:before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: isFirst ? -10 : 0,
          transform: 'translateY(-50%)',
          width: `calc(100% + ${isFirst || isLast ? 10 : 0}px)`,
          height: 15,
          background: theme.palette.primary.main,
          opacity: 0.25,
          zIndex: -2,
        },
      }),
    })),

    Header: styled(Row)(({ theme }) => ({
      color: theme.palette.text.primary,
      height: '2em',
      maxHeight: 'calc(220px / 7)',
    })),

    HeaderGroup: styled(ButtonGroup)({
      boxShadow: 'unset',
      flex: 1,
      maxWidth: '100%',
      width: '100%',
    }),

    Text: styled(Text)(({ theme }) => ({
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.bold,
    })),

    Title: styled(Column)<{ controls?: boolean }>(({ controls }) => ({
      alignItems: controls ? 'center' : 'flex-start',
      flex: 1,
      justifyContent: 'center',
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
        width: controls ? 112 : '100%',
        '&:hover': { border: 'unset', background: 'rgba(255, 255, 255, 0.08)' },
      })
    ),

    Week: styled(Column)({
      background: 'rgba(175, 175, 175, .25)',
      // maxHeight: 'calc(220px / 7)',
      maxWidth: 'calc(220px / 7)',
    }),

    WeekText: styled(Text)<{ isMonth?: boolean }>(({ isMonth, theme }) => ({
      color: theme.palette.text.primary,
      fontSize: theme.fontSizes.sm,
      fontWeight: theme.fontWeights.semibold,
      opacity: isMonth ? 1 : 0.25,
    })),
  }
)
