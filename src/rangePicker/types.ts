import { DatePickerProps } from '../datepicker/types'
import { TimePickerProps } from '../timepicker/types'
import { DateType, TimeType } from '../types'

export type DateRangeProps = {
  datePickerProps?: DatePickerProps
  defaultValue?: RangePickerValue<DateType>
  endProps?: DatePickerProps
  labels?: RangePickerLabel
  name?: string
  onChange?: (value: RangePickerValue<DateType>) => void
  startProps?: DatePickerProps
}

type RangePickerKeys = 'start' | 'end'

type RangePickerLabel = {
  [key in RangePickerKeys]: string
}

export type RangePickerValue<T> = {
  [key in RangePickerKeys]: T
}

export type TimeRangeProps = {
  timePickerProps?: TimePickerProps
  defaultValue?: RangePickerValue<TimeType>
  endProps?: TimePickerProps
  labels?: RangePickerLabel
  name?: string
  onChange?: (value: RangePickerValue<TimeType>) => void
  startProps?: TimePickerProps
}
