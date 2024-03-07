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
    children: 'Checkout',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Checkout',
  },
}

export const Tinary: Story = {
  args: {
    variant: 'tinary',
    children: 'Checkout',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Checkout',
  },
}
