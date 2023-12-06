import Link from 'next/link'
import tw, { styled, css } from 'twin.macro'

import Button from '@/components/atoms/Button'
import { LightModeIcon, DarkModeIcon } from '@/components/atoms/Icon'

const HeaderRoot = styled.header([
  tw`h-[88px] border-none`,
  tw`border-b border-solid border-border`,
])

const Nav = styled.div([
  tw`flex h-[56px] items-center`,
  css`
    & > span:not(:first-child) {
      margin-left: 8px;
    }
  `,
])

const NavLink = styled.span([tw`inline pr-2 text-2xl`])

const Anchor = styled.span([tw`cursor-pointer hover:text-[#570e1]`])
const Header = () => {
  return (
    <HeaderRoot>
      <div tw="flex justify-between pl-1 pr-1">
        <Nav>{/* AppLogo */}</Nav>
        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>About</NavLink>
          <DarkModeIcon size={30} />
        </Nav>
      </div>
    </HeaderRoot>
  )
}

export default Header
