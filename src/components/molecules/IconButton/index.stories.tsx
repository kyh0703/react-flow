import { Meta, StoryObj } from '@storybook/react'

import { SearchIcon } from '@/components/atoms/Icon'
import IconButton from '.'

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: 'Molecules/IconButton',
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'object' },
      description: '아이콘',
      table: {
        type: { summary: 'object' },
      },
    },
    content: {
      control: { type: 'text' },
      description: '내용',
      table: {
        type: { summary: 'string' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const SearchBadgeIcon: Story = {
  args: {
    icon: <SearchIcon size={30} />,
    content: '구글로 로그인',
  },
}
