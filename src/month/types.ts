import { Events } from '../types'

export type MoreProps = Events & {
  diff: number
  isHourly?: boolean
}
