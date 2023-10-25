import { styled } from '@mui/material'

import { color } from '../colors'
import { Column, Flex } from '../styles'

export const Week = Object.assign(
  styled(Flex)(({ theme }) => ({
    flex: 1,
    height: 42,
    maxHeight: 42,
    minHeight: 42,
    minWidth: '100%',
    width: 1106,
    overflow: 'visible',
    position: 'relative',
    '&::after, &::before': {
      background: theme.colors.border,
      bottom: 0,
      content: '""',
      height: 1,
      left: '3rem',
      position: 'absolute',
      width: 'calc(100% - 3rem)',
    },
    '&::before': {
      bottom: 'auto',
      opacity: 0.3,
      top: '50%',
      transform: 'translateY(-50%)',
    },
  })),
  {
    Column: styled(Column)(({ theme }) => ({
      alignItems: 'unset',
      justifyContent: 'unset',
      maxHeight: 42,
      minWidth: 150,
      overflow: 'visible',
      padding: '0 .25rem',
      position: 'relative',
      '&::after': {
        background: theme.colors.border,
        content: '""',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        width: 1,
        zIndex: 1,
      },
    })),
    Event: styled(Flex)<{ background: string; span: number; start: string }>(
      ({ background, span, start, theme }) => ({
        borderRadius: 3,
        fontSize: theme.fontSizes.xs,
        height: `${100 * span}%`,
        marginTop: `${(Number(start.split(':')[1]) / 60) * 42}px`,
        minHeight: `${100 * span}%`,
        position: 'relative',
        overflow: 'hidden',
        paddingLeft: '.65rem',
        width: '100%',
        '&:after': {
          background,
          content: '""',
          position: 'absolute',
          height: '100%',
          left: 0,
          top: 0,
          width: 5,
          zIndex: 1,
        },
        '&:before': {
          background: color(background),
          content: '""',
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
      })
    ),
    Space: styled(Column)<{ time?: string }>(({ theme, time }) => ({
      borderRight: `1px solid ${theme.colors.border}`,
      maxWidth: '3.5rem',
      position: 'relative',
      width: '3.5rem',
      '&::after': {
        content: `"${time ?? ''}"`,
        position: 'absolute',
        top: 0,
        right: '.75rem',
        transform: 'translateY(-50%)',
        fontSize: '.7rem',
        fontWeight: theme.fontWeights.semibold,
        opacity: 0.5,
      },
    })),
  }
)
