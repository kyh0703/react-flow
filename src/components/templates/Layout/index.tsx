import Separator from '@/components/atoms/Separator'
import tw from 'twin.macro'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div>header</div>
      <main>{children}</main>
      <Separator />
      <div tw="p-1">{/* footer */}</div>
    </>
  )
}

export default Layout
