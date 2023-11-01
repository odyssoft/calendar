import {
  ChevronLeftRounded,
  ChevronRightRounded,
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from '@mui/icons-material'
import { Column } from '../styles'
import { DateType } from '../types'
import { useMiniCalendar } from './context'
import { Header } from './styles'

export const MiniHeader = () => {
  const { controls, date, monthClick, setDate, title } = useMiniCalendar()

  const nextMonth = () => setDate(date.clone().add(1, 'month'))
  const nextYear = () => setDate(date.clone().add(1, 'year'))
  const previousMonth = () => setDate(date.clone().subtract(1, 'month'))
  const previousYear = () => setDate(date.clone().subtract(1, 'year'))

  const MonthButton = () => (
    <Header.TitleButton
      controls={!!controls}
      onClick={() => monthClick?.(date.format('DD-MM-YYYY') as DateType)}
    >
      {title}
    </Header.TitleButton>
  )

  return (
    <Header>
      {controls ? (
        <Column>
          <Header.Group size='small' variant='contained'>
            <Header.Button onClick={previousYear}>
              <KeyboardDoubleArrowLeftRounded />
            </Header.Button>
            <Header.Button onClick={previousMonth}>
              <ChevronLeftRounded />
            </Header.Button>
            <MonthButton />
            <Header.Button onClick={nextMonth}>
              <ChevronRightRounded />
            </Header.Button>
            <Header.Button onClick={nextYear}>
              <KeyboardDoubleArrowRightRounded />
            </Header.Button>
          </Header.Group>
        </Column>
      ) : (
        <Header.Title controls={!!controls}>
          <MonthButton />
        </Header.Title>
      )}
    </Header>
  )
}
