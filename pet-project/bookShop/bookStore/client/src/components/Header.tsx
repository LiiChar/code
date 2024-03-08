import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Profile } from './Profile'

export const Header = () => {

    return (
        <div className='mt-2 flex w-full'>
            <div className='mx-auto flex w-8/12 flex-row'>
                <div className='w-3/12'><Link to="/">Rewuire</Link></div>
                <div className='w-7/12'>
                    <input className='w-full' placeholder='Введите автора или книгу' type="search" />
                </div>
                <div className='2-3/12'>
                    <Profile />
                </div>
            </div>
        </div>
    )
}
