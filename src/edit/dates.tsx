import React from 'react'

import { DatePicker } from '../datepicker'
import { DateRangePicker, TimeRangePicker } from '../rangePicker'
import { RangePickerValue } from '../rangePicker/types'
import { Row } from '../styles'
import { CalendarEvent, DateType, TimeType } from '../types'
import { useEdit } from './context'

export const Dates = () => {
  const { event, setEvent } = useEdit()

  const value = React.useMemo(() => {
    if (!event?.start || !event?.end) return undefined

    return {
      start: event?.allDay ? event.start.split(' ')[0] : event.start,
      end: event?.allDay ? event.end.split(' ')[0] : event.end,
    }
  }, [event])

  const handleChange = (start: DateType) =>
    setEvent({ ...event!, start } as CalendarEvent)

  const handleTimeChange = (date: RangePickerValue<TimeType>) =>
    setEvent({
      ...event!,
      end: `${value?.start.split(' ')[0]} ${date.end}`,
      start: `${value?.start.split(' ')[0]} ${date.start}`,
    } as CalendarEvent)

  return (
    <Row style={{ gap: '.5rem' }}>
      {event?.allDay ? (
        <DateRangePicker
          defaultValue={value as RangePickerValue<DateType>}
          onChange={({ start, end }) => setEvent({ ...event!, start, end })}
          datePickerProps={{ required: true }}
        />
      ) : (
        <>
          <DatePicker
            defaultValue={value?.start.split(' ')[0] as DateType}
            label='Date'
            onChange={handleChange}
            required
            variant='standard'
          />
          <TimeRangePicker
            defaultValue={{
              end: value?.end.split(' ')[1] as TimeType,
              start: value?.start.split(' ')[1] as TimeType,
            }}
            onChange={handleTimeChange}
            timePickerProps={{ required: true, style: { maxWidth: 109 } }}
          />
        </>
      )}
    </Row>
  )
}
