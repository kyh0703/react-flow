import tw, { styled, css } from 'twin.macro'

import Badge from '@/components/atoms/Badge'

const BadgeIconWrapper = styled.span<{ size: number }>(({ size }) => [
  tw`relative flex items-center`,
  css`
    width: ${size}px;
    height: ${size}px;
  `,
])

const BadgeWrapper = styled.div(tw`absolute -top-[7px] -right-[10px]`)

type BadgeIconProps = {
  icon: React.ReactNode
  badgeContent?: number
  badgeBackgroundColor: string
  size?: number
}

const BadgeIcon = ({
  icon,
  size = 24,
  badgeContent,
  badgeBackgroundColor,
}: BadgeIconProps) => {
  return (
    <BadgeIconWrapper size={size}>
      {icon}
      {badgeContent && (
        <BadgeWrapper data-testid="badge-wrapper">
          <Badge
            content={`${badgeContent}`}
            backgroundColor={badgeBackgroundColor}
          />
        </BadgeWrapper>
      )}
    </BadgeIconWrapper>
  )
}

export default BadgeIcon
