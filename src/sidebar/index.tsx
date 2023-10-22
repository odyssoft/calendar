import { useCalendar } from '../context'
import { Sidebar } from './styles'

export const CalendarSidebar = () => {
  const { sidebar } = useCalendar()
  if (!sidebar) return null

  return <Sidebar></Sidebar>
}
