import React from 'react'

import { DatePicker } from '../datepicker'
import { DateType } from '../types'
import { DateRangeProps } from './types'

export const DateRangePicker = ({
  datePickerProps,
  defaultValue,
  endProps,
  labels,
  name,
  onChange,
  startProps,
}: DateRangeProps) => {
  const [end, setEnd] = React.useState<DateType>()
  const [start, setStart] = React.useState<DateType>()

  const handleEndChange = (date: DateType) => {
    setEnd(date)
    start && onChange?.({ end: date, start })
  }

  const handleStartChange = (date: DateType) => {
    setStart(date)
    if (end) {
      date > end ? setEnd(undefined) : onChange?.({ end, start: date })
    }
  }

  React.useEffect(() => {
    if (defaultValue) {
      setEnd(defaultValue?.end)
      setStart(defaultValue?.start)
    }
  }, [defaultValue])

  return (
    <>
      <DatePicker
        defaultValue={start}
        label={labels?.start ?? 'Start Date'}
        name={`${name}-start`}
        onChange={handleStartChange}
        variant='standard'
        {...datePickerProps}
        {...startProps}
      />
      <DatePicker
        defaultValue={end}
        disabledDates={(day) => day.format('DD-MM-YYYY') < (start ?? '0')}
        label={labels?.end ?? 'End Date'}
        name={`${name}-end`}
        onChange={handleEndChange}
        variant='standard'
        {...datePickerProps}
        {...endProps}
      />
    </>
  )
}
