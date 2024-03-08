import { IUser } from './../../model/model';
import { gql, useQuery } from '@apollo/client'

const GET_ALL_USER = gql(`
    query {
	    allUsers {
		userId,
        username,
        password
        }
    }
`)

export const useGetAllUser = (): IUser[] | undefined => {
    const { data, loading, error } = useQuery(GET_ALL_USER)
    if (error) {
        throw error
    }
    return data?.allUsers
}