import React from 'react'
import { TimePickerProps, TimeRangeValue } from './types'
import { Popover } from '../popover'
import { Menu, MenuItem, Select, TextField } from '@mui/material'
import { Flex } from '../styles'

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
      <Popover
        content={
          <Flex>
            <Menu open={true}>
              {Array.from({ length: 24 }, (_, i) => i).map((hour) => (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              ))}
            </Menu>
          </Flex>
        }
      >
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
