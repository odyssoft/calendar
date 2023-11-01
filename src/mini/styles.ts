import { styled } from '@mui/material'

import { Flex } from '../styles'

export const Container = styled(Flex)<{ week: boolean }>(
  ({ week }) => ({
    borderRadius: 9,
    flexDirection: 'column',
    height: 245,
    minHeight: 245,
    overflow: 'hidden',
    width: 32 * (week ? 8 : 7),
    '& > div': { flex: 1 },
  }),
  {}
)
