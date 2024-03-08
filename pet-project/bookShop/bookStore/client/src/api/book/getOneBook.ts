import { gql, useQuery } from "@apollo/client";
import { IBook } from '../../model/model';


export const GET_ONE_BOOK = gql(`
    query book($id: String!){
        book(id: $id) {
            id
            name
            description
            rate
            text
            image
        }
    }
`)