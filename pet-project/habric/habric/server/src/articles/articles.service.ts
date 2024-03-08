import { FileService } from '../file/file.service';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DeleteArticleDto } from './dto/delete-articlesdto';
import { CreateArticleDto } from './dto/create-articles.dto';
import { getArticleDto } from './dto/get-articles.dto';
import { IActicles } from './../types/articles';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Articles } from './articles.model';
import { GetArticlesDto } from './dto/get-articleses.dto';
import { stat, unlink } from 'fs';
import * as path from 'path';
import { UsersService } from 'src/users/users.service';
import { getAllArticlesDto } from './dto/get-all-atricles.dto';
import { WatchArticlesService } from 'src/watch-articles/watch-articles.service';

@Injectable()
export class ArticlesService {

    constructor(@InjectModel(Articles) private articlesModel: typeof Articles,
        private usersService: UsersService,
        private watchService: WatchArticlesService,
        private fileService: FileService) { }

    async getAllArticles(sort: any, tag: any, search:any): Promise<getAllArticlesDto[]> {
        let posts: any;
        if (sort === 'ASC' || sort === 'DESC') {
            posts = await this.articlesModel.findAll({
                order: [
                    ['createdAt', sort]
                ],
            });
        } else if (sort === 'LIKE') {
            posts = await this.articlesModel.findAll({
                order: [
                    ['watcher', 'DESC']
                ],
            });
        } else {
            posts = await this.articlesModel.findAll({
            });
        }
        

        if (tag) {
            posts = posts.filter((post: any) => { 
                if (post.dataValues.tags === '') return false
                const tags = post.dataValues.tags.split(',')
                return tags.includes(tag) 
            })
        }

        if (search) {
            posts = posts.filter((post: any) => post.dataValues.name.toLowerCase().includes(search.toLowerCase()))
        }

        for (let i = 0; i < posts.length; i++) {
            const user_photo = await this.usersService.getUserPhoto(posts[i].author);
            posts[i].dataValues.user_photo = user_photo
        }

        return posts


    }

    async incrementWatch(id: number) {
        await this.articlesModel.findOne({ where: { id } }).then((article) => {
            article.update({
                watcher: article.watcher = article.watcher + 1
            })
        })
    }

    async getTopUsersByWatherArticles() {
        const users: any = await this.usersService.getAllUsers();

        let topUser = [];

        for (let i = 0; i < users.length; i++) {
            await this.articlesModel.findAll({
                where: {
                    author: users[i].username
                }
            }).then((articles) => {
                if (articles.length > 0) {
                    const watcher = articles.reduce((acc, el) => {
                        return acc += el.watcher
                    }, 0)
                    topUser.push({ watcher, user: { ...users[i].dataValues, watcher } })
                }

            })
        }
        topUser = topUser.sort((a, b) => b.watcher - a.watcher).map((user) => user.user).slice(0, 10)
        return topUser;
    }

    async getArticlesById(getArticlesDto: getArticleDto): Promise<IActicles> {
        const id: number = getArticlesDto.id
        // await this.watchService.incrementWatches(id)
        await this.incrementWatch(id)
        return this.articlesModel.findOne({ where: { id } })
    }

    getArticlesByName(getArticlesDto: GetArticlesDto): Promise<IActicles[]> {
        const author: string = getArticlesDto.username;
        return this.articlesModel.findAll({ where: { author } })
    }

    createArticles(createarticlesDto: CreateArticleDto, image): Promise<IActicles> {
        const createImage = this.fileService.createImage(image)
        return this.articlesModel.create({
            author: createarticlesDto.author,
            text: createarticlesDto.text,
            name: createarticlesDto.name,
            image: createImage,
            tags: createarticlesDto.tags
        })
    }
    async deleteArticlesById(deleteArticlesDto: DeleteArticleDto): Promise<IActicles> {
        const id = deleteArticlesDto.id
        const image = await this.articlesModel.findOne({
            where: {
                id
            }
        })

        const delArticle = await this.articlesModel.findOne({
            where: {
                id
            }
        })
        await this.articlesModel.destroy({
            where: {
                id
            }
        })
        await unlink(path.resolve(__dirname, '..', 'static', 'images', image.image), function (err) {
            if (err) return console.log(err);
        });
        return delArticle
    }
    updateArticlesById(updateArticlesDto: UpdateArticleDto): Promise<IActicles> {
        const id = updateArticlesDto.id
        delete updateArticlesDto.id
        this.articlesModel.update(
            updateArticlesDto,
            {
                where: {
                    id
                }
            }
        )
        return this.articlesModel.findOne({ where: { id } });
    }
}
