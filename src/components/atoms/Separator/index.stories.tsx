import { Meta, StoryObj } from '@storybook/react'
import Separator from '.'

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Atoms/Separator',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Separator>

export const Standard: Story = {
  render: () => (
    <>
      <Separator>or</Separator>
      <Separator>and</Separator>
    </>
  ),
}
