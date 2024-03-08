

import { IUser } from '@/type/type'
import React, { FC } from 'react'

interface detailUserProps {
    user?: IUser,
    handleVision: () => void
}

const DetailModal: FC<detailUserProps> = React.memo(({user, handleVision}) => {
  return (
    <div onClick={() => handleVision()} style={{ backgroundColor: '#3636365e',  }} className='fixed top-0 w-full h-full flex justify-center items-center bg border'>
        <div onClick={(e) => e.stopPropagation()} className='w-1/3 h-max rounded-lg bg-white'>
            <div style={{ borderBottom: '1px solid #3636365e'}} className='w-full h-12 p-3'>Подробная информация</div>
            <div className='p-3'>
            {user?.name && <div>Имя: {user?.name}</div>}
            {user?.about_me && <div>Имя: {user?.about_me}</div>}
            {user?.location && <div>Город: {user?.location}</div>}
            {user?.date_birthday && <div>День рождение: {user?.date_birthday}</div>}
            </div>
        </div>
    </div>
  )
})

export default DetailModal