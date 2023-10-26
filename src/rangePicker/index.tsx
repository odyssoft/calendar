import { FormControl, TextField } from '@mui/material'
import { Dropdown } from '../dropdown'
import { Row } from '../styles'
import { CalendarMonthRounded } from '@mui/icons-material'

export const RangePicker = () => {
  return (
    <Row>
      <TextField
        InputProps={{ startAdornment: <CalendarMonthRounded /> }}
        type='date'
        label='Start'
      />
    </Row>
  )
}
