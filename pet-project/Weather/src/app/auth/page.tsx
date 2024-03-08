'use client'

import React from 'react'
import Login from './login/component';
import Registaration from './registration/component';

export interface IPropsAuthComponents {
    updateForm: () => void;
}

const Auth = () => {
    const [isLogin, setIsLogin] = React.useState<boolean>(false);

    const updateForm = React.useCallback(() => {
        setIsLogin(prev => !prev);
    }, [])

    return (
        <div className='flex w-full h-full justify-center items-center'>
            <div className='w-2/5 h 1/3 flex gap-4 flex-col'>
                {
                    isLogin
                        ?
                        <Login updateForm={updateForm} />
                        :
                        <Registaration updateForm={updateForm} />
                }
            </div>
        </div>
    )
}

export default Auth