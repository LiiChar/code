import { IPost } from "@/type/type";
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://127.0.0.1:8000/api/" + "post";

export const useGetPost = () => {
    const [posts, setData] = useState<IPost[]>([])

    const fetchAllPost = () => {
        axios.get(baseUrl).then((data) => {
            setData(data.data)
        })
    }

    useEffect(() => {
        fetchAllPost()
    }, [])

    const refresh = () => {
        fetchAllPost()
    }

    return {
        posts,
        refresh
    }
}