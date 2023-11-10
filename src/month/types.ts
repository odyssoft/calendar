import { Events } from '../types'

export type MoreProps = Events & {
  diff: number
  editable: boolean
  isHourly?: boolean
}
