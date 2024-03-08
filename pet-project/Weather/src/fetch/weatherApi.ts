import { CityRu } from "@/const/city";
import { IWeather } from "@/type/WeatherType";
import axios from "axios";

const base_url = "http://localhost:3000/api/weather";

export const getUserWeather = async (id: number): Promise<IWeather[]> => {
  const weathers: IWeather[] = 
    await ((await fetch(base_url + `/weather_user?user=${id}`)).json());

  return weathers;
};

export const getWeatherByCity = async (city: string): Promise<IWeather> => {
  const weather = (await axios.get(base_url + `?location=${city}`)).data;

  return weather;
};

export const getAllWeathers = async (): Promise<IWeather[]> => {
  const weathers: IWeather[] = (await axios.get(base_url + `/weather_all`))
    .data;

  return weathers;
};

export const addWeatherToUser = async (location: string, user_id: number) => {
  const data = {
    user_id,
    location: CityRu[location as keyof typeof CityRu],
  };
  axios.post(
    base_url,
    {
      user_id,
      location: location,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

type RequestDeleteUser = {
  location: string;
  user_id: number;
}

export const deleteUserWeatherByUserId = (location: string, user_id: number) => {
  axios.post(base_url + '/weather_delete', {
    location,
    user_id
  })
}