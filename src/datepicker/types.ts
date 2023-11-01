import { TextFieldProps } from '@mui/material'

import { DateType } from '../types'

export interface DatePickerProps extends Omit<TextFieldProps, 'onChange'> {
  defaultValue?: DateType
  onChange?: (date?: DateType) => void
}
