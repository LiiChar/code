
import React, { useCallback } from 'react'
import { IPropsAuthComponents } from '../page'
import { useAuth } from '@/app/context/useAuth';
import { useRouter } from 'next/navigation';
import { registrationUser } from '@/fetch/userApi';

const Registaration: React.FC<IPropsAuthComponents> = ({ updateForm }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        const userLogin = await registrationUser(username, password);

        if (userLogin) {
            const user = {
                user_id: userLogin.id,
                username: userLogin.username
            }
            login(user);
            router.push('/')
        }
    }

    return (
        <>
            <div className='w-full h-full flex gap-2 flex-col bg-white rounded-md p-4'>
                <div className=' w-full rounded-md'>
                    <input className='w-full p-2' placeholder='Имя' type="text" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className=' w-full  rounded-md'>
                    <input className=' w-full p-2' placeholder='Пароль' type="text" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='drop-shadow bg-slate-300 w-min p-2 rounded-md select-none'>
                    <button onClick={handleLogin}>Зарегестрироваться</button>
                </div>
            </div>
            <div className='bg-white rounded-md p-4'>
                <div>Если есть аккаунта, <span onClick={updateForm} className='text-blue-500 select-none'>войдите</span></div>
            </div>
        </>
    )
}

export default Registaration