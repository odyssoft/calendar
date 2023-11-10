import moment from 'moment'
import React from 'react'

import { useCalendar } from '../context'
import { Text } from '../styles'
import { CalendarDate, CalendarEvent, ParsedEvent } from '../types'

import { More } from './more'
import { MonthEvents } from './styles'

export const Events = ({
  date,
  events: { allDay: a, hourly: h },
  isHourly,
}: CalendarDate & { isHourly?: boolean }) => {
  const { editable, selectEvent } = useCalendar()

  const max = React.useMemo(
    () => (a.length + h.length > 6 ? 5 : a.length + h.length),
    [a, h]
  )
  const maxA = React.useMemo(
    () => (a.length > 3 && h.length >= 2 ? 3 : a.length),
    [a, h]
  )
  const maxH = React.useMemo(
    () => (h.length > 2 && a.length >= 3 ? 2 : h.length),
    [a, h]
  )
  const allDay = React.useMemo(
    () => (max === 5 ? a.filter((_, i) => i < maxA) : a),
    [a, max, maxA]
  )
  const hourly = React.useMemo(
    () => (max === 5 ? h.filter((_, i) => i < maxH) : h),
    [h, max, maxH]
  )
  const diff = React.useMemo(
    () => a.length + h.length - (allDay.length + hourly.length),
    [a, h, allDay, hourly]
  )

  return (
    <MonthEvents>
      <MonthEvents.Inner>
        {allDay.map((event) =>
          event.empty ? (
            <MonthEvents.Empty key={event.id} />
          ) : (
            <MonthEvents.Daily
              background={event.calendar.color}
              editable={!!editable}
              isEnd={event.isEnd}
              isHourly={isHourly}
              isStart={event.isStart}
              span={event.span}
              key={event.id}
              onClick={() =>
                editable &&
                selectEvent({
                  calendar: event.calendar,
                  end: event.end,
                  id: event.id,
                  start: event.start,
                  title: event.title,
                  description: event.description,
                  allDay: true,
                } as CalendarEvent)
              }
            >
              <Text>{event.title}</Text>
            </MonthEvents.Daily>
          )
        )}
        {hourly.map((event) => (
          <MonthEvents.Hourly
            background={event.calendar.color}
            editable={!!editable}
            key={event.id}
            onClick={() =>
              editable &&
              selectEvent({
                calendar: event.calendar,
                end: event.end,
                id: event.id,
                start: event.start,
                title: event.title,
                description: event.description,
                allDay: false,
              } as CalendarEvent)
            }
          >
            <Text>{event.title}</Text>
          </MonthEvents.Hourly>
        ))}
      </MonthEvents.Inner>
      {diff > 0 && (
        <More
          allDay={a.map((event) => ({
            ...event,
            isEnd: moment(event.end, 'DD-MM-YYYY')
              .subtract(1, 'day')
              .isSameOrBefore(date),
          }))}
          diff={diff}
          editable={!!editable}
          hourly={h}
        />
      )}
    </MonthEvents>
  )
}
