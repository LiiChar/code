import { CityRu } from "@/const/city";
import getWeather from "../../utils/getWeather";
import { NextResponse } from "next/server";
import fetchWithCache from "../../utils/cashingRequestAtDate";

const location = Object.values(CityRu);

export async function GET() {
  const weathers = [];
  for (let i = 0; i < location.length; i++) {
    // const weather = await getWeather(location[i]);
    const weather = await fetchWithCache(location[i], 10000, getWeather);
    if (weather) {
      weathers.push(weather);
    }
  }

  return NextResponse.json(weathers);
}
