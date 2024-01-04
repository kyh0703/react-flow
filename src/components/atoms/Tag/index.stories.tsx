import { Meta, StoryObj } from '@storybook/react'

import Tag from '.'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Atoms/Tag',
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: { type: 'text' },
      description: 'Tag text',
      table: {
        type: { summary: 'string' },
      },
    },
    color: {
      control: { type: 'string' },
      description: 'Tag color',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      control: { type: 'function' },
      description: 'Tag click event',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Item: Story = {
  args: {
    tag: '테스트',
  },
}
