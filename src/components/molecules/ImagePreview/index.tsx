import tw, { styled, css } from 'twin.macro'

import { CloseIcon } from '@/components/atoms/Icon'

const ImagePreviewContainer = styled.div<{ height?: string; width?: string }>(
  ({ height, width }) => [
    tw`relative`,
    css`
      height: ${height};
      width: ${width};
    `,
  ],
)

const CloseBox = styled.div([
  tw`absolute`,
  tw`flex items-center justify-center`,
  tw`top-0 right-0 w-[30px] h-[30px] cursor-pointer rounded-r-lg`,
])

type ImagePreviewProps = {
  /**
   * 이미지 URL
   */
  src?: string
  /**
   * 대체 텍스트
   */
  alt?: string
  /**
   * 세로폭
   */
  height?: string
  /**
   * 가로폭
   */
  width?: string
  /**
   * 삭제 버튼을 클릭했을 떄의 이벤트 핸들러
   */
  onRemove?: (src: string) => void
}

const ImagePreview = ({
  src,
  alt,
  height,
  width,
  onRemove,
}: ImagePreviewProps) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)
    return false
  }

  return (
    <ImagePreviewContainer height={height} width={width}>
      <img src={src} alt={alt} height={height} width={width} />
      <CloseBox onClick={handleCloseClick}>
        <CloseIcon size={24} color="#fff" />
      </CloseBox>
    </ImagePreviewContainer>
  )
}

export default ImagePreview
