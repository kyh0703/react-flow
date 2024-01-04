import { Meta, StoryObj } from '@storybook/react'

import Footer from '.'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Organisms/Footer',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Footer>

export const Standard: Story = {}
