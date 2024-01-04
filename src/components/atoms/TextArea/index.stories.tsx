import { Meta, StoryObj } from '@storybook/react'
import TextArea from '.'

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: 'Atoms/TextArea',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: {
        type: { summary: 'string' },
      },
    },
    rows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: 'Number of rows',
    },
    minRows: {
      control: { type: 'number' },
      defaultValue: 5,
      description: 'Minimum number of rows',
      table: {
        type: { summary: 'number' },
      },
    },
    maxRows: {
      control: { type: 'number' },
      defaultValue: 10,
      description: 'Maximum number of rows',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Error flag',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: 'Input change event',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Normal: Story = {}

export const Error: Story = {
  args: {
    hasError: true,
  },
}
