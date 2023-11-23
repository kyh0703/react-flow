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

type IconWrapperProps = {
  size: number
  cursor?: string
  background?: string
}

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
    const { onClick, className, color, size = 24, ...rest } = props
    const cursor = onClick ? 'pointer' : 'default'

    return (
      <div
        style={{
          fontSize: `${size}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        className={`
          inline-block
          cursor-${cursor}
        `}
        {...rest}
      >
        <Icon
          className={className}
          fontSize="inherit"
          color="inherit"
          onClick={onClick}
        />
      </div>
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
