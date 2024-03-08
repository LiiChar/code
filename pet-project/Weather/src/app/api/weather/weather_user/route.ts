import { NextRequest, NextResponse } from "next/server";
import Prisma from "../../main";
import { ILocation } from "@/type/WeatherType";
import getWeather from "../../utils/getWeather";

export async function GET(request: NextRequest) {
  const user_id = request.nextUrl.searchParams.get("user");

  if (user_id) {
    const weathers: ILocation[] = [];
    const Locations = await Prisma.location.findMany({
      where: {
        user_id: Number(user_id),
      },
    });


    for (let i = 0; i < Locations.length; i++) {
      const weather = await getWeather(Locations[i].location)
      if (weather) {
        weathers.push(weather)
      }
    }
    
    return NextResponse.json(weathers);
  }
}
