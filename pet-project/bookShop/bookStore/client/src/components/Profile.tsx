import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
    const [user, setUser] = useState(false)

    return (
        <>
            {user ?
                <div>{user}</div>
                :
                <div className='flex flex-row'>
                    <div>
                        <Link to='/login'>Вход</Link>
                    </div>
                    <div className='ml-4'>
                        <Link to='/registration'>Регистрация</Link>
                    </div>
                </div>
            }
        </>
    )
}
