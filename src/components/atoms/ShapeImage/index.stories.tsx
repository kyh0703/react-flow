import { Meta, StoryObj } from '@storybook/react'
import ShapeImage from './index'

const meta: Meta<typeof ShapeImage> = {
  component: ShapeImage,
  title: 'Atoms/ShapeImage',
  tags: ['autodocs'],
  argTypes: {
    shape: {
      options: ['circle', 'square'],
      control: { type: 'radio' },
      defaultValue: 'square',
      description: 'Image shape',
      title: {
        type: { summary: 'circle | sqaure' },
        defaultValue: { summary: 'square' },
      },
    },
    src: {
      control: { type: 'text' },
      description: 'Image URL',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: 'Image width',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 320,
      description: 'Image height',
      table: {
        type: { summary: 'number' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ShapeImage>

export const Circle: Story = {
  args: {
    src: '/images/sample/1.jpg',
    shape: 'circle',
    width: 320,
    height: 320,
  },
}

export const Sqaure: Story = {
  args: {
    src: '/images/sample/1.jpg',
    shape: 'square',
    width: 320,
    height: 320,
  },
}
