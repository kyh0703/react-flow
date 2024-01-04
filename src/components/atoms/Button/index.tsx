'use client'

import tw, { styled, css } from 'twin.macro'

export type ButtonVaraints = 'primary' | 'secondary' | 'danger'

export type ButtonProps = {
  varaints?: ButtonVaraints
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  ({ varaints = 'primary', disabled }) => [
    css`
      ${varaints === 'primary' &&
      tw`text-white bg-primary border-none hover:bg-primaryDark disabled:bg-primary`}
      ${varaints === 'secondary' &&
      tw`text-white bg-secondary border-none hover:bg-secondaryDark disabled:bg-secondary`}
    ${varaints === 'danger' &&
      tw`text-white bg-danger border-none hover:border-t-dangerDark disabled:bg-danger`}
    `,

    disabled ? tw`opacity-50` : tw`opacity-100`,
    tw`cursor-pointer outline-0 no-underline rounded border-none`,
    tw`pt-1 pr-1 pb-1 pl-1`,
    tw`inline-block text-center`,
  ],
)

export default Button
