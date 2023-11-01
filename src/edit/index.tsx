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
import { Flex, Row } from '../styles'
import { AbcRounded, CalendarMonthRounded } from '@mui/icons-material'
import { DatePicker } from '../datepicker'

export const EditModal = () => {
  const { calendars, selectEvent, selectedEvent } = useCalendar()
  const [allDay, setAllDay] = React.useState(selectedEvent?.allDay)
  const [calendar, setCalendar] = React.useState(selectedEvent?.calendar.id)
  const [startTime, setStartTime] = React.useState<moment.Moment>()

  const handleClose = () => selectEvent(undefined)

  const DateRanges = () => <div />
  const DateTimeRanges = () => (
    <Row>
      <div />
      {/* <DatePicker label='Date' />
      <TimePicker
        label='Start'
        onAccept={(value: moment.Moment | null) =>
          setStartTime(value ?? undefined)
        }
        value={startTime}
      />
      <TimePicker
        label='End'
        shouldDisableTime={(value: moment.Moment) => {
          console.log(value, startTime)
          return startTime?.isAfter(value) ?? false
        }}
      /> */}
    </Row>
  )

  React.useEffect(() => {
    console.log({ startTime })
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
            InputProps={{
              startAdornment: <AbcRounded />,
            }}
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
              checked={allDay}
              onChange={({ target: { checked } }) => setAllDay(checked)}
            />
          }
          label='All Day'
        />
        <Row>
          <DatePicker
            label={allDay ? 'Start' : 'Date'}
            name='start'
            variant='standard'
          />
          {allDay ? (
            <DatePicker label='End' name='end' variant='standard' />
          ) : (
            <DateTimeRanges />
          )}
        </Row>
        {/* {(['start', 'end'] as ('start' | 'end')[]).map((key) => (
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
          </FormControl>
        ))} */}
      </Flex>
    </Modal>
  )
}
