import { Meta, StoryObj } from '@storybook/react'
import tw from 'twin.macro'

import FlowNode from '.'

const meta: Meta<typeof FlowNode> = {
  component: FlowNode,
  title: 'Atoms/FlowNode',
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof FlowNode>

export const Node: Story = {
  render: (args) => {
    return (
      <div tw="w-[500px] h-[500px]">
        <FlowNode />
      </div>
    )
  },
}
