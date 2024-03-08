"use client"
import { useState } from "react";
import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api/' + "music";

export const useCreateMusic = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<any>(null);

  const handleGetData = async (data: any) => {
    setIsLoading(true);
    try {
      const getData: any = await axios.post(baseUrl + '/create', data);

      if (getData.status == "200") {
        setData(getData.data);
        setIsLoading(false);
      }
    } catch (error) {
      setError(error);
      throw console.error(error);
    }
  };

  return { data, isLoading, error, handleGetData };
};
