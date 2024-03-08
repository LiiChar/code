export interface IGenre {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
}

export interface IComposer {
  id: number;
  username: string;
  full_name?: string;
  about: string;
  photo?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IMusic {
  id: number;
  name: string;
  composer_id: string;
  audition: number;
  cover?: string;
  music: string;
  composeres?: IComposer;
  genre?: IGenre;
  created_at?: string;
  updated_at?: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  photo?: string;
  role: string;
  location?: string;
  date_birthday?: string;
  about_me?: string;
  subscription: IMusic[];
  age?: number;
  created_at?: string;
  updated_at?: string;
}

export interface IPost {
  id: number;
  name: string
  text: string;
  user_id: number;
  author: IUser;
  image?: string;
  num_reader: number;
  created_at?: string;
  updated_at?: string;
}


