'use client'

import { IWeather } from "@/type/WeatherType";
import React, { FC } from "react";

interface IDefaultValueModalContext {
    isVisible: boolean;
    weather: IWeather | null;
    setOpen: () => void;
    setClose: () => void;
    setWeather: (weather: IWeather) => void;
};

const DefaultValueModalContext: IDefaultValueModalContext = {
    isVisible: false,
    weather: null,
    setOpen: () => {},
    setClose: () => {},
    setWeather: () => {}
};

const ModalContext = React.createContext<IDefaultValueModalContext>(DefaultValueModalContext);

export const useModal = () => {
    return React.useContext(ModalContext)
}

interface IPropsProvider {
    children: React.ReactNode
}

const ModalProvider: FC<IPropsProvider> = ({children}) => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false)
    const [weather, setContent] = React.useState<IWeather | null>(null)

    const setOpen =  () => {
        setIsVisible(true)
    };

    const setClose = () => {
        setIsVisible(false)
    };

    const setWeather = (weather: IWeather) => {
        setContent(weather)
    }

    const value = {
        isVisible,
        weather,
        setOpen,
        setClose,
        setWeather
    }

  return (
    <ModalContext.Provider value={value}>
        {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider