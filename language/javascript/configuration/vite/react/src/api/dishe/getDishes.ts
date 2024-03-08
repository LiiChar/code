import axios from 'axios';
import { IDishe } from '../../types/types';


export default async (): Promise<any> => {
    
    return  ((await axios.get('https://run.mocky.io/v3/aba7ecaa-0a70-453b-b62d-0e326c859b3b')).data).dishes;
}