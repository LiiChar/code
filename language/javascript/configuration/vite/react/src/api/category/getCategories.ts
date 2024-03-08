import axios from 'axios';
import React from 'react';
import { ICategories } from '../../types/types';



export default async (): Promise<any> => {
    return ((await axios.get('https://run.mocky.io/v3/058729bd-1402-4578-88de-265481fd7d54')).data).сategories;
}