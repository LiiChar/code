import { AsideS, NameS, WrapperContentS } from './Aside.styled'
import NavigationBar from './NavigationBar/NavigationBar'
import {memo} from 'react' 

const Side = memo(() => {
  return (
    <AsideS>
      <WrapperContentS>
        <NameS>
          skypro
        </NameS>
        <NavigationBar/>
      </WrapperContentS>
    </AsideS>
  )
})

export default Side