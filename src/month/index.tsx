import { useCalendar } from '../context'
import { Row } from '../styles'
import { Day } from './day'
import { Events } from './events'
import { Month } from './styles'
import { Week } from './week'

export const CalendarMonth = () => {
  const { month } = useCalendar()

  return (
    <Month>
      {month.map((week) => (
        <Month.Week key={`week${week[0].date.format('ww')}`}>
          {week.map((day, index) => (
            <Month.Column key={day.date.format('DDMMYYYY')}>
              <Row>
                {index === 0 && <Week {...day} />}
                <Day {...day} />
              </Row>
              <Events {...day} />
            </Month.Column>
          ))}
        </Month.Week>
      ))}
    </Month>
  )
}
