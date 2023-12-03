import { Meta, StoryObj } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import tw, { styled, css } from 'twin.macro'

import Dropzone from '@/components/molecules/Dropzone'
import ImagePreview from '.'

const meta: Meta<typeof ImagePreview> = {
  component: ImagePreview,
  title: 'Molecules/ImagePreview',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '이미지 URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '대체 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'text' },
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'text' },
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    onRemove: {
      description: '삭제 버튼을 클릭했을 떄의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ImagePreview>

type Image = {
  file?: File
  src?: string
}

export const WithDropzone: Story = {
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [files, setFiles] = useState<File[]>([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [images, setImages] = useState<Image[]>([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const newImages = [...images]

      for (const f of files) {
        const index = newImages.findIndex((img: Image) => img.file === f)
        if (index == -1) {
          newImages.push({ file: f, src: URL.createObjectURL(f) })
        }
      }
      setImages(newImages)
    }, [files, images])

    const handleRemove = (src: string) => {
      const image = images.find(img => img.src === src)
      if (image !== undefined) {
        setImages(images => images.filter(img => img.src !== image.src))
        setFiles(files => files.filter((file: File) => file !== image.file))
      }

      args && args.onRemove && args.onRemove(src)
    }

    return (
      <div tw="w-[288px] grid gap-2.5 grid-cols-1">
        <Dropzone value={files} onDrop={fileList => setFiles(fileList)} />
        {images.map((image, i) => (
          <ImagePreview
            key={i}
            src={image.src}
            width="100px"
            {...args}
            onRemove={handleRemove}
          />
        ))}
      </div>
    )
  },
}
