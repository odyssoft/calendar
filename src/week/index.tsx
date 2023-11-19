import moment from 'moment'
import React from 'react'

import { useCalendar } from '../context'
import { Text } from '../styles'
import { Week } from './styles'
import { CalendarEvent } from '../types'

export const CalendarWeek = () => {
  const { date, editable, selectEvent, week, view } = useCalendar()

  return (
    <>
      {week.map((row, index) => (
        <Week key={row[0].date.format('DDMMYYYY h A')}>
          <Week.Space time={index > 0 ? row[0].date.format('h A') : ''} />
          {row
            .filter(
              ({ date: current }) =>
                view === 'week' || date.isSame(current, 'day')
            )
            .map(({ events }, index) => (
              <Week.Column
                key={`${
                  events.allDay[0]?.start ?? events.hourly[0]?.start
                }-${index}`}
              >
                {events.hourly.map((event) => {
                  const time = moment(event.start, 'DD-MM-YYYY hh:mm')
                  return (
                    <Week.Event
                      background={event.calendar?.color!}
                      key={event.id}
                      editable={!!editable}
                      span={event.span}
                      start={event.start}
                      style={{ zIndex: 24 - index }}
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
                      <Text>
                        {time.format(time.minutes() > 0 ? 'h:m A' : 'h A')}
                      </Text>
                      {event.title}
                    </Week.Event>
                  )
                })}
              </Week.Column>
            ))}
        </Week>
      ))}
    </>
  )
}
