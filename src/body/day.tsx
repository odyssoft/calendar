import { useCalendar } from '../context'
import { CalendarDate, DateType } from '../types'
import { DayButton } from './styles'

export const Day = ({ date: d }: CalendarDate) => {
  const { date, selectDay, view } = useCalendar()
  const isDay = view === 'day' && date.isSame(d, 'day')
  const isMonth = date.isSame(d, 'month')

  return (
    <div>
      <DayButton
        isDay={isDay}
        isMonth={isMonth}
        color={isDay ? 'primary' : 'default'}
        onClick={() => selectDay(d.format('DD-MM-YYYY') as DateType)}
        size='small'
      >
        {d.date()}
      </DayButton>
    </div>
  )
}
