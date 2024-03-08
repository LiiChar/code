export interface IUser {
    id: number;
    photo: string;
    username: string;
}

export interface ICategories {
    id: number
    name: string
    image_url: string
}

export interface IDishe {
    id: number;
    name: string;
    price: number;
    weight: number;
    description: string;
    image_url: string;
    tegs: string[];
    count: number;
}
    