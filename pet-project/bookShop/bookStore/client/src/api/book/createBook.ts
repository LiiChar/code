import { gql, useMutation } from '@apollo/client';

interface CreateBookInput {
    name: string;
    description: string;
    image: string;
    text: string;
}   

export const CREATE_BOOK = gql(`
    mutation createBook($createBookInput: CreateBookInput!){
	    createBook(createBookData: $createBookInput) {
            name
            description	
            image
            text
        }
    }
`)