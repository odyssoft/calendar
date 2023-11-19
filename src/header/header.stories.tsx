import type { Meta, StoryObj } from '@storybook/react'

import { CalendarHeader } from './'
import { ThemeProvider } from '../theme'
import { Context } from '../context'

const meta: Meta<typeof CalendarHeader> = {
  component: CalendarHeader,
  title: 'Calendar/Header',
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

type Story = StoryObj<typeof CalendarHeader>

export const Header: Story = {
  parameters: {
    calendar: {
      navigation: true,
      next: console.log,
      previous: console.log,
      selectDay: console.log,
      setView: console.log,
      sidebar: false,
      title: 'Header Title',
      toggleSidebar: console.log,
      view: 'month',
      views: ['month', 'week', 'day'],
    },
  },
}
