import { IUser } from "@/type/UserType";
import axios from "axios";

const base_url = "http://localhost:3000/api/authification";

interface UserResponse extends IUser {
    id: number
}

export const registrationUser = async (username: string, password: string): Promise<UserResponse> => {
    const data = {
        username, 
        password
    }

    const user = (await axios.post(base_url+'/registration', data)).data;

    return user;
}

export const loginUser = async (username: string, password: string):Promise<UserResponse | null>  => {
    const data = {
        username, 
        password
    }

    const user = (await axios.post(base_url+'/login', data)).data;

    return user;
}