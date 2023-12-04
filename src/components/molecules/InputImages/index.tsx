import react, { useCallback, useMemo } from 'react'
import tw, { styled, css } from 'twin.macro'

import Dropzone from '../Dropzone'
import ImagePreview from '../ImagePreview'

const InputImagesContainer = styled.div([
  tw`flex flex-col`,

  css`
    & > *:not(:first-child) {
      margin-top: 8px;
    }
  `,
])

export type FileData = {
  id?: string
  src?: string
  file?: File
  selected?: boolean
  chosen?: boolean
}

type InputImagesProps = {
  name?: string
  images: FileData[]
  maximunNumber?: number
  hasError?: boolean
  width?: string
  height?: string
  onChange: (images: FileData[]) => void
}

const InputImages = ({
  images,
  maximunNumber,
  name,
  hasError,
  width = '100%',
  height = '260px',
  onChange,
}: InputImagesProps) => {
  const files = useMemo(
    () =>
      images
        .filter((img: FileData) => img.file)
        .map((img: FileData) => img.file as File),
    [images],
  )
  const isDropzoneDisplay =
    !maximunNumber || images.length < maximunNumber ? 'block' : 'none'

  const onRemove = useCallback(
    (src: string) => {
      const image = images.find((image: FileData) => image.src === src)
      const newImages = images.filter((image: FileData) => image.src !== src)

      if (image) {
        if (image.file && image.src) {
          URL.revokeObjectURL(image.src)
          delete image.src
        }

        onChange && onChange(newImages)
      }
    },
    [images, onChange],
  )

  const onDrop = useCallback(
    (files: File[]) => {
      const newImages = []

      for (const file of files) {
        const image = images.find((image: FileData) => image.file === file)

        if (
          !image &&
          (!maximunNumber || images.length + newImages.length < maximunNumber)
        ) {
          newImages.push({ file, src: URL.createObjectURL(file) })
        }

        onChange && onChange(newImages)
      }
    },
    [images, maximunNumber, onChange],
  )

  return (
    <InputImagesContainer>
      {images &&
        images.map((image, index) => {
          return (
            <ImagePreview
              key={index}
              alt={image.id}
              src={image.src}
              height={height}
              onRemove={onRemove}
            />
          )
        })}
      <div style={{ display: isDropzoneDisplay }}>
        <Dropzone
          acceptedFileTypes={[
            'image/gif',
            'image/jpeg',
            'image/jpg',
            'image/png',
          ]}
          name={name}
          height={height}
          width={width}
          value={files}
          hasError={hasError}
          onDrop={onDrop}
        />
      </div>
    </InputImagesContainer>
  )
}

export default InputImages
