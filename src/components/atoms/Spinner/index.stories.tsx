import { Meta, StoryObj } from '@storybook/react'

import Spinner from '.'

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Atoms/Spinner',
  tags: ['autodocs'],
  argTypes: {
    size: {},
    strokeWidth: {},
    isAutoCentering: {
      control: { type: 'boolean' },
      description: 'Spinner auto centering',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Normal: Story = {
  render: (args) => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
      <Spinner {...args} />
    </div>
  ),
}
