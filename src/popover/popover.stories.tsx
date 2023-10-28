import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Popover } from './'
import { ThemeProvider } from '../theme'
import { Flex } from '../styles'

export default {
  title: 'Components/Popover',
  component: Popover,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Flex align='center' justify='center' style={{ height: '100%' }}>
          <Story />
        </Flex>
      </ThemeProvider>
    ),
  ],
} as Meta<typeof Popover>

type Story = StoryObj<typeof Popover>

export const _Popover: Story = {
  args: {
    children: <Button>Popover Button</Button>,
    content: <div>Popover content</div>,
  },
}
