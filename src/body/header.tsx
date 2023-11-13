import React from 'react'

import { DAYS } from '../constants'
import { useCalendar } from '../context'
import { Row } from '../styles'
import { Day } from './day'
import { Header } from './styles'

export const BodyHeader = () => {
  const { view, week } = useCalendar()
  if (view === 'year') return <React.Fragment />

  return (
    <Header>
      <Row>
        {['day', 'week'].includes(view) && <Header.Space />}
        {DAYS.map((day, index) => (
          <Header.Column key={day} view={view}>
            {view === 'month' ? (
              day
            ) : (
              <>
                <div>{day}</div>
                <Day {...week[0][index]} />
              </>
            )}
          </Header.Column>
        ))}
      </Row>
      {['day', 'week'].includes(view) && (
        <Row>
          <Header.Space />
        </Row>
      )}
    </Header>
  )
}
