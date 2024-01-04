import { Meta, StoryObj } from '@storybook/react'

import {
  SearchIcon,
  CloudUploadIcon,
  PersonOutlineIcon,
  GithubIcon,
  FacebookIcon,
  GoogleIcon,
  DarkModeIcon,
  LightModeIcon,
  EmojiPeopleIcon,
  AccountBoxRounedIcon,
  LinkedInIcon,
  EmailIcon,
  NavigateBeforeIcon,
  NavigateNextIcon,
  KeyboardDoubleArrowLeftIcon,
  KeyboardDoubleArrowRightIcon,
} from '.'

const meta: Meta<typeof SearchIcon> = {
  component: SearchIcon,
  title: 'Atoms/Icon',
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
  render: (args) => (
    <>
      <SearchIcon {...args} />
      <CloudUploadIcon {...args} />
      <PersonOutlineIcon {...args} />
      <GoogleIcon {...args} />
      <GithubIcon {...args} />
      <FacebookIcon {...args} />
      <DarkModeIcon {...args} />
      <LightModeIcon {...args} />
      <EmojiPeopleIcon {...args} />
      <AccountBoxRounedIcon {...args} />
      <LinkedInIcon {...args} />
      <EmailIcon {...args} />
      <NavigateBeforeIcon {...args} />
      <NavigateNextIcon {...args} />
      <KeyboardDoubleArrowLeftIcon {...args} />
      <KeyboardDoubleArrowRightIcon {...args} />
    </>
  ),
}
