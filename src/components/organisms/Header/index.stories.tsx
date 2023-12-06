import { Meta, StoryObj } from '@storybook/react'

import Header from '.'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Organisms/Header',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Header>

export const Standard: Story = {}
