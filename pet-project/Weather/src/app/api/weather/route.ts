import { NextRequest, NextResponse } from "next/server";
import { CityRu } from "@/const/city";
import Prisma from "../main";

export async function GET(request: NextRequest) {
  const coorDin = request.nextUrl.searchParams.get("location");
  if (coorDin) {
    if (coorDin in CityRu) {
      let coordinate = CityRu[coorDin as keyof typeof CityRu];
      coordinate = coordinate.replace(" ", "");

      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${coordinate}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "91f0ef3c13f54214835161632232010",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        return NextResponse.json(result);
      } catch (error) {
        return NextResponse.json(null);
      }
    }
  } else {
    return NextResponse.json(null);
  }
}

export async function POST(request: NextRequest) {
  const locations = await request.json();
  let coordinate: string = '';

  if (locations.location.indexOf(',') >= 0) {
    coordinate = locations.location
  } else {
    const a = decodeURIComponent(locations.location);
    coordinate = CityRu[a as keyof typeof CityRu];
  }

  console.log(locations.user_id, coordinate);
  
  try {
    if (locations && locations.user_id && coordinate) {
      const location = await Prisma.location.create({
        data: {
          location: coordinate,
          user_id: Number(locations.user_id)
        }
      })
      return NextResponse.json(location)
    } else {
      return NextResponse.json(null);
    }
  } catch (error) {
    return NextResponse.json(null);
  }
  
}
