import { useCalendar } from '../context'
import { DateType } from '../types'
import { Day } from './styles'
import { MiniDayProps } from './types'

export const MiniDay = ({
  day,
  onClick,
  index,
  selectedDates,
}: MiniDayProps) => {
  const { date } = useCalendar()
  const [start, end] = selectedDates || []
  const isStart = start && day.isSame(start, 'day')
  const isEnd = end && day.isSame(end, 'day')
  const first = day.clone().subtract(1, 'day').isSame(start, 'day')
  const last = day.clone().add(1, 'day').isSame(end, 'day')
  const between = !!end && day.isBetween(start, end, 'day')

  const handleClick = () => onClick?.(day.format('DD-MM-YYYY') as DateType)

  return (
    <Day between={between} first={first} last={last}>
      <Day.Button
        onClick={handleClick}
        index={index}
        size='small'
        selected={isStart || isEnd}
      >
        <Day.Text month={day.isSame(date, 'month')}>{day.date()}</Day.Text>
      </Day.Button>
    </Day>
  )
}
