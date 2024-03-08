import { FileService } from './../file/file.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { IUser } from 'src/types/user';
import { GetUserDto } from './dto/get-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from './users.model';
import { GetUserIdDto } from './dto/get-userId.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users) private usersModel: typeof Users,
        private fileService: FileService
    ) { }

    getAllUsers(): Promise<IUser[]> {
        return this.usersModel.findAll()
    }

    getUserById(getUserDto: GetUserDto): Promise<IUser> {
        const id = getUserDto.id
        return this.usersModel.findOne({
            where: {
                id
            }
        })
    }

    async getUserPhoto(author: string) {
        const user_photo = await this.usersModel.findOne({
            where: {
                username: author
            }
        })
        return user_photo.image
    }

    getUserByUsername(username: string): Promise<IUser> {
        return this.usersModel.findOne({
            where: {
                username
            }
        })
    }

    async getImageByName(username: string): Promise<string> {
        const user = await this.usersModel.findOne({
            where: {
                username
            }
        })
        
        return user.image
    }

    async getNameByToket(id): Promise<any> {
        return this.usersModel.findOne({
            where: {
                id
            }
        })
    }

    createUser(createUserDto: CreateUserDto): Promise<IUser> {
        return this.usersModel.create({ password: createUserDto.password, username: createUserDto.username, image: createUserDto.image })
    }

    async deleteUsersById(deleteUserDto: DeleteUserDto): Promise<IUser> {
        const id = deleteUserDto.id
        const delUser = await this.usersModel.findOne({
            where: {
                id
            }
        })
        await this.usersModel.destroy({
            where: {
                id
            }
        })
        return delUser
    }

    updateUserById(updateUserDto: UpdateUserDto, image): Promise<IUser> {
        console.log(updateUserDto);
        
        if (image) {
            const createImage = this.fileService.createImage(image)
            updateUserDto.image = createImage
        }
        this.usersModel.update(
            updateUserDto,
            {
                where: {
                    id: updateUserDto.id
                }
            }
        );
        return this.usersModel.findOne({
            where: {
                id: updateUserDto.id
            }
        });
    }

}
