import { Role } from './roles.models';
import { User } from './../users/users.models';
import { DataTypes } from "sequelize";
import { Model, Column, Table, ForeignKey } from "sequelize-typescript";


@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {

    @Column({type: DataTypes.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataTypes.INTEGER})
    roleId: number;

    @ForeignKey(() => User)
    @Column({type: DataTypes.INTEGER})
    userId: number;
}