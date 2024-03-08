import { IUser } from '@/type/type';
import axios from 'axios'

interface loginType {
    email: string;
    password: string;
}

const baseUrl = 'http://127.0.0.1:8000/api/' + 'auth/'

export const useLogin = () => {
    const verifyEmail = async (email: string): Promise<boolean> => {
        return (await axios.post(baseUrl + 'login', {email}, )).data
    }

    const login = async (user: loginType): Promise<IUser> => {
        return (await axios.post(baseUrl + 'login', user)).data
    }

    const logout = async () => {
        return await axios.post(baseUrl + 'logout')
    }

    return {
        verifyEmail,
        login,
        logout
    }
}