import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { IUser } from '../Types/types';
import { List } from './List';
import { UserItem } from './UserItem';
import { useNavigate } from 'react-router-dom'

export const UserPage: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()
  
    useEffect(() => {
      fetchUsers()
    }, [])
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data)
      } catch (error) {
        alert(error)
      }
    }
  return (
    <List 
    item={users} 
    renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/'+user.id)} user={user} key={user.id}/>}/>
  
  )
}
