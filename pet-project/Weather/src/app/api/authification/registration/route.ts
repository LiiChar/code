import { NextRequest, NextResponse } from "next/server";
import Prisma from "../../main";
import bcrypt from 'bcrypt'

export interface UserRequest {
    username: string;
    password: string;
}

export async function POST(request: NextRequest) {
    const {password, username}: UserRequest = await request.json();

    const userExist = await Prisma.user.count({
        where: {
            name: username 
        }
    });
    
    if (userExist !== 0) {
        return NextResponse.json('', {
            status: 301,
            statusText: 'Username exist'
        })
    }

    const passwordHash = await bcrypt.hash(password, 5);

    const userResponse = await Prisma.user.create({
        data: {
            name: username,
            password: passwordHash
        },
        select: {
            name: true,
            id: true,
        }
    });

    return NextResponse.json({
        id: userResponse.id,
        username: userResponse.name
    });
}