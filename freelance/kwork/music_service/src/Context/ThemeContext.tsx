import { createContext, useContext, FC, PropsWithChildren, useState, useEffect } from 'react'
import { dark as darkTheme, light as lightTheme } from '../Styles/Theme'
import { ThemeProvider } from 'styled-components';

export class ThemeColor {
    static readonly light = lightTheme;
    static readonly dark = darkTheme;
}

interface Theme {
    theme: ThemeColor,
    changeTheme: (theme: ThemeColor) => void,
    isDark: boolean
}

const initTheme: Theme = {
    theme: ThemeColor.dark,
    changeTheme: () => { },
    isDark: true
}

const ContextTheme = createContext<Theme>(initTheme);

export const useTheme = () => {
    return useContext(ContextTheme);
}

const ThemeContext: FC<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeColor>(ThemeColor.dark)
    const [isDark, setIsDark] = useState<boolean>(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if (theme && theme != undefined && theme != null && theme != 'undefined') {
            changeTheme(ThemeColor[JSON.parse(theme).name as keyof typeof ThemeColor]);
        }
    }, [])

    const changeTheme = (theme: ThemeColor) => {
        setTheme(theme)
        if (theme == ThemeColor.dark) {
            setIsDark(true)
        } else {
            setIsDark(false)
        }
        localStorage.setItem('theme', JSON.stringify(theme));
    }

    const value = {
        theme,
        changeTheme,
        isDark
    }

    return (
        <ContextTheme.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ContextTheme.Provider>
    )
}

export default ThemeContext

