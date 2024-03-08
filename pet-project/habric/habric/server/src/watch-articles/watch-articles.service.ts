import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WatchArticles } from './watch-articles.model';

@Injectable()
export class WatchArticlesService {
    constructor (
        @InjectModel(WatchArticles) private watchModel: typeof WatchArticles
    ) {}

    async getPopularBlog (sort: string) {
        return this.watchModel.findAll({
            order: [
                ['watch', sort]
            ]
        })
    }

    async incrementWatches(id: number) {
        this.watchModel.findOne({
            where: {
                articeles_id: id
            }
        }).then((model) => {
            model.update({
                watch: model.id++
            })
        })
    }
}
