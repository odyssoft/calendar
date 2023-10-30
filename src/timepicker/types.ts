export interface TimePickerProps {
  // allowClear?: boolean
  // autoFocus?: boolean
  // className?: string
  defaultValue?: TimeRangeValue
  disabled?: boolean
  disabledTime?: (now: moment.Moment) => {
    hours?: number[]
    minutes?: number[]
  }
  hourStep?: number
  minuteStep?: number
  // open?: boolean
  placeholder?: string
  onChange?: (value: string) => void
}

export type TimeRangeValue =
  | string
  | string[]
  | {
      start: string
      end: string
    }
