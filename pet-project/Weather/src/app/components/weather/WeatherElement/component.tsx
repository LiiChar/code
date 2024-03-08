import { useModal } from '@/app/context/useModal';
import { IWeather } from '@/type/WeatherType'
import Image from 'next/image';
import React, { FC } from 'react'

interface IProps {
    props: IWeather
}

const WeatherElement: FC<IProps> = React.memo(({ props }) => {
    const { current, location } = props;
    const {setOpen,setWeather} = useModal();

    const handleWeatherElement = () => {
        setWeather(props);
        setOpen()
    }

    return (
        <div onClick={handleWeatherElement} className='lg:w-[calc(33%-8px)] sm:w-[calc(50%-5px)] h-2/6 w-full  flex border-2 p-4 rounded-md bg-white'>
            <div className='mr-4'>
                <div style={{height: '77%'}} className='relative h-4/6 '>
                    <Image className='relative' fill alt="Condition icons weather status" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" src={"https:" + current.condition.icon} />
                </div>
                <div style={{height: '23%'}} className='w-24 overflow-hidden flex justify-center items-center'>
                    <span className=' overflow-hidden h-6'>{current.condition.text}</span>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div>Weather in {location.name}</div>
                <div className='text-3xl'>{current.temp_c}°C</div>
                <div>{current.wind_kph} kph {current.wind_dir}</div>
            </div>
        </div>
    )
});

WeatherElement.displayName = 'WeatherElement';

export default WeatherElement