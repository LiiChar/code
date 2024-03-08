import { User } from './../users/users.models';
import { CreateUserDto } from './../users/dto/create.user.dto';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
        private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
    }

    async registration(userDto: CreateUserDto) {
        const candidate = await this.usersService.getUsersByEmail(userDto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.usersService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user)
    }

    async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles};
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
