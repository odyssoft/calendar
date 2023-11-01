import { useCalendar } from '../context'
import { DateType } from '../types'
import { Day } from './styles'
import { MiniDayProps } from './types'

export const MiniDay = ({
  day,
  onClick,
  index,
  selectedDate,
}: MiniDayProps) => {
  const { date } = useCalendar()

  const handleClick = () => onClick?.(day.format('DD-MM-YYYY') as DateType)

  return (
    <Day>
      <Day.Button
        onClick={handleClick}
        index={index}
        size='small'
        selected={selectedDate === day.format('DD-MM-YYYY')}
      >
        <Day.Text month={day.isSame(date, 'month')}>{day.date()}</Day.Text>
      </Day.Button>
    </Day>
  )
}
