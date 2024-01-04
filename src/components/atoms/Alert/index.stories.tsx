import { Meta, StoryObj } from '@storybook/react'

import Alert from '.'

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Atoms/Alert',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Normal: Story = {}
