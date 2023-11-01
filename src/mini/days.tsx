import { DAYS } from '../constants'
import { Column, Row } from '../styles'
import { useMiniCalendar } from './context'
import { DaysText } from './styles'

export const Days = () => {
  const { week } = useMiniCalendar()

  return (
    <Row>
      {week && <Column />}
      {DAYS.map((day) => (
        <Column key={day}>
          <DaysText>{day[0]}</DaysText>
        </Column>
      ))}
    </Row>
  )
}
