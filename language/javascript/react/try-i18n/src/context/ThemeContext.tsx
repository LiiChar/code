import React, { useContext } from 'react';

export enum ThemeEnum {
    light = 'light',
    dark = 'dark',
}

interface IdefaultContextTheme {
    theme: ThemeEnum
    toggleTheme: () => void
    isLight: boolean
}

const defaultContextTheme: IdefaultContextTheme = {
    theme: ThemeEnum.light,
    toggleTheme: () => { },
    isLight: true
}

const ThemeContext = React.createContext<IdefaultContextTheme>(defaultContextTheme);

export function useTheme() {
    return useContext(ThemeContext);
}

type Props = {
    children: React.ReactNode;
};
 const ThemeProvided = ({ children }: Props) => {
    const [theme, setTheme] = React.useState<ThemeEnum>(ThemeEnum.light);
    const [isLight, setIsLight] = React.useState<boolean>(true);

    const toggleTheme = () => {
        setTheme((prev: ThemeEnum) => {
            if (prev === ThemeEnum.light) {
                setIsLight(false)
                return ThemeEnum.dark
            } else {
                setIsLight(true)
                return ThemeEnum.light
            }
        })
    }

    const value = {
        theme,
        toggleTheme,
        isLight
    };

    return (
        <>
            <ThemeContext.Provider value={value}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvided;