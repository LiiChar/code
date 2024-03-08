'use client'
import { CityRu } from '@/const/city'
import React, { useState } from 'react'
import Select from 'react-select'
import { useRouter } from 'next/navigation'
import { addWeatherToUser } from '@/fetch/weatherApi'
import { useWeather } from '@/app/context/useWeather'
import { useAuth } from '@/app/context/useAuth'

const keysCity = Object.keys(CityRu);
const options: any[] = [];

keysCity.forEach((city: string) => {
    options.push({ value: city, label: city })
})

const WeatherSearch = React.memo(() => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const { refresh } = useWeather()
    const router = useRouter()
    const { user, logout } = useAuth();

    const onHandleSelectOption = (e: unknown) => {
        if (typeof e === 'object' && e !== null && 'value' in e && typeof e['value'] == 'string') {
            addWeatherToUser(e?.value, 1);
            // setSelectedOption(e?.value);
            if (user && 'user_id' in user) {
                refresh(user.user_id);
            }
        }
    }

    const onHandleExit = () => {
        logout();
        router.push('/auth');
    }

    return (
        <div className="flex gap-2">
            <Select
                className='w-full'  
                defaultValue={selectedOption}
                onChange={onHandleSelectOption}
                options={options}
            />
            <button onClick={onHandleExit} className='group w-[44px] hover:bg-red-500 h-[38px] bg-white rounded-md text-black flex justify-center items-center'>
                <div className='group-hover:rotate-45 w-min h-min ease-in duration-300 font-bold'  >
                ╳
                </div>
            </button>
        </div>
    );
});

WeatherSearch.displayName = 'WeatherSearch'

export default WeatherSearch