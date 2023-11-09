import moment from 'moment'

import { DAYS } from './constants'
import {
  CalendarDate,
  DateKey,
  DateType,
  Format,
  GetEvents,
  GetMonthEvents,
  GetWeek,
} from './types'

export const empty = (...params: any): any => {}

export const format: Format = {
  day: 'MMMM DD, YYYY',
  month: 'MMMM YYYY',
  week: 'MMMM YYYY (ww)',
  year: 'YYYY',
}

export const getClipPath = (start: boolean, end: boolean) => {
  if (start && end) return undefined
  if (start)
    return 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)'
  if (end) return 'polygon(0 50%,10px 0,100% 0,100% 100%,10px 100%)'
  return 'polygon(0 50%,10px 0,calc(100% - 10px) 0,100% 50%,calc(100% - 10px) 100%,10px 100%)'
}

export const getEvents: GetEvents = (event) => {
  const events: any = {}
  event
    .sort((a, b) => a.start.localeCompare(b.start))
    .forEach(({ end: e, start: s, allDay, ...evt }) => {
      const dateEnd = moment(e, `DD-MM-YYYY${allDay ? '' : ' HH:mm'}`)
      const dateStart = moment(s, `DD-MM-YYYY${allDay ? '' : ' HH:mm'}`)
      const type = allDay ? 'week' : 'day'
      const startType = allDay ? 'week' : 'hour'
      const endMins = getMinutes(dateEnd)
      const startMins = getMinutes(dateStart)
      const max = allDay
        ? 7 - dateStart.day()
        : 24 - (startMins.hours + startMins.minutes)
      const difference = allDay
        ? dateEnd.diff(dateStart, 'days')
        : endMins.hours +
          endMins.minutes -
          (startMins.hours + startMins.minutes)
      const span = difference > max ? max : difference
      const startDate = dateStart.format('DD-MM-YYYY') as DateKey
      if (!events[startDate]) events[startDate] = { allDay: [], hourly: [] }
      const isEnd = dateStart
        .clone()
        .add(span, allDay ? 'days' : 'hours')
        .isSame(dateEnd, 'day')

      events[startDate][allDay ? 'allDay' : 'hourly'].push({
        ...evt,
        allDay: true,
        end: e as DateType,
        span,
        start: s as DateType,
        isStart: true,
        isEnd,
      })

      const next = dateStart.clone().add(1, type).startOf(startType)
      const endDate = dateEnd.clone().startOf(type)
      if (difference > 0 && allDay) {
        for (let i = 1; i < difference; i++) {
          const pad = dateStart.clone().add(i, 'day')
          const padDate = pad.format('DD-MM-YYYY') as DateKey
          if (!events[padDate]) events[padDate] = { allDay: [], hourly: [] }
          const max = allDay ? 7 - next.day() : 24 - next.hour()
          const diff = dateEnd.diff(next, allDay ? 'days' : 'hours')
          const span = diff > max ? max : diff
          const isMonday = pad.day() === 0
          events[padDate].allDay.push({
            ...evt,
            allDay: true,
            empty: !isMonday,
            end: e as DateType,
            isEnd: next.isSame(endDate, type),
            isStart: false,
            span: isMonday ? span : 1,
            start: s as DateType,
          })
        }
      }
    })
  return events
}

const getMinutes = (date: moment.Moment) => {
  const [hours, minutes] = date.format('HH:mm').split(':')
  return { hours: Number(hours), minutes: Number(minutes) / 60 }
}

export const getMonth = (date: moment.Moment): moment.Moment[][] => {
  const days: moment.Moment[][] = []
  const min = date.clone().startOf('month')
  const max = date.clone().endOf('month')
  const pre = DAYS.indexOf(min.format('dddd'))
  const post = DAYS.length - 1 - DAYS.indexOf(max.format('dddd'))
  const start = min.clone().subtract(pre, 'days')
  const end = max.clone().add(post, 'days')

  let current = start.clone()
  while (current.isSameOrBefore(end, 'day')) {
    if (current.day() === 0) days.push([])
    days[days.length - 1].push(current.clone())
    current.add(1, 'day')
  }
  return days
}

export const getMonthEvents: GetMonthEvents = ({ data, date }) => {
  const days = getMonth(date)
  const events = getEvents(data)
  const empty = { allDay: [], hourly: [] }
  return days.map((row) =>
    row.map((date) => ({
      date,
      events: events[date.format('DD-MM-YYYY') as DateType] ?? empty,
    }))
  )
}

export const getWeek: GetWeek = ({ date, month }) => {
  const days: CalendarDate[][] = []
  const week = month.find((w) => w[0].date.isSame(date, 'week'))
  if (!week) return []
  for (let i = 0; i < 24; i++) {
    days.push([])
    for (let j = 0; j < week.length; j++) {
      const { date: d, events } = week[j]
      const hour = d.clone().add(i, 'hour')
      days[i].push({
        date: hour,
        events: {
          allDay: events.allDay,
          hourly: events.hourly.filter(
            ({ start }) => start.split(':')[0] === hour.format('DD-MM-YYYY HH')
          ),
        },
      })
    }
  }
  return days
}

export const getWidth = (span: number, isHourly?: boolean) =>
  `calc(${100 * span}% + ${(isHourly ? 0 : span) - 8 - span}px)`

export const getYear = (date: moment.Moment): moment.Moment[][] =>
  [...Array(3)]
    .map((_) => [...Array(4)])
    .map((row, i) => row.map((_, j) => date.clone().month(i * 4 + j)))

export function objectEquals(x: any, y: any) {
  if (x === y) return true

  if (!(x instanceof Object) || !(y instanceof Object)) return false

  if (x.constructor !== y.constructor) return false

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue

    if (!y.hasOwnProperty(p)) return false

    if (x[p] === y[p]) continue

    if (typeof x[p] !== 'object') return false

    if (!objectEquals(x[p], y[p])) return false
  }

  for (p in y) if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false

  return true
}
