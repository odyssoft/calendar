import { FormControl, TextField } from '@mui/material'
import { Flex, Row } from '../styles'
import { CalendarMonthRounded } from '@mui/icons-material'
import { Popover } from '../popover'
import { MiniCalendar } from '../mini'

export const RangePicker = () => {
  return (
    <Row>
      <Popover
        content={
          <Flex>
            <MiniCalendar controls />
          </Flex>
        }
      >
        <TextField
          InputProps={{ startAdornment: <CalendarMonthRounded /> }}
          type='date'
          label='Start'
        />
      </Popover>
    </Row>
  )
}
