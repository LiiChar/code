export interface UpdateUserDto {
    id: number;
    username?: string;
    password?: string;
    about?:string;
    image?:string;
}