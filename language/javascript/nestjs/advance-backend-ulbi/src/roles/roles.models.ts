import { UserRoles } from './user-roles.model';
import { User } from './../users/users.models';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { DataTypes } from "sequelize";
import { Model, Column, Table, BelongsToMany } from "sequelize-typescript";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный индефикатор'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ADMIN', description: 'Значение роли пользователя'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    value: string;

    @ApiProperty({example: 'Администратор', description: 'Описание роли'})
    @Column({type: DataTypes.STRING, allowNull: false})
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];

}