'use client'

import tw, { styled, css, theme } from 'twin.macro'

const TagWrapper = styled.div<{
  color?: string
  hasBorder?: boolean
}>(({ color, hasBorder }) => [
  tw`w-fit inline-block mr-2 cursor-pointer hover:opacity-50 text-sm `,

  hasBorder && tw`border border-solid rounded-full border-border`,
  css`
    color: ${color ? color : theme`colors.primary`};
  `,
])

type TagProps = {
  tag: string
  hasBorder?: boolean
  color?: string
  onClick?: (tag: string) => void
}

const Tag = ({ tag, color, onClick, ...rest }: TagProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    onClick && onClick(tag)
  }

  return (
    <TagWrapper color={color} onClick={handleClick} {...rest}>
      #{tag}
    </TagWrapper>
  )
}

export default Tag
