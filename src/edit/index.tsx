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
import { objectEquals } from '../helper'
import { Modal } from '../modal'
import { DateRangePicker, TimeRangePicker } from '../rangePicker'
import { Flex, Row } from '../styles'
import { CalendarEvent, DateType, TimeType } from '../types'

export const EditModal = () => {
  const { calendars, onEventChange, selectEvent, selectedEvent } = useCalendar()
  const [allDay, setAllDay] = React.useState(!!selectedEvent!.allDay)
  const [calendar, setCalendar] = React.useState(selectedEvent!.calendar.id)
  // const [description, setDescription] = React.useState(
  //   selectedEvent!.description
  // )
  const [startDate, setStartDate] = React.useState<DateType>(
    selectedEvent!.start.split(' ')[0] as DateType
  )
  const end = selectedEvent!.end.split(' ')
  const [endDate, setEndDate] = React.useState<DateType | undefined>(
    end[0] !== startDate ? (end[0] as DateType) : undefined
  )
  const [endTime, setEndTime] = React.useState<TimeType>(end[1] as TimeType)

  const [startTime, setStartTime] = React.useState<TimeType>(
    selectedEvent!.start.split(' ')[1] as TimeType
  )
  const [title, setTitle] = React.useState<string>(selectedEvent!.title)

  const updated = React.useMemo(
    () => ({
      id: selectedEvent!.id,
      allDay,
      calendar: calendars.find(({ id }) => id === calendar)!,
      description: undefined,
      end: allDay ? endDate : `${startDate} ${endTime}`,
      start: allDay ? startDate : `${startDate} ${startTime}`,
      title,
    }),
    [allDay, calendar, endDate, endTime, startDate, startTime, title]
  )

  const valid = React.useMemo(() => {
    if (!updated.title || updated.title.trim().length === 0) {
      console.log({ title: updated.title })
      return false
    }
    if (!updated.calendar) {
      console.log({ calendar: updated.calendar })
      return false
    }
    if (!updated.start || updated.start.trim().length === 0) {
      console.log({ start: updated.start })
      return false
    }
    if (!updated.end || updated.end.trim().length === 0) {
      console.log({ end: updated.end })
      return false
    }
    if (updated.end <= updated.start) {
      console.log({ end: updated.end, start: updated.start })
      return false
    }
    return !objectEquals(updated, selectedEvent)
  }, [updated, selectedEvent])

  const handleClose = () => selectEvent(undefined)

  const handleSave = () => {
    valid && onEventChange?.(updated as CalendarEvent)
    handleClose()
  }

  React.useEffect(() => {
    console.log({ selectedEvent, updated, valid })
  }, [selectedEvent, updated, valid])

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
          <Button
            disabled={!valid}
            size='small'
            variant='contained'
            onClick={handleSave}
            sx={{ color: !valid ? 'grey !important' : undefined }}
          >
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
            defaultValue={title}
            label='Event Name'
            name='name'
            onChange={({ target: { value } }) => setTitle(value)}
            placeholder='Enter event name.'
            required
            // InputProps={{ startAdornment: <AbcRounded /> }}
            type='text'
            variant='standard'
          />
        </FormControl>
        {/* <FormControl fullWidth>
          <TextField
            defaultValue={description}
            label='Event Description'
            name='description'
            onChange={({ target: { value } }) => setDescription(value)}
            placeholder='Enter event description.'
            // InputProps={{ startAdornment: <AbcRounded /> }}
            type='text'
            variant='standard'
          />
        </FormControl> */}
        <FormControl fullWidth required>
          <InputLabel id='select-calendar-label' variant='standard'>
            Calendar
          </InputLabel>
          <Select
            labelId='select-calendar-label'
            id='select-calendar'
            value={calendar}
            label='Calendar'
            onChange={({ target: { value } }) => setCalendar(value)}
            sx={{ '& svg': { fill: 'white' } }}
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
              defaultValue={{
                end: endDate === startDate ? undefined : endDate,
                start: startDate,
              }}
              onChange={(value) => {
                value?.end && setEndDate(value.end)
                value?.start && setStartDate(value.start)
              }}
              datePickerProps={{ required: true }}
            />
          ) : (
            <>
              <DatePicker
                defaultValue={startDate}
                fullWidth={!allDay}
                label={allDay ? 'Start' : 'Date'}
                name='start'
                onChange={setStartDate}
                required
                variant='standard'
              />
              <TimeRangePicker
                defaultValue={{ end: endTime, start: startTime }}
                onChange={(value) => {
                  value?.end && setEndTime(value.end)
                  value?.start && setStartTime(value.start)
                }}
                timePickerProps={{ required: true, style: { maxWidth: 109 } }}
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
