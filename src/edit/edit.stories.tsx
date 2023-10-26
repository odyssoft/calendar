import type { Meta, StoryObj } from '@storybook/react'

import { ThemeProvider } from '../theme'
import { Context } from '../context'
import { EditModal } from './'
import { mockCalendars } from '../mocks'
import moment from 'moment'

const meta: Meta<typeof EditModal> = {
  component: EditModal,
  title: 'Calendar/Edit Modal',
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
    (Story, { parameters: { calendar } }) => (
      <Context.Provider value={calendar}>
        <Story />
      </Context.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof EditModal>

export const _EditModal: Story = {
  args: {
    closeButton: true,
    open: true,
    title: 'Storybook Edit Modal',
  },
  parameters: {
    calendar: {
      data: [],
      calendars: mockCalendars,
      selectedEvent: {
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
    },
  },
}
