import { gql, useQuery } from "@apollo/client";
import { IUser } from "../../model/model";


const GET_ONE_USER = gql(`
    query user($id: string!){
	    user(userId: $id) {
		    userId
            username
            password
    }
}
`)

export const GetOneUser = (id: string): IUser => {
    const {data, error, loading} = useQuery(GET_ONE_USER, {
        variables: {
            id: id
        }
    })

    return data
}