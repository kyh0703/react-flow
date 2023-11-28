import Separator from '@/components/atoms/Separator'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* Header */}
      <div>header</div>
      <main>{children}</main>
      <Separator />
      <div tw="">footer</div>
    </>
  )
}

export default Layout
