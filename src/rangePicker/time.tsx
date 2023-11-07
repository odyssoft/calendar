import React from 'react'

import { TimePicker } from '../timepicker'
import { TimeType } from '../types'
import { TimeRangeProps } from './types'

export const TimeRangePicker = ({
  defaultValue,
  endProps,
  labels,
  name,
  onChange,
  startProps,
  timePickerProps,
}: TimeRangeProps) => {
  const [end, setEnd] = React.useState<TimeType>()
  const [start, setStart] = React.useState<TimeType>()

  const handleEndChange = (time: TimeType) => {
    setEnd(time)
    start && onChange?.({ end: time, start })
  }

  const handleStartChange = (time: TimeType) => {
    setStart(time)
    if (end) {
      time > end ? setEnd(undefined) : onChange?.({ end, start: time })
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
      <TimePicker
        defaultValue={start}
        label={labels?.start ?? 'Start'}
        name={`${name}-start`}
        onChange={handleStartChange}
        variant='standard'
        {...timePickerProps}
        {...startProps}
      />
      <TimePicker
        defaultValue={end}
        disabledTime={(time) => time <= (start ?? '0')}
        label={labels?.end ?? 'End'}
        name={`${name}-end`}
        onChange={handleEndChange}
        variant='standard'
        {...timePickerProps}
        {...endProps}
      />
    </>
  )
}
