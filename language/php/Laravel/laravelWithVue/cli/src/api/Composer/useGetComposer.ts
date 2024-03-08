"use client";

import { IComposer, IGenre } from "@/type/type";
import axios from "axios";
import { useEffect, useState } from "react";
const baseUrl = 'http://127.0.0.1:8000/api/' + "composer"

export const useGetComposer = () => {
  const [data, setData] = useState<IComposer[]>([]);

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
