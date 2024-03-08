import { gql, useQuery } from "@apollo/client";


const GET_ALL_BOOK = gql(`
    query {
	    allBooks {
            id
            name
            description
            image
            rate
        text
        }
    }
`)

export const useGetAllBook = () => {
    const {data, loading, error} = useQuery(GET_ALL_BOOK)

    return data?.allBooks
}