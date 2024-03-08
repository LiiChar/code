export interface IActicles {
    id: number;
    author: string;
    text?: string;
    name: string;
    watcher: number;
    image: string;
    tags: string;
    user_photo?: string
} 

export interface IComment {
    id: number;
    author: string;
    to?: number;
    text: string;
    user_photo?: string;

}

export interface IUser {
    id: number;
    username: string;
    password: string;
    about?: string;
    image?: string;
}