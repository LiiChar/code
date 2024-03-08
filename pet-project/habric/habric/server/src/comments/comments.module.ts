import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { Comments } from './comments.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    SequelizeModule.forFeature([Comments]),
    UsersModule,]
})
export class CommentsModule { }
