import Image from 'next/image'
import { Meta, StoryObj } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import Button from '@/components/atoms/Button'

import Dropzone from '.'

const meta: Meta<typeof Dropzone> = {
  component: Dropzone,
  title: 'Molecules/Dropzone',
  tags: ['autodocs'],
  argTypes: {
    height: {
      control: { type: 'number' },
      description: '세로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '가로폭',
      table: {
        type: { summary: 'number' },
      },
    },
    hasError: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '변형 에러 플래그',
      table: {
        type: { summary: 'boolean' },
      },
    },
    acceptedFileTypes: {
      options: {
        control: { type: 'array' },
        description: '받은 파일 타입',
        table: {
          type: { summary: 'array' },
        },
      },
    },
    onDrop: {
      description: '파일이 드롭 입력되었을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
    onChange: {
      description: '파일이 입력되었을 때의 이벤트 핸들러',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropzone>

export const WithControl: Story = {
  args: {
    height: 200,
    width: '100%',
    acceptedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    hasError: false,
  },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [files, setFiles] = useState<File[]>([])
    const handleDrop = (files: File[]) => {
      setFiles(files)
      args && args.onDrop && args.onDrop(files)
    }

    const fetchData = async () => {
      const res = await fetch('/images/sample/1.jpg')
      const blob = await res.blob()
      const file = new File([blob], '1.png', blob)
      setFiles([...files, file])
    }

    const clearImages = () => {
      setFiles([])
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      fetchData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <>
        <div tw="mb-0.5">
          <Dropzone {...args} value={files} onDrop={handleDrop} />
        </div>
        <div tw="mb-0.5">
          <Button onClick={fetchData}>이미지를 추가</Button>
        </div>
        <div tw="mb-1">
          <Button onClick={clearImages}>모든 이미지를 클리어</Button>
        </div>
        <div>
          {files.map((f, i) => (
            <Image
              key={i}
              width={100}
              height={100}
              src={URL.createObjectURL(f)}
              alt="sample"
            />
          ))}
        </div>
      </>
    )
  },
}
