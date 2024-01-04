import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import FilterGroup from '.'

const meta: Meta<typeof FilterGroup> = {
  component: FilterGroup,
  title: 'Molecules/FilterGroup',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '제목',
      table: {
        type: { summary: 'string' },
      },
    },
    items: {
      control: { type: 'array' },
      description: '필터 아이템',
      table: {
        type: { summary: 'array' },
      },
    },
    onChange: {
      description: '필터 변경 이벤트',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterGroup>

export const Standard: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string[]>([])
    const handleChange = (value: string[]) => {
      setValue(value)
      args && args.onChange && args.onChange(value)
    }

    return <FilterGroup value={value} onChange={handleChange} {...args} />
  },
  args: {
    title: 'All category',
    items: [
      { label: 'clothes', name: 'clothes' },
      { label: 'books', name: 'books' },
      { label: 'shose', name: 'shose' },
    ],
    onChange: (value: string[]) => console.log(value),
  },
}
