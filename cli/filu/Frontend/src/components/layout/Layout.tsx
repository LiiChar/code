import React, { FC, PropsWithChildren } from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout