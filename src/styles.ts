import { styled } from '@mui/material'
import { FlexProps } from './types'

export const Box = styled('div')({ boxSizing: 'border-box' })

export const Flex = styled(Box)<FlexProps>(
  ({ align, direction, justify, wrap }) => ({
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: direction ?? 'row',
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
  })
)

export const CalendarContainer = styled(Box)(({ theme }) => ({
  backdropFilter: theme.filters.sm,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  maxHeight: '100vh',
  maxWidth: '100vw',
  overflow: 'hidden',
  width: '100%',
}))

export const Row = styled(Flex)({
  width: '100%',
  flexDirection: 'row',
})

export const Column = styled(Flex)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const Text = styled('span')(({ theme }) => ({
  textShadow: theme.textShadow,
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
}))
