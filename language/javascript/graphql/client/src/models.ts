export interface IUser {
    id: number
    username: String
    age: number
    posts: IPost
}

export interface IPost {
    id: number
    title: String
    content: String
}
