import { UserResolver } from './users.resolver';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
