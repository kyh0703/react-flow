import { Meta, StoryObj } from '@storybook/react'

import Badge from '.'

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Atoms/Badge',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: { type: 'text' },
      description: 'Badge content',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Badge background color',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Orange: Story = {
  args: {
    content: '1',
    backgroundColor: '#ed9f28',
  },
}

export const Green: Story = {
  args: {
    content: '2',
    backgroundColor: '#38a169',
  },
}

export const Red: Story = {
  args: {
    content: '3',
    backgroundColor: '#e53e3e',
  },
}
