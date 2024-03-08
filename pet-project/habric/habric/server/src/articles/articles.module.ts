import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { Articles } from './articles.model';
import { FileModule } from 'src/file/file.module';
import { UsersModule } from 'src/users/users.module';
import { WatchArticlesModule } from 'src/watch-articles/watch-articles.module';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService],
  imports: [
    SequelizeModule.forFeature([Articles]),
    UsersModule,
    FileModule,
    WatchArticlesModule
  ]
})
export class ArticlesModule {}
