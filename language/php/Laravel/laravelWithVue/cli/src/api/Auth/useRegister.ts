
import { IUser } from '@/type/type';
import axios from 'axios'
const baseUrl = 'http://127.0.0.1:8000/api/auth/' + 'register'

export const useRegister = () => {
    const verifyEmail = async (email: string): Promise<boolean> => {
        const response = await fetch(baseUrl, {
            mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({'email': email}),
        })
        const res = await response.json()
        
        return res;
        // return (
        //     await axios.post(
        //         baseUrl, 
        //         {'email': email}, 
        //         {headers: {
        //             Accept: "application/json",
        //             'Access-Control-Allow-Origin': '*'
        //         }})).data
    }

    const register = async (user: Omit<IUser, 'id'|'permissions'|'role'|'token'|'subscription'>) => {
        return (await axios.post(baseUrl, user)).data
    }

    return {
        register,
        verifyEmail
    }
}