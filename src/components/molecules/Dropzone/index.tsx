import React, { useState, useRef, useCallback, useEffect } from 'react'
import tw, { styled, css } from 'twin.macro'
import { CloudUploadIcon } from '@/components/atoms/Icon'

const isDragEvt = (value: any): value is React.DragEvent => {
  return !!value.dataTransfer
}

const isInput = (value: EventTarget | null): value is HTMLInputElement => {
  return value !== null
}

/**
 * 이벤트로부터 입력된 파일을 얻는다
 * @param e DragEventChangeEvent
 * @return File의 배열
 */
const getFilesFromEvent = (e: React.DragEvent | React.ChangeEvent) => {
  if (isDragEvt(e)) {
    return Array.from(e.dataTransfer.files)
  }

  if (isInput(e.target) && e.target.files) {
    return Array.from(e.target.files)
  }

  return []
}

type FileType =
  | 'image/png'
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/gif'
  | 'video/mp4'
  | 'video/quicktime'
  | 'application/pdf'

type DropzoneProps = {
  /**
   * 입력 파일
   */
  value?: File[]
  /**
   * <input />의 name 속성
   */
  name?: string
  /**
   * 허가된 파일 타입
   */
  acceptedFileTypes?: FileType[]
  /**
   * 가로폭
   */
  width?: number | string
  /**
   * 세로폭
   */
  height?: number | string
  /**
   * 에러 플래그
   */
  hasError?: boolean
  /**
   * 파일이 드롭 입력되었을 때의 이벤트 핸들러
   */
  onDrop?: (files: File[]) => void
  /**
   * 파일이 입력되었을 때의 이벤트 핸들러
   */
  onChange?: (files: File[]) => void
}

type DropzoneRootProps = {
  isFocused?: boolean
  hasError?: boolean
  width: number | string
  height: number | string
}

// 드롭존 바깥쪽의 형태
const DropzoneRoot = styled.div<DropzoneRootProps>(
  ({ isFocused, hasError, width, height }) => [
    tw`border border-dashed border-border`,
    hasError && tw`border-danger`,
    isFocused && tw`border-primary`,
    tw`rounded-lg cursor-pointer`,

    css`
      width: ${typeof width === 'number' ? `${width}px` : width};
      height: ${typeof height === 'number' ? `${height}px` : height};
    `,
  ],
)

// 드롭존 내용
const DropzoneContent = styled.div<{
  width: number | string
  height: number | string
}>(({ width, height }) => [
  tw`flex flex-col items-center justify-center`,
  css`
    width: ${typeof width === 'number' ? `${width}px;` : width};
    height: ${typeof height === 'number' ? `${height}px;` : height};
  `,
])

const DropzoneInputFile = styled.input(tw`hidden`)

/**
 * 드롭존
 * 파일의 입력을 받는다
 */
const Dropzone = ({
  onDrop,
  onChange,
  value = [],
  name,
  acceptedFileTypes = [],
  hasError,
  width = '100%',
  height = '200px',
}: DropzoneProps) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false)

    const files = value.concat(
      getFilesFromEvent(e).filter(f =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )

    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  // 드래그 상태의 마우스 포인터가 범위 안에 드롭되었을 때
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)

    const files = value.concat(
      getFilesFromEvent(e).filter(f =>
        acceptedFileTypes.includes(f.type as FileType),
      ),
    )

    if (files.length == 0) {
      return window.alert(
        `다음 파일 포맷은 지정할 수 없습니다. ${acceptedFileTypes.join(' ,')}`,
      )
    }

    onDrop && onDrop(files)
    onChange && onChange(files)
  }

  // 드래그 상태의 마우스 포인터가 범위 안에 있을 때
  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  // 드래그 상태의 마우스 포인터가 범위 밖으로 사라졌을 때 포커스를 없앤다
  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(false)
  }, [])

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFocused(true)
  }, [])

  const handleClick = () => {
    inputRef.current?.click()
  }

  useEffect(() => {
    if (inputRef.current && value && value.length == 0) {
      inputRef.current.value = ''
    }
  }, [value])

  return (
    <>
      {/* 드래그 앤 드롭 이벤트를 관리한다 */}
      <DropzoneRoot
        ref={rootRef}
        isFocused={isFocused}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
        onClick={handleClick}
        width={width}
        height={height}
        data-test-id="dropzone"
      >
        <DropzoneInputFile
          ref={inputRef}
          type="file"
          name={name}
          accept={acceptedFileTypes.join(',')}
          onChange={handleChange}
          multiple
        />
        <DropzoneContent width={width} height={height}>
          <CloudUploadIcon size={48} />
          <span tw="text-center">기기에서 업로드</span>
        </DropzoneContent>
      </DropzoneRoot>
    </>
  )
}

Dropzone.defaultProps = {
  accetedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  hasError: false,
}

export default Dropzone
