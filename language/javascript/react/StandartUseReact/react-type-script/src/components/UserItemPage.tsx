import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { IUser } from '../Types/types';


export const UserItemPage: React.FC = () => {
    const [users, setUsers] = useState<IUser | null>(null)
    const params = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
      fetchUser()
    }, [])
  
    async function fetchUser() {
      try {
        const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/` + params.id)
        setUsers(response.data)
      } catch (error) {
        alert(error)
      }
    }
  return (
    <div>
        <button onClick={() => navigate('/users')}>Back</button>
        <h1>Страница пользователся {users?.name}</h1>
        <div>
            {users?.email}
        </div>
        <div>
            {users?.address.city}{users?.address.street}{users?.address.zipcode}
        </div>
    </div>
  )
}
