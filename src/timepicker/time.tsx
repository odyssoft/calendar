import React from 'react'

import { Row } from '../styles'
import { Picker } from './styles'
import { TimeProps } from './types'

export const Time = ({ disabledTime, onChange, value }: TimeProps) => {
  const [hour, setHour] = React.useState<`${number}`>(
    (value?.split(':')[0] as `${number}`) ?? ''
  )
  const [minute, setMinute] = React.useState<`${number}`>(
    (value?.split(':')[1] as `${number}`) ?? ''
  )

  const minuteStep = 5

  const handleClick = () => onChange?.(`${hour}:${minute}`)

  const Hours = () => (
    <Picker.List>
      {Array.from({ length: 24 }, (_, i) => i).map((h) => {
        const hr = h.toString().padStart(2, '0') as `${number}`
        return (
          <Picker.Item
            active={hour === hr}
            disabled={disabledTime?.(`${hr}:${60 - minuteStep}`)}
            key={hr}
            onClick={() => setHour(hr)}
          >
            {hr}
          </Picker.Item>
        )
      })}
    </Picker.List>
  )

  const Minutes = () => (
    <Picker.List>
      {Array.from({ length: 60 / minuteStep }, (_, i) => i * minuteStep).map(
        (h) => {
          const min = h.toString().padStart(2, '0') as `${number}`
          return (
            <Picker.Item
              active={minute === min}
              disabled={disabledTime?.(`${hour}:${min}`)}
              key={min}
              onClick={() => setMinute(min)}
            >
              {min}
            </Picker.Item>
          )
        }
      )}
    </Picker.List>
  )

  return (
    <Picker>
      <Row>
        <Picker.Column>
          <Hours />
        </Picker.Column>
        <Picker.Column>
          <Minutes />
        </Picker.Column>
      </Row>
      <Row>
        <Picker.Divider />
      </Row>
      <Row justify='flex-end'>
        <Picker.Button
          disabled={!hour || !minute}
          onClick={handleClick}
          size='small'
          variant='contained'
        >
          OK
        </Picker.Button>
      </Row>
    </Picker>
  )
}
