import { Test, TestingModule } from '@nestjs/testing';
import { WatchArticlesController } from './watch-articles.controller';

describe('WatchArticlesController', () => {
  let controller: WatchArticlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchArticlesController],
    }).compile();

    controller = module.get<WatchArticlesController>(WatchArticlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
