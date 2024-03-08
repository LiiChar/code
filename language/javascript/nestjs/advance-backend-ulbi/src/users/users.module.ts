import { RolesModule } from './../roles/roles.module';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.models';
import { User } from './users.models';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
