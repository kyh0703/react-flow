import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'

import InputImages, { FileData } from '.'

const meta: Meta<typeof InputImages> = {
  component: InputImages,
  title: 'Molecules/InputImages',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InputImages>

const Container = styled.div(tw`w-[288px] grid gap-2.5 grid-cols-1`)

export const WithDropzone: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [images, setImages] = useState<FileData[]>([])

    const handleChange = (images: FileData[]) => {
      setImages(images)
    }

    return (
      <Container>
        <InputImages
          images={images}
          onChange={handleChange}
          maximunNumber={2}
        />
      </Container>
    )
  },
}
