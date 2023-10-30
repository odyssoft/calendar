import { TextField } from '@mui/material'
import { Flex } from '../styles'
import { CalendarMonthRounded } from '@mui/icons-material'
import { Popover } from '../popover'
import { MiniCalendar } from '../mini'
import React from 'react'
import { DateType } from '../types'

export const DatePicker = () => {
  const [value, setValue] = React.useState<DateType | ''>('')

  return (
    <Popover
      content={
        <Flex>
          <MiniCalendar dayClick={setValue} controls />
        </Flex>
      }
    >
      <TextField
        InputProps={{ startAdornment: <CalendarMonthRounded /> }}
        type='text'
        label='Start'
        value={value}
      />
    </Popover>
  )
}
