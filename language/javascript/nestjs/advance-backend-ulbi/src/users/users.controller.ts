import { User } from './users.models';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { Controller,Body, Post, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: "Получить всех польхователей"})
    @ApiResponse({status: 200, type: [User]})
    @Get() 
    getAll() {
        return this.usersService.getAllUsers();
    }
}
