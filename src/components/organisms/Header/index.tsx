'use client'

import Link from 'next/link'
import tw, { styled, css } from 'twin.macro'

import {
  LightModeIcon,
  DarkModeIcon,
  EmojiPeopleIcon,
} from '@/components/atoms/Icon'
import AppLogo from '@/components/atoms/AppLogo'
import Clock from '@/components/atoms/Clock'

const HeaderRoot = styled.header(tw`h-[56px] border-none`)

const Nav = styled.div(() => [
  tw`flex h-[56px] items-center text-base`,
  css`
    & > *:not(:first-child) {
      margin-left: 9px;
    }
  `,
])

const NavLink = styled.span(tw`inline pr-2 text-xl cursor-pointer`)

const Header = () => {
  return (
    <HeaderRoot>
      <div tw="flex justify-between pl-1 pr-1">
        <Nav>
          <NavLink>
            <Link href="/">
              <AppLogo />
            </Link>
          </NavLink>
          <NavLink>blog</NavLink>
          <NavLink>category</NavLink>
        </Nav>
        <Nav>
          <Clock />
          <EmojiPeopleIcon size={26} />
          <DarkModeIcon size={26} />
        </Nav>
      </div>
    </HeaderRoot>
  )
}

export default Header
