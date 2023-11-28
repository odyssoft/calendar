import { TextFieldProps } from '@mui/material'
import moment from 'moment'

import { DateType } from '../types'

export interface DatePickerProps extends Omit<TextFieldProps, 'onChange'> {
  defaultValue?: DateType
  disabledDates?: (date: moment.Moment) => boolean
  onChange?: (date: DateType) => void
}
