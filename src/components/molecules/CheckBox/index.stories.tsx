import { Meta, StoryObj } from '@storybook/react'

import CheckBox from '.'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  title: 'Molecules/CheckBox',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: '표시 라벨',
      table: {
        type: { summary: 'text' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      description: '체크 여부',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onChange: {
      description: '체크박스 변경 이벤트',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CheckBox>

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
}
