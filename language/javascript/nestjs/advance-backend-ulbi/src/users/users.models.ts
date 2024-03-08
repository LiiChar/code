import { Role } from './../roles/roles.models';
import { UserRoles } from './../roles/user-roles.model';
import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { DataTypes } from "sequelize";
import { Model, Column, Table, BelongsToMany } from "sequelize-typescript";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный индефикатор'})
    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @Column({type: DataTypes.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '12345678', description: 'Пароль'})
    @Column({type: DataTypes.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Забанен или нет'})
    @Column({type: DataTypes.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'За хулиганство', description: 'Причина бана'})
    @Column({type: DataTypes.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: User[];
}