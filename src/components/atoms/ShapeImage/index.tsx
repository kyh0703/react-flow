import Image, { ImageProps } from 'next/image'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

const ShapeImage = (props: ShapeImageProps) => {
  const { shape, src, alt, ...imageProps } = props
  return (
    <Image
      src={src}
      alt={alt}
      className={`
        ${shape === 'circle' && 'rounded-full'}
      `}
      {...imageProps}
    />
  )
}

export default ShapeImage
