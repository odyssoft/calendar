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
  overflow: 'auto',
  width: '100%',
}))

export const Row = styled(Flex)({
  width: '100%',
  flexDirection: 'row',
})
