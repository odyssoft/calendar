import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import React from 'react'

import { useCalendar } from '../context'
import { Modal } from '../modal'
import { Flex } from '../styles'
import { AbcRounded, CalendarMonthRounded } from '@mui/icons-material'

export const EditModal = () => {
  const { calendars, selectEvent, selectedEvent } = useCalendar()
  const [allDay, setAllDay] = React.useState(selectedEvent?.allDay)
  const [calendar, setCalendar] = React.useState(selectedEvent?.calendar.id)

  const handleClose = () => selectEvent(undefined)

  return (
    <Modal
      closeButton
      open={!!selectedEvent}
      onClose={handleClose}
      title='Edit Event'
    >
      <Flex direction='column' style={{ gap: '.5rem' }}>
        <FormControl fullWidth>
          <TextField
            label='Name'
            name='name'
            placeholder='Enter event name.'
            required
            InputProps={{
              startAdornment: <AbcRounded />,
            }}
            type='datetime-local'
            variant='standard'
            defaultValue={selectedEvent?.title}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='select-calendar-label' variant='standard'>
            Calendar
          </InputLabel>
          <Select
            labelId='select-calendar-label'
            id='select-calendar'
            value={calendar}
            label='Calendar'
            onChange={({ target: { value } }) => setCalendar(value)}
            variant='standard'
          >
            {calendars.map(({ color, id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={allDay}
              onChange={({ target: { checked } }) => setAllDay(checked)}
            />
          }
          label='All Day'
        />
        {(['start', 'end'] as ('start' | 'end')[]).map((key) => (
          <FormControl fullWidth key={key}>
            <TextField
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              name={key}
              placeholder='Enter event name.'
              required
              InputProps={{ startAdornment: <CalendarMonthRounded /> }}
              type='date'
              variant='standard'
              defaultValue={selectedEvent?.title}
            />
            {/* Create dropdown for time selection... */}
          </FormControl>
        ))}
      </Flex>
    </Modal>
  )
}
