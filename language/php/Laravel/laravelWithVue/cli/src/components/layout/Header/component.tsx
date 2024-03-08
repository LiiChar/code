'use client'

import React from 'react'
import style from './header.module.css'
import { MyInput } from '@/components/ui/MyInput/component'
import { FallDownList } from './FallDownList/component';
import { useAuth } from '@/context/AuthContext';
import { MyImage } from '@/components/ui/MyImage/component';

const baseUrl = "http://127.0.0.1:8000/";

export const Header = React.memo(() => {
    const [search, setSearch] = React.useState<string>('');
    const { user} = useAuth();

    const handleSearch = React.useCallback((str: string) => {
        setSearch(str)
    }, [])
    return (
        <header className={style.wrapper}>
            <nav className={style.navbar}>
                <div className={style.name}>MusPlay</div>
                <div className='h-6'>
                    <MyInput handleFunc={handleSearch} input={search} placholder='Поиск' />
                    {search.length != 0 && <FallDownList />}
                </div>
                <div>
                    Музыкальный плеер
                </div>
            </nav>
            <nav className={style.profile}>
                <div className={style.notification}>
                    &#128276;
                </div>
                <div className='relative'>
                    <MyImage alt='Photo user' className={style.photo} width={32} height={32} src={user?.photo ? baseUrl + user?.photo : ''} />
                </div>
            </nav>
        </header>
    )
})
