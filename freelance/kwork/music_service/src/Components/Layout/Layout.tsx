import {PropsWithChildren, FC} from 'react'
import { LayoutS, MainWrapperS } from './Layout.styled'
import Header from './Header/Header'
import Side from './Aside/Aside'

const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
    <LayoutS>
            <Side/>
        <MainWrapperS>
            <Header/>
            {children}
        </MainWrapperS>
    </LayoutS>
  )
}

export default Layout