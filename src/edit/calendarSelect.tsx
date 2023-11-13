import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React from 'react'

import { useCalendar } from '../context'
import { useEdit } from './context'

export const CalendarSelect = () => {
  const { calendars } = useCalendar()
  const { event, setEvent } = useEdit()

  const handleChange = ({ target: { value } }: SelectChangeEvent) =>
    setEvent({ ...event!, calendar: calendars.find(({ id }) => id === value)! })

  return (
    <FormControl fullWidth required>
      <InputLabel id='select-calendar-label' variant='standard'>
        Calendar
      </InputLabel>
      <Select
        labelId='select-calendar-label'
        id='select-calendar'
        value={event?.calendar.id}
        label='Calendar'
        onChange={handleChange}
        sx={{ '& svg': { fill: 'white' } }}
        variant='standard'
      >
        {calendars.map(({ id, name }) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
