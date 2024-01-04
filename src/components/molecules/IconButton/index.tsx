import tw, { styled, css } from 'twin.macro'

import Button from '@/components/atoms/Button'
import React from 'react'

const IconButtonWrapper = styled(Button)(({ color }) => [
  tw`flex items-center w-full border border-solid border-border`,
  css`
    background-color: #fff;
    color: #000;
  `,
])

type IconButtonProps = {
  icon: React.ReactNode
  content: string
  color?: string
  backgroundColor?: string
  onClick?: () => void
}

const IconButton = ({
  icon,
  content,
  color,
  backgroundColor,
  onClick,
  ...rest
}: IconButtonProps) => {
  return (
    <IconButtonWrapper onClick={onClick} {...rest}>
      {icon}
      {content}
    </IconButtonWrapper>
  )
}

export default IconButton
