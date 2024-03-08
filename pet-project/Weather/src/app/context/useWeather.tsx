"use client"

import { getUserWeather } from "@/fetch/weatherApi";
import { IWeather } from "@/type/WeatherType";
import React, { FC, useState } from "react";

//describe your methods and state
interface IDefaultValueWeatherContext {
  weathers: IWeather[];
  getWeather: (user_id: number) => void;
  refresh: (user_id: number) => void;
};

const DefaultValueWeatherContext: IDefaultValueWeatherContext = {
  weathers: [],
  getWeather: () => {},
  refresh: () => {}
};

const WeatherContext = React.createContext<IDefaultValueWeatherContext>(DefaultValueWeatherContext);

export const useWeather = () => {
    return React.useContext(WeatherContext)
}

interface IPropsProvider {
    children: React.ReactNode
}

const WeatherProvider: FC<IPropsProvider> = ({children}) => {
  const [weathers, setWeathers] = useState<IWeather[]>([]);

  const getWeather = async (user_id: number) => {
    const weathers = await getUserWeather(user_id);
    setWeathers(weathers);
  }

  const refresh = (user_id: number) => {
    getWeather(user_id)
  }

   //insert your state and methods the same as interface default value
    const value = {
      weathers,
      getWeather,
      refresh
    }
  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider