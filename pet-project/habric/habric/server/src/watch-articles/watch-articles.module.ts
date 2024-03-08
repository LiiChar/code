import { Module } from '@nestjs/common';
import { WatchArticlesService } from './watch-articles.service';
import { WatchArticlesController } from './watch-articles.controller';
import { WatchArticles } from './watch-articles.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [WatchArticlesService],
  controllers: [WatchArticlesController],
  imports: [
    SequelizeModule.forFeature([WatchArticles]),
  ],
  exports: [WatchArticlesService]
})
export class WatchArticlesModule {}
