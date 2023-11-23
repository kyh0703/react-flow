import { Meta, StoryObj } from '@storybook/react'
import ReactLoader from '.'

const meta: Meta<typeof ReactLoader> = {
  component: ReactLoader,
  title: 'Atoms/ReactLoader',
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Loader width',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      description: 'Loader height',
      defaultValue: 320,
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ReactLoader>

export const Normal: Story = {}
