import { useCalendar } from '../context'
import { CalendarMonth } from '../month'
import { CalendarWeek } from '../week'
import { BodyHeader } from './header'
import { Body } from './styles'

export const CalendarBody = () => {
  const { view } = useCalendar()

  const View = () => {
    // if (view === 'year') return <CalendarYear />
    if (view === 'month') return <CalendarMonth />
    return <CalendarWeek />
  }

  return (
    <Body>
      <BodyHeader />
      <Body.Container>
        <Body.Content
          height={['month', 'year'].includes(view) ? 'auto' : undefined}
        >
          <View />
        </Body.Content>
      </Body.Container>
    </Body>
  )
}
