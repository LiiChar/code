import { NextRequest, NextResponse } from "next/server";
import Prisma from "../../main";

export async function POST(request: NextRequest) {
  const {user_id, location} = await request.json();
  console.log(user_id, location);
  
  if (user_id && location) {
    const deleted_location = Prisma.location.delete({
      where: {
        user_id: user_id,
        location: location
      }
    });
    return NextResponse.json(deleted_location);
  } else {
    return NextResponse.json(null);
  }
}
