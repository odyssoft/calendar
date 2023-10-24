import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Dropdown } from './'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>

type Story = StoryObj<typeof Dropdown>

export const _Dropdown: Story = {
  args: {
    children: <Button>Dropdown Button</Button>,
    items: [
      { children: 'Item 1' },
      { children: 'Item 2' },
      { children: 'Item 3' },
    ],
    name: 'storybook-dropdown',
  },
}
