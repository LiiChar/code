import { DeleteUserData } from './dto/input/delete-users.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { CreateUserInput } from './dto/input/create-users.input';
import { GetUsersArgs } from './dto/args/get-users.args';
import { GetUserArgs } from './dto/args/get-user.args';
import { UsersService } from './users.service';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./model/user";

@Resolver(() => User)
export class UserResolver {
    constructor(private usersService: UsersService) {}

    @Query(() => User, { name: 'user', nullable: true})
    async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
        return this.usersService.getUser(getUserArgs)
    }

    @Query(() => [User], {name: 'users', nullable: 'items'})
    async getUsers(@Args() getUsersArgs: GetUsersArgs): Promise<User[]> {
        return this.usersService.getUsers(getUsersArgs)
    }

    @Query(() => [User], {name: 'allUsers', nullable: 'itemsAndList'})
    async getAllUsers(): Promise<User[]> {
        return this.usersService.getAllUsers()
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput): User {
        return this.usersService.createUser(createUserData)
    }

    @Mutation(() => User)
    updateUser(@Args('updateUserData') updateUserInput: UpdateUserInput): User {
        return this.usersService.updateUser(updateUserInput)
    }

    @Mutation(() => User)
    deleteUser(@Args('deleteUserData') deleteUserInput: DeleteUserData): User {
        return this.usersService.deleteUser(deleteUserInput)
    }
}