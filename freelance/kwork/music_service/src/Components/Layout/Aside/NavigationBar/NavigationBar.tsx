import { useState, memo } from 'react'
import { FiMenu } from 'react-icons/fi'
import { BsMoon, BsSun } from 'react-icons/bs'
import { ItemNavS, NavigationS } from '../Aside.styled'
import { ThemeColor, useTheme } from '../../../../Context/ThemeContext'

const NavigationBar = memo(() => {
    const [visible, setVisible] = useState(false)
    const { isDark, changeTheme } = useTheme()

    const handleVisible = () => {
        setVisible(prev => !prev);
    }

    return (
        <>
            <div onClick={handleVisible}>
                <FiMenu />
            </div>
            {
                visible &&
                <NavigationS>
                    <ItemNavS >
                        Главная
                    </ItemNavS>
                    <ItemNavS>
                        Мои треки
                    </ItemNavS>
                    <ItemNavS>
                        Выйти
                    </ItemNavS>
                    <div onClick={() => changeTheme(isDark ? ThemeColor.light : ThemeColor.dark)}>
                        {
                            isDark
                                ?
                                <BsSun />
                                :
                                <BsMoon />
                        }
                    </div>
                </NavigationS>
            }
        </>
    )
})

export default NavigationBar