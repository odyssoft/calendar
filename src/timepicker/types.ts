import { TextFieldProps } from '@mui/material'

import { TimeType } from '../types'

export interface TimePickerProps extends Omit<TextFieldProps, 'onChange'> {
  defaultValue?: TimeType
  disabled?: boolean
  disabledTime?: (now: moment.Moment) => {
    hours?: number[]
    minutes?: number[]
  }
  hourStep?: number
  minuteStep?: number
  placeholder?: string
  onChange?: (value?: TimeType) => void
}

export type TimeProps = {
  value?: TimeType
  onChange?: (value?: TimeType) => void
}
