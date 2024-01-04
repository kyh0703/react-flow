import Header from '@/components/organisms/Header'
import Separator from '@/components/atoms/Separator'
import Footer from '@/components/organisms/Footer'

type LayoutProps = {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Separator />
      <main>{children}</main>
      <Separator />
      <div tw="p-1">
        <Footer />
      </div>
    </>
  )
}

export default Layout
