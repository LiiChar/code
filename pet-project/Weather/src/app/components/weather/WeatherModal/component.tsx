'use client'
import { useModal } from '@/app/context/useModal'
import Image from 'next/image'
import React from 'react'
import WeatherSearch from '../WeatherSearch/component'
import { deleteUserWeatherByUserId } from '@/fetch/weatherApi'
import { useRouter } from 'next/navigation'
import { useWeather } from '@/app/context/useWeather'
import { useAuth } from '@/app/context/useAuth'
// import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

const WeatherModal = () => {
    const { isVisible, weather, setClose } = useModal();
    const router = useRouter()
    const {refresh} = useWeather();
    const {user} = useAuth();

    const handleButtonDelete = () => {
        if (user && 'user_id' in user) {
            refresh(user.user_id);
            deleteUserWeatherByUserId(
                `${weather?.location.lat}, ${weather?.location.lon}`,
                1
            );
            router.push('/');
            setClose();
        }
    }

    return (
        <>
            {
                isVisible && weather != null
                    ?
                    <div onClick={(e) => e.stopPropagation()} className='z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center '>
                        <div className='w-3/4 h-4/5 '>
                            <WeatherSearch />
                            <div className='flex rounded-md mt-2 mb-2 gap-4 p-4  bg-white'>
                                <div className='w-1/5' onClick={setClose}>Close</div>
                                <div className='w-3/5 text-center'>Weather in {weather.location.name}</div>
                                <div className='w-1/5 text-right'>Next</div>
                            </div>
                            <div className='flex rounded-md bg-white p-4'>
                                <div className='w-4/12 h-full'>
                                    <div>
                                        <Image width={200} height={200} alt="Condition icons weather status" src={"https:" + weather.current.condition.icon} />
                                    </div>
                                    <div className='w-48 overflow-hidden  flex justify-center items-center'>
                                        <span className=' overflow-hidden h-6'>{weather.current.condition.text}</span>
                                    </div>
                                </div>
                                <div className='w-4/12 h-full'>
                                    <div>Temperature</div>
                                    <div className='flex'>
                                        <div className='w-1/3'>
                                            {weather.current.temp_c} C
                                        </div>
                                        <div className='w-2/3'>
                                            <div>{weather.current.temp_f} F</div>
                                            <div>Fill like: {weather.current.feelslike_c}</div>
                                            <div>Pressure: {weather.current.pressure_in}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-3/12">
                                    <div>Wind</div>
                                    <span>{weather.current.wind_kph} kph </span>
                                    <span>{weather.current.wind_dir}</span>
                                </div>
                                <div onClick={handleButtonDelete} className='bg-red-700 rounded-lg  ml-4 w-1/12 flex justify-center cursor-pointer items-center'>
                                    <div>
                                        <div>У</div>
                                        <div>д</div>
                                        <div>а</div>
                                        <div>л</div>
                                        <div>и</div>
                                        <div>т</div>
                                        <div>ь</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    ''
            }
        </>
    )
}

export default WeatherModal