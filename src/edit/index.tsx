import {
  Button,
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
import { Flex, Row } from '../styles'
import { DateTimeType, DateType, ParsedEvent, TimeType } from '../types'
import { DateRangePicker, TimeRangePicker } from '../rangePicker'
import { getDateTime, objectEquals } from '../helper'

export const EditModal = () => {
  const { calendars, onEventChange, selectEvent, selectedEvent } = useCalendar()
  const [allDay, setAllDay] = React.useState(!!selectedEvent!.allDay)
  const [calendar, setCalendar] = React.useState(selectedEvent!.calendar.id)
  const [endDate, setEndDate] = React.useState<DateType>(
    selectedEvent!.end.split(' ')[0] as DateType
  )
  const [endTime, setEndTime] = React.useState<TimeType>(
    selectedEvent!.end.split(' ')[1] as TimeType
  )
  const [startDate, setStartDate] = React.useState<DateType>(
    selectedEvent!.start.split(' ')[0] as DateType
  )
  const [startTime, setStartTime] = React.useState<TimeType>(
    selectedEvent!.start.split(' ')[1] as TimeType
  )
  const [title, setTitle] = React.useState<string>(selectedEvent!.title)

  const updated = React.useMemo(
    () => ({
      id: selectedEvent!.id,
      allDay,
      calendar: calendars.find(({ id }) => id === calendar)!,
      end: allDay ? endDate : `${endDate} ${endTime}`,
      start: allDay ? startDate : `${startDate} ${startTime}`,
      title,
    }),
    [allDay, calendar, endDate, endTime, startDate, startTime, title]
  )

  const { end, start } = React.useMemo(
    () => ({
      end: getDateTime(selectedEvent?.end as DateTimeType),
      start: getDateTime(selectedEvent?.start as DateTimeType),
    }),
    [selectedEvent]
  )

  const handleClose = () => selectEvent(undefined)

  const handleSave = () => {
    !objectEquals(updated, {
      ...selectedEvent,
      allDay: !!selectedEvent?.allDay,
    }) && onEventChange?.(updated as ParsedEvent)
    handleClose()
  }

  return (
    <Modal
      closeButton
      footer={
        <Row justify='flex-end' style={{ gap: '.5rem' }}>
          <Button
            color='inherit'
            size='small'
            variant='outlined'
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button size='small' variant='contained' onClick={handleSave}>
            Save
          </Button>
        </Row>
      }
      open={!!selectedEvent}
      onClose={handleClose}
      title='Edit Event'
    >
      <Flex direction='column' style={{ gap: '.5rem' }}>
        <FormControl fullWidth>
          <TextField
            defaultValue={selectedEvent?.title}
            label='Name'
            name='name'
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder='Enter event name.'
            required
            // InputProps={{ startAdornment: <AbcRounded /> }}
            type='text'
            variant='standard'
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
          control={<Checkbox onChange={(_, checked) => setAllDay(checked)} />}
          checked={allDay}
          label='All Day'
        />
        <Row style={{ gap: '.5rem' }}>
          {allDay ? (
            <DateRangePicker
              defaultValue={{ end: end?.date, start: start?.date }}
              onChange={(value) => {
                value?.end && setEndDate(value.end)
                value?.start && setStartDate(value.start)
              }}
            />
          ) : (
            <>
              <DatePicker
                defaultValue={start?.date}
                fullWidth={!allDay}
                label={allDay ? 'Start' : 'Date'}
                name='start'
                onChange={setStartDate}
                variant='standard'
              />
              <TimeRangePicker
                defaultValue={{ end: end?.time, start: start?.time }}
                onChange={(value) => {
                  value?.end && setEndTime(value.end)
                  value?.start && setStartTime(value.start)
                }}
                timePickerProps={{ style: { maxWidth: 109 } }}
              />
            </>
          )}
        </Row>
        {/* <FormControl fullWidth>
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
        </FormControl> */}
      </Flex>
    </Modal>
  )
}
