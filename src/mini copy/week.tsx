import { Week } from './styles'
import { MiniWeekProps } from './types'

export const MiniWeek = ({ date, onClick }: MiniWeekProps) => {
  const handleClick = () => onClick?.(date.format('ww'), date.format('YYYY'))

  return (
    <Week>
      <Week.Button onClick={handleClick} size='small'>
        <Week.Text>{date.format('ww')}</Week.Text>
      </Week.Button>
    </Week>
  )
}
