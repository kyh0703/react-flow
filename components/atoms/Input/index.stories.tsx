import { Meta, StoryObj } from '@storybook/react'

import Input from './index'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Atmos/Input',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder',
      table: {
        type: { summary: 'string' },
      },
    },
    hasBorder: {
      control: { type: 'boolean' },
      description: 'Input border',
      table: {
        type: { summary: 'boolean' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      description: 'Input error',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Normal: Story = {}

export const Error: Story = {
  args: {
    hasError: true,
  },
}
