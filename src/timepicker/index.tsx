import { TextField } from '@mui/material'
import React from 'react'

import { Popover } from '../popover'
import { TimePickerProps } from './types'
import { Time } from './time'
import { AccessTime } from '@mui/icons-material'
import { TimeType } from '../types'

export const TimePicker = ({
  defaultValue = '00:00',
  disabledTime,
  hourStep,
  minuteStep = 5,
  onChange,
  ...rest
}: TimePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<TimeType>('')

  const handleChange = (time: TimeType = '') => {
    setOpen(false)
    setValue(time)
    onChange?.(time)
  }

  const handleClick = () => setOpen(true)

  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    setValue(defaultValue ?? '')
  }, [defaultValue])

  return (
    <>
      <Popover
        content={
          <Time
            disabledTime={disabledTime}
            onChange={handleChange}
            value={value}
          />
        }
        open={open}
        onClick={handleClick}
        onClose={handleClose}
      >
        <TextField
          InputProps={{
            startAdornment: <AccessTime sx={{ mr: 0.5 }} />,
            ...rest.InputProps,
          }}
          type='text'
          value={value}
          {...rest}
        />
      </Popover>
    </>
  )
}
