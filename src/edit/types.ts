import { TextFieldProps } from '@mui/material'
import { CalendarEvent } from '../types'

export type EditContext = {
  disabled: boolean
  event?: CalendarEvent
  handleClose: () => void
  handleSave: () => void
  setEvent: (event?: CalendarEvent) => void
}

export type InputProps = Omit<TextFieldProps, 'onChange'> & {
  onChange: (value: string) => void
}
