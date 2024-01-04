import { Meta, StoryObj } from '@storybook/react'

import Pagination from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Molecules/Pagination',
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: { type: 'number' },
      description: 'Current page',
      table: {
        type: { summary: 'number' },
      },
    },
    limit: {
      control: { type: 'number' },
      description: 'Page limit',
      defaultValue: 10,
      table: {
        type: { summary: 'number' },
      },
    },
    totalPage: {
      control: { type: 'number' },
      description: 'Total page',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Normal: Story = {
  args: {
    page: 1,
    limit: 10,
    totalPage: 100,
  },
}
