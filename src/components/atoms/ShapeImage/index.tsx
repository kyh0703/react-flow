'use client'

import Image, { ImageProps } from 'next/image'
import tw, { styled } from 'twin.macro'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ImageWithShape = styled(Image)<{ shape?: ImageShape }>(({ shape }) => [
  shape === 'circle' ? tw`rounded-full` : tw`rounded-none`,
])

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props
  return <ImageWithShape shape={shape} {...imageProps} />
}

export default ShapeImage
