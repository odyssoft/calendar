import { Popover, styled } from '@mui/material'

export const Base = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    padding: '.5rem',
  },
}))
