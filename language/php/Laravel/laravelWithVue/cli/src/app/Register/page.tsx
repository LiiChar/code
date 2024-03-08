'use client'

import { MyButton as Button } from '@/components/ui/MyButton/component';
import { MyInput as Input, errorBounder, typeInput } from '@/components/ui/MyInput/component';
import { useAuth as useAuthification } from '@/context/AuthContext';
import { useEvent as useEventProps } from '@/hooks/useEvent';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react'
import Link from 'next/link';
import { useRegister } from '@/api/Auth/useRegister';
import { IUser } from '@/type/type';

const Register = () => {
    const [isPassword, setIsPassword] = React.useState<boolean>(false);
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const { login } = useAuthification();
    const { register, verifyEmail } = useRegister()
    const route = useRouter()
    const [error, setError] = React.useState<errorBounder | undefined>()

    const atLeastOneUppercase = /[A-Z]/g; // capital letters from A to Z
    const atLeastOneLowercase = /[a-z]/g; // small letters from a to z
    const atLeastOneNumeric = /[0-9]/g; // numbers from 0 to 9
    const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
    const eightCharsOrMore = /.{8,}/g; // eight characters or more

    const passwordTracker = {
        uppercase: password.match(atLeastOneUppercase),
        lowercase: password.match(atLeastOneLowercase),
        number: password.match(atLeastOneNumeric),
        specialChar: password.match(atLeastOneSpecialChar),
        eightCharsOrGreater: password.match(eightCharsOrMore),
    };

    const passwordStrength = Object.values(passwordTracker).filter(
        (value) => value
    ).length;

    const handleEmail = useEventProps((e) => setEmail(e))
    const handleName = useEventProps((e) => setName(e))
    const handlePassword = useEventProps((e) => setPassword(e))

    const checkEmail = useEventProps(async () => {
        const verify = await verifyEmail(email)

        if (!verify) {
            setIsPassword(true)
        } else {
            setEmail('')
            setError({ id: 'email', message: "Email found, please login" })
        }

    })

    const registrationUser = useEventProps(async () => {
        if (passwordStrength <= 3) {
            setError({ id: 'password', message: "The password is too easy" })
        } else {
            const user = await register({ email, password, name })
            login(user)

            route.push('/')
        }
    })

    const dataName = useMemo(() => {

        return (passwordStrength < 5 ? 'Must contain ' : '') +
            (!passwordTracker.uppercase ? 'uppercase, ' : '') +
            (!passwordTracker.lowercase ? 'lowercase, ' : '') +
            (!passwordTracker.specialChar ? 'special character, ' : '') +
            (!passwordTracker.number ? 'number, ' : '') +
            (!passwordTracker.eightCharsOrGreater ? 'eight characters or more' : '')
    }, [password])

    return (
        <div className='flex w-full h-full justify-center items-center'>
            <div style={{ maxWidth: '300px' }} className={`w-2/6 ${isPassword ? 'h-min' : 'h-1/5'} `}>
                {
                    isPassword
                        ?
                        <div className='w-full h-full'>
                            <div className='h-8 mb-8'>
                                <Input id='name' error={error} type={typeInput.text} handleFunc={handleName} input={name} placholder='Ведите ник' lable='Введите свой ник' />
                            </div>
                            <div className='h-8 mb-8'>
                                <Input id='password' error={error} type={typeInput.password} handleFunc={handlePassword} input={password} placholder='Ведите пароль' lable='Введите пароль' />
                            </div>
                            <div className='h-6 mb-4'>

                                {password.length > 0 && (
                                    <div id='icon' data-name={dataName} className='flex'>
                                        <div
                                            style={{
                                                height: '5px',
                                                backgroundColor: `${['red', 'orange', '#03a2cc', '#03a2cc', '#0ce052'][
                                                    passwordStrength - 1
                                                ] || ''
                                                    }`,
                                                width: `${(passwordStrength / 5) * 100}%`
                                            }}
                                        ></div>
                                    </div>
                                )}
                            </div>
                            <div className='h-6'>
                                <Button handleFunc={registrationUser} placeholder='Зарегестрироваться' />
                            </div>
                        </div>
                        :
                        <div className='w-full h-full'>


                            <div className='h-8 mb-12'>
                                <Input id='email' error={error} type={typeInput.email} autoFocuced={true} handleFunc={handleEmail} input={email} placholder='Ведите почту' lable='Введите почту' />
                            </div>
                            <div className='h-6'>
                                <Button handleFunc={checkEmail} placeholder='Продолжить' />
                            </div>
                        </div>
                }
                <div>
                    if you have an account, <Link className='text-blue-800' href={'Login'}>Login</Link>
                </div>
            </div>
        </div >
    )
}

export default Register