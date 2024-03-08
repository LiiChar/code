'use client'

import { IMusic, IUser } from "@/type/type";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:8000/api/" + "user";

export const useGetUser = (id: string) => {
    const [user, setData] = useState<IUser>()

    useEffect(() => {
        axios.get(baseUrl + '/'+ id).then((data) => {
            setData(data.data)
        })
    }, [])

    return {
        user
    }
}