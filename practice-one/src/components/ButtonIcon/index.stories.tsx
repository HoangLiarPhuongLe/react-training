import type { Meta, StoryObj } from '@storybook/react'
import heart from '../../assets/images/heart.svg'

import ButtonIcon from '.'

const meta = {
  component: ButtonIcon,
  title: 'ButtonIcon',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    source: heart,
    alt: 'heart',
  },
}

export const Primary: Story = {
  args: {
    primary: true,
    source: heart,
    alt: 'heart',
  },
}
