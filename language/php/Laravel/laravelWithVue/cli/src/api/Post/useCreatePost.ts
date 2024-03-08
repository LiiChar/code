import { IPost } from "@/type/type";
import axios from "axios";
import { useState } from "react";
import { useGetMusic } from "../Music/useGetMusic";

const baseUrl = "http://127.0.0.1:8000/api/" + "post/create";

interface CreatePostType {
  name: string;
  text: string;
  user_id: number;
  image: string;
}

export const useCreatePost = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  const createPost = async (postCreate: FormData) => {
    setIsLoading(true);
    try {
      const reqPost = await axios.post(baseUrl, postCreate);

      if (reqPost.status === 200) {
        setPosts(reqPost.data);
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { createPost, posts, isLoading, error };
};
