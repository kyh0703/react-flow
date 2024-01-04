'use client'

import tw, { styled, css } from 'twin.macro'

const BadgeWrapper = styled.div<{ backgroundColor: string }>(
  ({ backgroundColor }) => [
    tw`rounded-[20px] min-w-[20px] h-[20px]`,
    tw`inline-flex items-center justify-center`,
    css`
      background-color: ${backgroundColor};
    `,
  ],
)

const BadgeText = styled.p(tw`text-white text-xs select-none`)

type BadgeProps = {
  content: string
  backgroundColor: string
}

const Badge = ({ content, backgroundColor }: BadgeProps) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor}>
      <BadgeText>{content}</BadgeText>
    </BadgeWrapper>
  )
}

export default Badge
