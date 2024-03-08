'use client'

import { useGetUser } from '@/api/User/useGetUser';
import { Wrapper } from '@/components/layout/Wrapper/component';
import { MyImage } from '@/components/ui/MyImage/component';
import { useAuth } from '@/context/AuthContext';
import style from './profile.module.css'
import Image from 'next/image';
import React from 'react'
import { MyButton } from '@/components/ui/MyButton/component';
import { useEvent } from '@/hooks/useEvent';
import { useModal } from '@/context/modalContext';
import DetailModal from '@/components/profile/detatailUserModal/component';

const baseUrl = "http://127.0.0.1:8000/";

const Profile = () => {
    const { user } = useAuth()
    const { toggleVison, vision } = useModal()

    const handleUpdateUser = useEvent(() => {

    })

    const handleVisionDetails = useEvent(() => {
        toggleVison(!vision)
    })

    return (
        <>
            <Wrapper>
                <div className='w-full h-full flex flex-col gap-8'>
                    <div className={`p-4 w-full ${style.informationSection}`}>
                        <div className='flex'>
                            <div className='relative'>
                                <MyImage alt='Photo user' width={144} height={144} src={user?.photo ? baseUrl + user?.photo : ''} />
                            </div>
                            <div className='flex-col justify-around w-2/3 h-full pl-4'>
                                <div>
                                    <div><span className='text-xl'>{user?.name}</span> {user?.age}</div>
                                    <div>{user?.about_me}</div>
                                </div>
                                <div className='flex justify-between text-xs text-center'>
                                    <div className='w-2/5'>
                                        <MyButton handleFunc={handleUpdateUser} placeholder='Редактировать' />
                                    </div>
                                    <div className='w-2/5'>
                                        <MyButton handleFunc={handleVisionDetails} placeholder='Подробнее' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex '>
                        <div className='w-3/4'>
                            <div>Музыка и плейлисты</div>
                            <div> посты</div>
                        </div>
                        <div className='w-1/4'>
                            Подписки
                        </div>
                    </div>
                </div>
            </Wrapper>
            {vision && <DetailModal handleVision={handleVisionDetails} user={user} />}
        </>
    )
}

export default Profile;