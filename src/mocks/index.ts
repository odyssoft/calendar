import moment from 'moment'
import { CalendarEvent, DateType } from '../types'

export const mockCalendars = [
  {
    name: "Seann's Calendar",
    color: '#009DFF',
    id: 'asmd89a0sjd',
  },
  {
    name: "Lexi's Calendar",
    color: '#9DFF00',
    id: '9a0dh78a9sd',
  },
  {
    name: "Felicity's Calendar",
    color: '#FF009D',
    id: 'au89sdoasu9',
  },
  {
    name: "Ophelia's Calendar",
    color: '#9D00FF',
    id: 'j908vfdj90s',
  },
]

const date = moment()

export const mockData: CalendarEvent[] = [
  {
    allDay: true,
    calendar: mockCalendars[0],
    end: date.format('DD-MM-YYYY') as DateType,
    id: 'daily-0',
    start: date.format('DD-MM-YYYY') as DateType,
    title: 'All day event',
  },
  {
    allDay: true,
    calendar: mockCalendars[1],
    end: date
      .clone()
      .endOf('day')
      .add(2, 'day')
      .format('DD-MM-YYYY') as DateType,
    id: 'daily-1',
    start: date
      .clone()
      .startOf('day')
      .subtract(1, 'day')
      .format('DD-MM-YYYY') as DateType,
    title: 'All day event',
  },
  {
    allDay: true,
    calendar: mockCalendars[3],
    end: date
      .clone()
      .endOf('day')
      .add(1, 'day')
      .format('DD-MM-YYYY') as DateType,
    id: 'daily-2',
    start: date
      .clone()
      .startOf('day')
      .subtract(1, 'day')
      .format('DD-MM-YYYY') as DateType,
    title: 'All day event',
  },
  {
    allDay: true,
    calendar: mockCalendars[2],
    end: date
      .clone()
      .endOf('day')
      .add(2, 'day')
      .format('DD-MM-YYYY') as DateType,
    id: 'daily-3',
    start: date.format('DD-MM-YYYY') as DateType,
    title: 'All day event',
  },

  {
    id: 'hourly-0',
    end: moment()
      .startOf('day')
      .add(13, 'hours')
      .add(30, 'minutes')
      .format('DD-MM-YYYY HH:mm') as any,
    start: moment()
      .startOf('day')
      .add(12, 'hours')
      .format('DD-MM-YYYY HH:mm') as any,
    title: 'Hourly event 1 - 1 hours',
    calendar: mockCalendars[1],
  },
  {
    id: 'hourly-1',
    end: moment()
      .startOf('day')
      .add(15, 'hours')
      .add(45, 'minutes')
      .format('DD-MM-YYYY HH:mm') as any,
    start: moment()
      .startOf('day')
      .add(13, 'hours')
      .add(45, 'minutes')
      .format('DD-MM-YYYY HH:mm') as any,
    title: 'Hourly event 2 - 1 hours',
    calendar: mockCalendars[0],
  },
  {
    id: 'hourly-2',
    end: moment()
      .startOf('day')
      .add(16, 'hours')
      .add(15, 'minutes')
      .format('DD-MM-YYYY HH:mm') as any,
    start: moment()
      .startOf('day')
      .add(15, 'hours')
      .add(45, 'minutes')
      .format('DD-MM-YYYY HH:mm') as any,
    title: 'Hourly event 3 - 1 hours',
    calendar: mockCalendars[2],
  },
]
