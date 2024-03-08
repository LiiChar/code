import { InjectModel } from '@nestjs/sequelize';
import { UpdateCommemtDto } from './dto/update-comment.dto';
import { DeleteCommentDto } from './dto/delete-comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { GetCommentsDto } from './dto/get-comments.dto';
import { Injectable } from '@nestjs/common';
import { IComment } from 'src/types/comment';
import { Comments } from './comments.model';
import { UsersService } from 'src/users/users.service';
import { getAllCommentssDto } from './dto/get-all-comments.dto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectModel(Comments) private commentsModel: typeof Comments,
        private usersService: UsersService,
    ) { }

    async getAllComments(): Promise<getAllCommentssDto[]> {
        let comments: any = await this.commentsModel.findAll()

        for (let i = 0; i < comments.length; i++) {
            const user_photo = await this.usersService.getUserPhoto(comments[i].author);
            comments[i].dataValues.user_photo = user_photo
        }

        return comments;
    }

    getCommentById(getCommentsDto: GetCommentsDto): Promise<IComment> {
        const id = getCommentsDto.id
        return this.commentsModel.findOne({
            where: {
                id
            }
        })
    }

    createComment(createcommentDto: CreateCommentDto): Promise<IComment> {
        return this.commentsModel.create(createcommentDto)
    }

    async deleteCommentById(deletecommentDto: DeleteCommentDto): Promise<IComment> {
        const id = deletecommentDto.id
        const delComment = await this.commentsModel.findOne({
            where: {
                id
            }
        })
        await this.commentsModel.destroy({
            where: {
                id
            }
        })
        return delComment
    }

    updateCommentById(updatecommentDto: UpdateCommemtDto): Promise<IComment> {
        const id = updatecommentDto.id
        this.commentsModel.update(
            updatecommentDto,
            {
                where: {
                    id
                }
            }
        )
        return this.commentsModel.findOne({
            where: {
                id
            }
        })
    }
}

