import { CalendarMonthRounded } from '@mui/icons-material'
import { TextField } from '@mui/material'
import React from 'react'

import { MiniCalendar } from '../mini'
import { Popover } from '../popover'
import { DateType } from '../types'
import { DatePickerProps } from './types'

export const DatePicker = ({
  defaultValue,
  disabledDates,
  onChange,
  ...rest
}: DatePickerProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<DateType>('')

  const handleChange = (date: DateType) => {
    setOpen(false)
    setValue(date)
    onChange?.(date)
  }

  const handleClick = () => setOpen(true)

  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    setValue(defaultValue ?? '')
  }, [defaultValue])

  return (
    <Popover
      content={
        <MiniCalendar
          dayClick={handleChange}
          controls
          disabledDates={disabledDates}
          selectedDate={value}
        />
      }
      open={open}
      onClick={handleClick}
      onClose={handleClose}
    >
      <TextField
        InputProps={{
          startAdornment: <CalendarMonthRounded sx={{ mr: 0.5 }} />,
          ...rest.InputProps,
        }}
        type='text'
        value={value}
        {...rest}
      />
    </Popover>
  )
}
