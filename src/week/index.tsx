import moment from 'moment'

import { useCalendar } from '../context'
import { Text } from '../styles'
import { Week } from './styles'

export const CalendarWeek = () => {
  const { date, week, view } = useCalendar()

  return (
    <>
      {week.map((row, index) => {
        const time = row[0].date.format('h A')
        console.log({ row, time })
        return (
          <Week key={row[0].date.format('DDMMYYYY')}>
            <Week.Space time={index > 0 ? time : ''} />
            {row
              .filter(
                ({ date: current }) =>
                  view === 'week' || date.isSame(current, 'day')
              )
              .map(({ events }) => (
                <Week.Column>
                  {events.hourly.map((event) => {
                    const time = moment(event.start, 'DD-MM-YYYY hh:mm')
                    return (
                      <Week.Event
                        background={event.calendar?.color!}
                        key={event.id}
                        span={event.span}
                        start={event.start}
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
        )
      })}
    </>
  )
}