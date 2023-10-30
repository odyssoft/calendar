import { PopoverProps as Base } from '@mui/material'

export interface PopoverProps extends Omit<Omit<Base, 'content'>, 'open'> {
  content: React.ReactNode
  open?: boolean
}
