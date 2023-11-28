import tw, { styled, css } from 'twin.macro'

type SeparatorProps = {
  children?: React.ReactNode
}

const getMargin = ({ children }: SeparatorProps) => (children ? '.50em' : '0')

const SeparatorWrap = styled.div<SeparatorProps>(({ children }) => [
  tw`h-6 flex items-center text-[#e5e7eb]`,
  css`
    &::before,
    &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #e5e7eb;
    }

    &::before {
      margin-right: ${getMargin({ children })};
    }

    &::after {
      margin-left: ${getMargin({ children })};
    }
  `,
])

const Separator = ({ children }: SeparatorProps) => (
  <SeparatorWrap>{children}</SeparatorWrap>
)

export default Separator
