import { DeleteUserData } from './dto/input/delete-users.input';
import { CreateUserInput } from './dto/input/create-users.input';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { Injectable } from '@nestjs/common';
import { User } from './model/user';
import { UpdateUserInput } from './dto/input/update-user.input';
import {v4} from 'uuid'

@Injectable()
export class UsersService {
    private users: User[] = []

    public createUser(createUserInput: CreateUserInput): User {
        const user: User = {
            userId: v4(),
            ...createUserInput
        }

        this.users.push(user)

        return user
    }

    public updateUser(updateUserInput: UpdateUserInput): User {
        let user: User;

        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userId === updateUserInput.userId) {
                user = {userId: this.users[i].userId, username: updateUserInput.username || this.users[i].username, password: updateUserInput.password || this.users[i].password}
                
                this.users[i] = user
            }
        }

        if(user) {
            return user
        } else {
            return null
        }

        
    }

    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.userId === getUserArgs.userId)
    }

    public getUsers(getUsersArgs: GetUsersArgs): User[] {
        return getUsersArgs.userIds.map(userId => this.getUser({userId}))
    }

    public getAllUsers(): User[] {
        return this.users
    }

    public deleteUser(deleteUserInput: DeleteUserData): User {
        const userIndex = this.users.findIndex((user => user.userId === deleteUserInput.userId))

        const user = this.users[userIndex]

        this.users.splice(userIndex)

        return user
    }
 }
