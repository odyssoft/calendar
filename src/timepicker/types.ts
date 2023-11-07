import { TextFieldProps } from '@mui/material'

import { TimeType } from '../types'

export interface TimePickerProps extends Omit<TextFieldProps, 'onChange'> {
  defaultValue?: TimeType
  disabled?: boolean
  disabledTime?: (time: string) => boolean
  hourStep?: number
  minuteStep?: number
  placeholder?: string
  onChange?: (value: TimeType) => void
}

export type TimeProps = {
  disabledTime?: (time: string) => boolean
  onChange?: (value: TimeType) => void
  value?: TimeType
}
