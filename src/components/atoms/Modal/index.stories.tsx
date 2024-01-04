import { Meta, StoryObj } from '@storybook/react'

import Modal from '.'

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Atoms/Modal',
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'Modal title',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: { type: 'text' },
      description: 'Modal description',
      table: {
        type: { summary: 'string' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Modal background color',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Modal width',
      table: {
        type: { summary: 'string' },
      },
    },
    isVisible: {
      control: { type: 'boolean' },
      description: 'Modal visibility',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Template: Story = {}
