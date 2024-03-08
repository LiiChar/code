export interface IBook {
    id: string;
    name: string;
    description: string;
    rate: number;
    image: string
}

export interface IStore {
    books: IBook[] | [];
    book: IBook | null;
    add: (book: IBook) => void;
    getOne: (id: number) => void;
    delete: (id: number) => void;
}

export interface IUser {
    userId: string;
    username: string;
    password: string;
}