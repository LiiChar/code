import { IWeather } from '@/type/WeatherType';
import { FC, useEffect, useState } from 'react'
import WeatherElement from '../WeatherElement/component';
import WeatherSearch from '../WeatherSearch/component'
import { useModal } from '@/app/context/useModal';
import './WeatherList.css'

interface IPropsListWeather {
    weathers: IWeather[]
}

const WeatherList: FC<IPropsListWeather> = ({weathers}) => {
    const {isVisible} = useModal();
    

    return (
        <div className={`rounded-md w-3/4 h-4/5 ${isVisible ? "hidden" : 'visible'}`}>
            <div className='w-full mb-2'>
                <WeatherSearch />
            </div>
            <div className='flex flex-wrap gap-2 h-5/6 flex-row overflow-y-auto overflow-x-hidden'>
                {
                    weathers.map((weather) => (
                        <WeatherElement key={weather.location.lon * weather.location.lat} props={weather} />
                    ))
                }
            </div>
        </div>
    )
}

export default WeatherList