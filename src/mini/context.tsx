import React from 'react'
import moment from 'moment'

import { getMonth } from '../helper'
import { MiniContext, MiniProviderProps } from './types'

const Context = React.createContext<MiniContext>({
  date: moment(),
  items: [],
  setDate: () => {},
  title: '',
})

export const MiniProvider = ({ children, ...rest }: MiniProviderProps) => {
  const [date, setDate] = React.useState<moment.Moment>(
    rest.date ? moment(rest.date, 'DD-MM-YYYY') : moment()
  )

  const items = React.useMemo(() => getMonth(date), [date])
  const title = React.useMemo(() => date.format('MMMM YYYY'), [date])

  return (
    <Context.Provider
      value={{
        ...rest,
        date,
        items,
        setDate,
        title,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useMiniCalendar = () => React.useContext(Context)
