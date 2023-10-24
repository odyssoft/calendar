import type { Meta, StoryObj } from '@storybook/react'

import { CalendarSidebar } from './'
import { ThemeProvider } from '../theme'
import { Context } from '../context'
import moment from 'moment'

const meta: Meta<typeof CalendarSidebar> = {
  component: CalendarSidebar,
  title: 'Calendar/Sidebar',
  decorators: [
    (Story, context) => (
      <ThemeProvider>
        <Story {...context} />
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

type Story = StoryObj<typeof CalendarSidebar>

export const Sidebar: Story = {
  parameters: {
    calendar: {
      calendars: [
        { id: '1', name: "Seann's Calendar", color: '#009DFF' },
        { id: '2', name: 'Group Calendar', color: '#FF009D' },
        { id: '3', name: 'Another Calendar', color: '#9DFF00' },
        { id: '4', name: 'Test Person Calendar', color: '#FFFF9D' },
        { id: '5', name: 'Another Test Calendar', color: '#9DFFFF' },
      ],
      date: moment(),
      sidebar: true,
    },
  },
}
