"use client";

import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = "http://127.0.0.1:8000/api/" + "music";

export const useGetMusic = () => {
  const [data, setData] = useState<any>([]);
  const [refreshing, setRefresh] = useState<boolean>(false)

  useEffect(() => {
    axios.get(baseUrl).then((data) => {
      setData(data.data);
    });
  }, []);

  useEffect(() => {
    axios.get(baseUrl).then((data) => {
      setData(data.data);
    });
  }, [refreshing]);

  const refresh = () => {
    setRefresh(prev => !prev)
  }

  return {data, refresh};
};
