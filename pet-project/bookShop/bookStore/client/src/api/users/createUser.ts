import { IUser } from './../../model/model';

import { gql, useMutation } from '@apollo/client'

interface CreateUserInput {
    username: string;
    password: string;
}

const CREATE_USER = gql(`   
mutation CreateUser($CreateUserInput: CreateUserInput!) {
	createUser(createUserData: $CreateUserInput) {
		userId
        username
        password
  }
}
`)

export const useCreateUser = () => {
    const [CreateUser, { data, loading, error }] = useMutation(CREATE_USER)

    let user = data

    return { user, CreateUser }
}