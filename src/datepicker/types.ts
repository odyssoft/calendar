import { TextFieldProps } from '@mui/material'

import { DateType } from '../types'

export interface DatePickerProps extends Omit<TextFieldProps, 'onChange'> {
  defaultValue?: DateType
  disabledDates?: (date: moment.Moment) => boolean
  onChange?: (date: DateType) => void
}
