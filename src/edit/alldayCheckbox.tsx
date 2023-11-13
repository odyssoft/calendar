import { Checkbox, FormControlLabel } from '@mui/material'
import { SwitchBaseProps } from '@mui/material/internal/SwitchBase'
import React from 'react'

import { useEdit } from './context'
import { CalendarEvent } from '../types'

export const AlldayCheckbox = () => {
  const { event, setEvent } = useEdit()

  const handleChange: SwitchBaseProps['onChange'] = (_, checked) =>
    setEvent({ ...event!, allDay: checked } as CalendarEvent)

  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange} />}
      checked={event?.allDay}
      label='All Day'
    />
  )
}
