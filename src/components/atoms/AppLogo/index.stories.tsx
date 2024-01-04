import { Meta, StoryObj } from '@storybook/react'

import AppLogo from '.'

const meta: Meta<typeof AppLogo> = {
  component: AppLogo,
  title: 'Atoms/AppLogo',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AppLogo>

export const Logo: Story = {}
