import { Meta, StoryObj } from '@storybook/react'

import Layout from '.'

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: 'Templates/Layout',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Layout>

export const Standard: Story = {}
