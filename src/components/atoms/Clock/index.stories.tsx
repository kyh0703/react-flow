import { Meta, StoryObj } from '@storybook/react'

import Clock from '.'

const meta: Meta<typeof Clock> = {
  component: Clock,
  title: 'Atoms/Clock',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Clock>

export const Default: Story = {}
