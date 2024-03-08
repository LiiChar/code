import { Args, Mutation, Query, Resolver, GraphQLModule } from '@nestjs/graphql';
import { BookService } from './book.service';
import { GetBookArg } from './dto/args/get-book.dto';
import { GetBookArgs } from './dto/args/get-books.dto';
import { CreateBookInput } from './dto/input/create-book.input';
import { DeleteBookInput } from './dto/input/delete-book.input';
import { UpdateBookInput } from './dto/input/update-book.input';
import { Book } from './model/book';

import { createWriteStream } from 'fs';

@Resolver()
export class BookResolver {
    constructor(private bookService: BookService) { }

    @Query(() => Book, { name: 'book', nullable: true })
    async getBook(@Args() getBookArg: GetBookArg): Promise<Book> {
        return this.bookService.getBook(getBookArg)
    }

    @Query(() => [Book], { name: 'allBooks', nullable: 'itemsAndList' })
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks()
    }

    @Query(() => [Book], { name: 'books', nullable: 'items' })
    async getBooks(@Args() getBooksArg: GetBookArgs): Promise<Book[]> {
        return this.bookService.getBooks(getBooksArg)
    }

    @Mutation(() => Book)
    async createBook(@Args("createBookData") createBookInput: CreateBookInput): Promise<Book> {
        return this.bookService.createBook(createBookInput)
    }

    @Mutation(() => Book)
    async updateBook(@Args('updateBookData') updateBookInput: UpdateBookInput): Promise<Book> {
        return this.bookService.updateBook(updateBookInput)
    }

    @Mutation(() => Book)
    async deleteBook(@Args('deleteBookData') deleteBookInput: DeleteBookInput): Promise<Book> {
        return this.bookService.deleteBook(deleteBookInput)
    }
}
