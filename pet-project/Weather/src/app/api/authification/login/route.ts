import { NextRequest, NextResponse } from "next/server";
import { UserRequest } from "../registration/route";
import Prisma from "../../main";
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
    const {password, username}: UserRequest = await request.json();

    const user = await Prisma.user.findFirst({
        where: {
            name: username
        }
    });

    if (!user) {
        return NextResponse.json('', {
            status: 304,
            statusText: 'User not found'
        });
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return NextResponse.json('', {
            status: 305,
            statusText: "passwords don't match"
        });
    }

    return NextResponse.json({
        id: user.id,
        username: user.name
    })
}