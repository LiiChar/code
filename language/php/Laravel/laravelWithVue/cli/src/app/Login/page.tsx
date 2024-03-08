'use client'

import { MyButton as Button } from '@/components/ui/MyButton/component';
import { MyInput as Input, errorBounder, typeInput } from '@/components/ui/MyInput/component';
import { useAuth as useAuthification } from '@/context/AuthContext';
import { useEvent as useEventProps} from '@/hooks/useEvent';
import { useRouter } from 'next/navigation';
import {useLogin} from '@/api/Auth/useLogin'
import React from 'react'
import Link from 'next/link';

const Login = () => {
    const [isPassword, setIsPassword] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const { login } = useAuthification();
    const {verifyEmail, login: loginUserApi} = useLogin()
    const route = useRouter()
    const [error, setError] = React.useState<errorBounder | undefined>()
    const handleEmail = useEventProps((e) => setEmail(e))

    const handlePassword = useEventProps((e) => setPassword(e))

    const checkEmail = useEventProps(async () => {
        const verify = await verifyEmail(email)
        
        if (verify) {
            setIsPassword(true)
        } else {
            setEmail('')
            setError({id: 'email', message: "Email not found"})
        }

    })

    const verificateUser = useEventProps(async () => {
        const user = await loginUserApi({email, password})
        if (user) {
            login(user)
    
            route.push('/')
        } else {
            setPassword('')
            setError({id: 'password', message: "Password not equal account"})
        }
    })

    return (
        <div className='flex w-full h-full justify-center items-center'>
            <div style={{maxWidth: '300px'}} className='w-2/6 h-1/5'>
                {
                    isPassword
                        ?
                        <div className='w-full h-3/4 mb-2'>
                            <div className='h-8 mb-12'>
                                <Input id='password' error={error} type={typeInput.password} autoFocuced={true} handleFunc={handlePassword} input={password} placholder='Ведите пароль' lable='Введите пароль' />
                            </div>
                            <div className='h-6'>
                                <Button handleFunc={verificateUser} placeholder='Войти' />
                            </div>
                        </div>
                        :
                        <div className='w-full h-3/4 mb-2'>
                            <div className='h-8 mb-12'>
                                <Input id='email' error={error} type={typeInput.email} autoFocuced={true} handleFunc={handleEmail} input={email} placholder='Ведите почту' lable='Введите почту' />
                            </div>
                            <div className='h-6'>
                                <Button handleFunc={checkEmail} placeholder='Продолжить' />
                            </div>
                        </div>
                }
                <div>
                    if you don't have an account, <Link className='text-blue-800' href={'Register'}>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login