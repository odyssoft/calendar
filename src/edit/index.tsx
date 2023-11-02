import { AbcRounded } from '@mui/icons-material'
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
import { DatePicker } from '../datepicker'
import { Modal } from '../modal'
import { Flex } from '../styles'
import { TimePicker } from '../timepicker'
import { TimeType } from '../types'
import { REPEAT } from '../constants'

export const EditModal = () => {
  const { calendars, selectEvent, selectedEvent } = useCalendar()
  const [allDay, setAllDay] = React.useState(!!selectedEvent?.allDay)
  const [calendar, setCalendar] = React.useState(selectedEvent?.calendar.id)
  const [endTime, setEndTime] = React.useState<TimeType>()
  const [startTime, setStartTime] = React.useState<TimeType>()
  const [repeat, setRepeat] = React.useState<string>('')

  const handleClose = () => selectEvent(undefined)

  const DateTimeRanges = () => (
    <>
      <TimePicker
        defaultValue={startTime}
        label='Start Time'
        name='start'
        onChange={setStartTime}
        style={{ maxWidth: 115 }}
        variant='standard'
      />
      <TimePicker
        defaultValue={endTime}
        label='End Time'
        name='end'
        onChange={setEndTime}
        style={{ maxWidth: 115 }}
        variant='standard'
      />
    </>
  )

  React.useEffect(() => {
    console.log({ endTime, startTime })
  }, [startTime])

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
            InputProps={{ startAdornment: <AbcRounded /> }}
            type='text'
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
              onChange={({ target: { checked } }) => setAllDay(checked)}
            />
          }
          onChange={console.log}
          checked={allDay}
          label='All Day'
        />
        <DatePicker
          fullWidth={!allDay}
          label={allDay ? 'Start' : 'Date'}
          name='start'
          variant='standard'
        />
        {allDay ? (
          <DatePicker label='End' name='end' variant='standard' />
        ) : (
          <DateTimeRanges />
        )}
        <FormControl fullWidth>
          <InputLabel id='select-repeat-label' variant='standard'>
            Repeat
          </InputLabel>
          <Select
            labelId='select-repeat-label'
            id='select-repeat'
            value={repeat}
            label='repeat'
            onChange={({ target: { value } }) => setRepeat(value)}
            variant='standard'
          >
            {REPEAT.map((rep) => (
              <MenuItem key={rep} value={rep}>
                {rep}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Flex>
    </Modal>
  )
}
