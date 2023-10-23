import moment from 'moment'

import { DAYS } from './constants'

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
