"use client";

import { IGenre } from "@/type/type";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = 'http://127.0.0.1:8000/api/' + "genre"

export const useGetGenre = () => {
  const [data, setData] = useState<IGenre[]>([]);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((data) => {
        setData(data.data);
      });
  }, []);

  if (data) {
    return data;
  }
};
