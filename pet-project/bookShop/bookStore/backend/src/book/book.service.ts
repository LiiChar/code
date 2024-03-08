import { DeleteBookInput } from './dto/input/delete-book.input';
import { UpdateBookInput } from './dto/input/update-book.input';
import { CreateBookInput } from './dto/input/create-book.input';
import { Injectable } from '@nestjs/common';
import { GetBookArg } from './dto/args/get-book.dto';
import { GetBookArgs } from './dto/args/get-books.dto';
import { Book } from './model/book';
import {v4} from 'uuid'

@Injectable()
export class BookService {
    private book: Book[] = []

    public getBook(getBookArg: GetBookArg): Book  {
        return this.book.find((book) => book.id === getBookArg.id)
    }

    public getAllBooks(): Book[] {
        return this.book
    }

    public getBooks(getBookArgs: GetBookArgs): Book[] {
        let res = []
        for (let i = 0; i < getBookArgs.id.length; i++) {
            res.push(this.book.find((book) => book.id === getBookArgs[i].id ))
        }
        return res
    }

    public createBook(createBookInput: CreateBookInput): Book {
        let id = v4()
        let rate = 5
        let name = createBookInput.name, 
            description = createBookInput.description,
            image = createBookInput.image, 
            text = createBookInput.text,
            newBook = {id, name, description, rate, image, text}
        this.book.push(newBook)
        return newBook
    }

    public updateBook(updateBookInput: UpdateBookInput): Book {
        let book;
        for (let i = 0; i < this.book.length; i++) {
            if (this.book[i].id === updateBookInput.id) {
                book = {id: this.book[i].id, 
                    description: updateBookInput.description || this.book[i].description, 
                    name: updateBookInput.name || this.book[i].name,
                    text: updateBookInput.text || this.book[i].text,
                    rate: this.book[i].rate,
                    image: updateBookInput.image || this.book[i].image,
                }
                
                this.book[i] = book
            }
        }
        return book;
    }

    public deleteBook(deleteBookInput: DeleteBookInput): Book {
        let bookIndex = this.book.findIndex((book) => book.id === deleteBookInput.id);

        let book = this.book[bookIndex];

        this.book.splice(bookIndex);

        return book;
    }

}