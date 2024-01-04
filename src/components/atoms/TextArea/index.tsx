'use client'

import React, { useCallback, useState } from 'react'
import tw, { styled } from 'twin.macro'

const StyledTextArea = styled.textarea<{ hasError?: boolean }>(
  ({ hasError }) => [
    tw`rounded box-border outline-none w-full text-sm leading-6`,
    tw`pt-[9px] pr-[12px] pb-[10px] pl-[12px]`,
    tw`resize-none overflow-auto h-auto`,
    tw`placeholder:text-placeholder`,
    tw`border border-solid`,
    hasError ? tw`border-danger` : tw`border-border`,
  ],
)

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 최소 행 수
   */
  minRows?: number
  /**
   * 최대 행 수
   */
  maxRows?: number
  /**
   * 변형 에러 플래그
   */
  hasError?: boolean
}

const TextArea = (props: TextAreaProps) => {
  const {
    rows = 5,
    minRows = 5,
    maxRows = 10,
    children,
    hasError,
    onChange,
    ...rest
  } = props
  const [textareaRows, setTextareaRows] = useState(Math.min(rows, minRows))

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const textareaLineHeight = 24
      const previousRows = e.target.rows

      e.target.rows = minRows // 행 수 초기화

      // 현재 행 수
      const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight)

      if (currentRows === previousRows) {
        e.target.rows = currentRows
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows
        e.target.scrollTop = e.target.scrollHeight
      }

      // 최대를 넘지 않도록 행 수 초기화
      setTextareaRows(currentRows < maxRows ? currentRows : maxRows)
      onChange && onChange(e)
    },
    [onChange, minRows, maxRows],
  )

  return (
    <StyledTextArea
      hasError={hasError}
      onChange={handleChange}
      aria-label={rest.placeholder}
      rows={textareaRows}
      {...rest}
    >
      {children}
    </StyledTextArea>
  )
}

export default TextArea
