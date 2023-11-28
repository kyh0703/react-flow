import { Meta, StoryObj } from '@storybook/react'

import {
  SearchIcon,
  CloudUploadIcon,
  PersonOutlineIcon,
  GithubIcon,
  FacebookIcon,
  GoogleIcon,
} from '.'

const meta: Meta<typeof SearchIcon> = {
  component: SearchIcon,
  title: 'Atoms/IconButton',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'string' },
      description: 'Icon color',
      table: {
        type: { summary: 'ThemeColors' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Icon background color',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: { type: 'number' },
      defaultValue: 24,
      description: 'Icon size',
      table: {
        type: { summary: 'number' },
      },
    },
    onClick: {
      description: 'Icon click event',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchIcon>

export const Normal: Story = {
  render: args => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
      <GoogleIcon {...args} />
      <GithubIcon {...args} />
      <FacebookIcon {...args} />
    </>
  ),
}
