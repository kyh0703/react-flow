import type { Meta, StoryObj } from '@storybook/react'
import Button from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    varaints: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' },
      description: '버튼의 변형',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼의 비활성화 플래그',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    varaints: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    varaints: 'secondary',
    children: 'Secondary Button',
  },
}

export const Danger: Story = {
  args: {
    varaints: 'danger',
    children: 'Danger Button',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
}
