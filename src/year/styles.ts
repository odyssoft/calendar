import { styled } from '@mui/material'

import { Flex } from '../styles'

export const Year = styled(Flex)(({ theme }) => ({
  flex: 1,
  flexFlow: 'row wrap',
  gap: theme.space['2xl'],
  maxWidth: 1250,
  paddingTop: theme.space.md,
  paddingBottom: theme.space['2xl'],
  position: 'relative',
}))
