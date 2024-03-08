'use client'

import Image from 'next/image'
import WeatherList from './components/weather/WeatherList/component'
import { getUserWeather } from '@/fetch/weatherApi'
import { useEffect, useState } from 'react';
import { IWeather } from '@/type/WeatherType';
import { useWeather } from './context/useWeather';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useAuth } from './context/useAuth';

export default function Home() {
  const {getWeather, weathers} = useWeather();
  const {user} = useAuth();

  useEffect(() => {
    if (user && 'user_id' in user)
    getWeather(user.user_id);
  }, [])

  return (
    <main className='w-full h-full flex justify-center items-center'>
      <WeatherList weathers={weathers}/>
    </main>
  )
}
