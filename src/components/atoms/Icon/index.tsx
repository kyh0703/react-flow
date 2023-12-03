import {
  Search,
  PersonOutline,
  ShoppingCart,
  CheckBoxOutlineBlank,
  CheckBox,
  Cancel,
  CloudUpload,
  Close,
  GitHub,
  Person,
  Facebook,
  Google,
} from '@mui/icons-material'
import SvgIcon from '@mui/material/SvgIcon'
import tw, { styled, css } from 'twin.macro'

import { colors } from '@/themes'

type IconWrapperProps = {
  size: number
  cursor?: string
  color?: string
  backgroundColor?: string
}

const IconWrapper = styled.div<IconWrapperProps>(
  ({ size, cursor, color, backgroundColor }) => [
    tw`inline-block`,
    css`
      color: ${color ? color : colors.icon};
      background-color: ${backgroundColor};
      font-size: ${size}px;
      width: ${size}px;
      height: ${size}px;
      cursor: ${cursor ? cursor : 'pointer'};
      svg {
        display: block;
      }
    `,
  ],
)

export type IconButtonProps = {
  onClick?: React.MouseEventHandler<SVGSVGElement>
  color?: string
  className?: string
  backgroundColor?: string
  size?: number
}

function withIconStyle(
  Icon: typeof SvgIcon,
): React.ComponentType<IconButtonProps> {
  const IconWithStype = (props: IconButtonProps) => {
    const { onClick, className, size = 24, ...rest } = props
    const cursor = onClick ? 'pointer' : ''

    return (
      <IconWrapper cursor={cursor} size={size} {...rest}>
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </IconWrapper>
    )
  }

  return IconWithStype
}

export const CloseIcon = withIconStyle(Close)
export const SearchIcon = withIconStyle(Search)
export const CloudUploadIcon = withIconStyle(CloudUpload)
export const CancelIcon = withIconStyle(Cancel)
export const CheckBoxOutlineBlankIcon = withIconStyle(CheckBoxOutlineBlank)
export const CheckBoxIcon = withIconStyle(CheckBox)
export const PersonIcon = withIconStyle(Person)
export const GoogleIcon = withIconStyle(Google)
export const GithubIcon = withIconStyle(GitHub)
export const FacebookIcon = withIconStyle(Facebook)
export const PersonOutlineIcon = withIconStyle(PersonOutline)
export const ShoppingCartIcon = withIconStyle(ShoppingCart)
