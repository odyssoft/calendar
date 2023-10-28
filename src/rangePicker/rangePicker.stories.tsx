import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { RangePicker } from '.'
import { ThemeProvider } from '../theme'
import { Flex } from '../styles'

export default {
  title: 'Components/Range Picker',
  component: RangePicker,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Flex align='center' justify='center' style={{ height: '100%' }}>
          <Story />
        </Flex>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof RangePicker>

type Story = StoryObj<typeof RangePicker>

export const _RangePicker: Story = {}
