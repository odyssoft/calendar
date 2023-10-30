import React from 'react'
import { TimePickerProps, TimeRangeValue } from './types'
import { Popover } from '../popover'
import { TextField } from '@mui/material'

export const TimePicker = ({
  defaultValue,
  disabled,
  disabledTime,
  hourStep,
  minuteStep,
  onChange,
  placeholder,
}: TimePickerProps) => {
  const [end, setEnd] = React.useState<string>()
  const [start, setStart] = React.useState<string>()

  const setDefaultValue = (value: TimeRangeValue) => {
    if (typeof value === 'string') return setStart(value)
    if (Array.isArray(value)) return setFromArray(value)
    const { end: e, start: s } = value
    setEnd(e)
    setStart(s)
  }

  const setFromArray = (value: string[]) => {
    if (value.length > 0) setStart(value[0])
    value.length > 1 && setEnd(value[1])
  }

  React.useEffect(() => {
    defaultValue && setDefaultValue(defaultValue)
  }, [defaultValue])

  return (
    <>
      <Popover content={<div />}>
        <TextField
          disabled={disabled}
          label='Start'
          type='text'
          value={start}
        />
      </Popover>
    </>
  )
}
