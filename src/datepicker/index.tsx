import { CalendarMonthRounded } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'

import { MiniCalendar } from '../mini'
import { Popover } from '../popover'
import { DateType } from '../types'
import { DatePickerProps } from './types'

export const DatePicker = ({
  defaultValue,
  onChange,
  ...rest
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<DateType | undefined>(defaultValue)

  const handleChange = (date: DateType) => {
    setOpen(false)
    setValue(date)
    onChange?.(date)
  }

  const handleClick = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <Popover
      content={
        <MiniCalendar dayClick={handleChange} controls selectedDate={value} />
      }
      open={open}
      onClick={handleClick}
      onClose={handleClose}
    >
      <TextField
        InputProps={{
          startAdornment: <CalendarMonthRounded />,
          ...rest.InputProps,
        }}
        type='text'
        value={value}
        {...rest}
      />
    </Popover>
  )
}
