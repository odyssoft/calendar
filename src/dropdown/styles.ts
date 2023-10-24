import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const DropdownButton = styled(Button)({
  textTransform: 'unset',
  border: 'none',
  background: 'transparent',
  color: 'white',
  backdropFilter: 'unset',
  textShadow: 'unset',
  fontWeight: 'unset',
  padding: '0 !important',
  textAlign: 'left',
  margin: 0,
  '&:hover': {
    border: 'none',
    background: 'transparent',
  },
})
