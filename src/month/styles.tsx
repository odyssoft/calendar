import { IconButton, styled } from '@mui/material'
import React from 'react'

import { Dropdown } from '../dropdown'
import { getClipPath, getWidth } from '../helper'
import { Column, Flex, Row, Text } from '../styles'

export const Month = Object.assign(
  styled(Flex)({ flex: 1, flexDirection: 'column', width: '100%' }),
  {
    Button: styled(({ isDay, isMonth, ...rest }: any) => (
      <IconButton {...rest} />
    ))<{ isDay?: boolean; isMonth?: boolean }>(({ isDay, isMonth, theme }) => ({
      ...(isDay && {
        background: '#F31260',
        '&:hover': { background: '#F31260' },
      }),
      border: 'none !important',
      borderRadius: '4px',
      color: theme.palette.text.primary,
      fontSize: '.85rem',
      fontWeight: theme.fontWeights.semibold,
      height: 25,
      marginLeft: '.1em',
      marginRight: '.1em',
      maxWidth: 25,
      minWidth: 25,
      padding: '0 !important',
      opacity: isMonth ? 1 : 0.5,
      width: 25,
    })),

    Column: styled(Column)(({ theme }) => ({
      justifyContent: 'flex-start',
      minHeight: 100,
      minWidth: 150,
      position: 'relative',
      '&::after': {
        background: theme.colors.border,
        content: '""',
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        width: 1,
      },
      '&:last-child': { borderRight: `1px solid ${theme.colors.border}` },
    })),

    Date: styled(({ isDay, isMonth, ...rest }: any) => <Text {...rest} />)<{
      isDay?: boolean
      isMonth?: boolean
    }>(({ isDay, isMonth, theme }) => ({
      fontWeight: theme.fontWeights.bold,
      opacity: isMonth ? 1 : 0.5,
      ...(isDay && { marginLeft: '.25rem', marginRight: '.25rem' }),
    })),

    Day: styled(Column)({ alignItems: 'flex-end' }),

    Week: styled(Flex)(({ theme }) => ({
      flex: 1,
      minWidth: '100%',
      position: 'relative',
      '&::after': {
        background: theme.colors.border,
        bottom: 0,
        content: '""',
        height: 1,
        left: 0,
        position: 'absolute',
        width: '100%',
      },
    })),

    WeekColumn: styled(Column)({ alignItems: 'flex-start' }),
  }
)

export const MonthEvents = Object.assign(
  styled(Flex)({ flex: 1, flexDirection: 'column', width: '100%' }),
  {
    Daily: styled(
      ({
        background,
        editable,
        isEnd,
        isHourly,
        isStart,
        span,
        ...rest
      }: any) => <Flex {...rest} />
    )<{
      background: string
      editable: boolean
      isEnd?: boolean
      isHourly?: boolean
      isStart?: boolean
      span: number
    }>(({ background, editable, isEnd, isHourly, isStart, span, theme }) => ({
      background: background,
      borderRadius: 4,
      boxShadow: theme.boxShadows.xs,
      clipPath: getClipPath(!!isStart, !!isEnd),
      fontSize: theme.fontSizes.xs,
      lineHeight: 'normal',
      marginLeft: 4,
      marginTop: 3,
      minWidth: 'calc(100% - 8px)',
      padding: `0 ${theme.space.xs}`,
      paddingLeft: theme.space[5],
      width: getWidth(span, isHourly),
      zIndex: 1,
      ...(editable && {
        cursor: 'pointer',
        '&:hover': { opacity: 0.75 },
      }),
    })),

    Empty: styled(Row)({ width: '100%', height: 18 }),
    Hourly: styled(({ background, editable, ...rest }: any) => (
      <Flex {...rest} />
    ))<{ background: string; editable: boolean }>(
      ({ background, editable, theme }) => ({
        fontSize: theme.fontSizes.xs,
        lineHeight: 'normal',
        marginLeft: '.5rem',
        marginTop: '.25rem',
        paddingLeft: '1rem',
        position: 'relative',
        '&::before': {
          background,
          borderRadius: '50%',
          boxShadow: theme.boxShadows.xs,
          content: '""',
          height: 10,
          left: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 10,
        },
        ...(editable && {
          cursor: 'pointer',
          '&:hover': { opacity: 0.75 },
        }),
      })
    ),

    Inner: styled(Flex)({ flex: 1, flexDirection: 'column' }),
  }
)

export const MoreDropdown = styled(Dropdown)({
  width: 'calc(100% - 1px)',
  borderRadius: '6px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.08)',
  },
})
