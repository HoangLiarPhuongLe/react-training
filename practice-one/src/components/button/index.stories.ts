import type { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    primary: false,
    children: 'Checkout',
  },
}
export const Primary: Story = {
  args: {
    primary: true,
    children: 'Checkout',
  },
}

export const Large: Story = {
  args: {
    primary: true,
    size: 'large',
    children: 'Checkout',
  },
}
