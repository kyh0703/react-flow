import tw, { styled, css } from 'twin.macro'

type InputProps = {
  placeholder?: string
  hasError?: boolean
  hasBorder?: boolean
}

const Input = styled.input<InputProps>(({ hasError, hasBorder }) => [
  tw`border-none`,
  tw`box-border pt-3 pr-3 pb-3 pl-2`,
  tw`w-full h-10 leading-5`,
  tw`focus:outline-none focus:ring-0`,
  tw`placeholder:text-placeholder`,

  hasBorder && tw`border border-solid rounded-md`,
  hasError ? tw`border-danger` : tw`border-border`,

  css`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
  `,
])

export default Input
