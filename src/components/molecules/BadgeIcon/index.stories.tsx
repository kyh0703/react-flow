import { Meta, StoryObj } from '@storybook/react'

import {
  PersonIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@/components/atoms/Icon'
import BadgeIcon from '.'

const meta: Meta<typeof BadgeIcon> = {
  component: BadgeIcon,
  title: 'Molecules/BadgeIcon',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: '아이콘',
      table: {
        type: { summary: 'object' },
      },
    },
    badgeContent: {
      control: { type: 'number' },
      description: '배지 내용',
      table: {
        type: { summary: 'text' },
      },
    },
    badgeBackgroundColor: {
      control: { type: 'color' },
      description: '배지 색상',
      table: {
        type: { summary: 'color' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof BadgeIcon>

export const SearchBadgeIcon: Story = {
  args: {
    icon: <SearchIcon />,
    badgeContent: 1,
    badgeBackgroundColor: '#f87171',
  },
}

export const PersonBadgeIcon: Story = {
  args: {
    icon: <PersonIcon />,
    badgeContent: 2,
    badgeBackgroundColor: '#fbbf24',
  },
}

export const ShoppingCarBadgeIcon: Story = {
  args: {
    icon: <ShoppingCartIcon />,
    badgeContent: 3,
    badgeBackgroundColor: '#34d399',
  },
}
