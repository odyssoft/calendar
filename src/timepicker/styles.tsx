import { Button, Divider, List, MenuItem, styled } from '@mui/material'
import React from 'react'

import { Column } from '../styles'

export const Picker = Object.assign(styled(Column)({}), {
  Button: styled(Button)({
    fontSize: 15,
    flex: 1,
    padding: '.125rem',
    lineHeight: 1.5,
  }),

  Column: styled(Column)({ maxHeight: 148 }),

  Divider: styled(Divider)(({ theme }) => ({
    backgroundColor: theme.colors.border,
    flex: 1,
    marginBottom: 10,
  })),

  Item: styled(({ active, ...rest }: any) => <MenuItem {...rest} />)<{
    active: boolean
  }>(({ active, theme }) => ({
    borderRadius: 4,
    boxShadow: theme.boxShadows.sm,
    padding: '.125rem .5rem',
    scrollSnapAlign: 'start',
    '&:hover': { background: 'rgba(100, 100, 100, .25)' },
    ...(active && { background: `${theme.palette.primary.main} !important` }),
  })),

  List: styled(List)({
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingRight: '.5rem',
    scrollSnapType: 'y proximity',
    // scrollPaddingTop: '.5rem',
  }),
})
