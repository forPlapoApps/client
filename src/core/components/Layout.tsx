import Head from "next/head"
import { ReactNode } from "react"
import Header from "./Header"

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>

      </Head>

      <Header />
      <div className="max-w-screen-xl mx-auto items-center gap-8 px-4 sm:px-6 lg:px-8 py-4">
        {children}
      </div>
    </>
  )
}

export default Layout
