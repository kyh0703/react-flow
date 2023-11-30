import tw, { styled } from 'twin.macro'

import { CloseIcon } from '@/components/atoms/Icon'

const ImagePreviewContainer = styled.div(tw`relative`)

const CloseBox = styled.div(
  tw`flex absolute top-0 right-0 w-[30px] h-[30px] cursor-pointer`,
)

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
