import React, { FC, useState } from 'react'
import { Book } from '../components/Book'
import { useGetAllBook } from '../api/book/getAllBook'
import { IBook, IStore } from '../model/model'

export const HomePage: FC = () => {
    const books: IBook[] = useGetAllBook()

    return (
        <div className='mt-6'>
            <div>
            </div>
            <div className='flex justify-center items-center h-full w-full'>
                <div className='flex flex-row ml-28 flex-wrap w-10/12'>
                    {
                        books?.map((book) => (
                            <Book key={book.id} id={book.id} name={book.name} description={book.description} rate={book.rate} image={book.image} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
