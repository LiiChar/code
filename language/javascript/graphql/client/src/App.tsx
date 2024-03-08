import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import { IPost, IUser } from './models'
import { GET_ALL_USERS, GET_ONE_USERS } from './query/user';
import { CREATE_USER } from './mutation/user';

function App() {
  const { data, loading, error, refetch} = useQuery(GET_ALL_USERS)
  const { data:OneUser, loading:loadOne} = useQuery(GET_ONE_USERS, {
    variables: {
      id: 1
    }
  })
  const [newUser] = useMutation(CREATE_USER)

  const [users, setUsers] = useState<IUser[]>([])
  const [username, setUsername] = useState<string>('')
  const [age, setAge] = useState<number>()

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  }, [data])

  if (loading) {
    return <h1>Loading...</h1>
  }

  async function addUser(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const user = await newUser({
      variables: {
        input: {
          username, age
        }
      }
    })
    console.log(user);

    setAge(0)
    setUsername('')
  }

  const getAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    refetch()
  }

  console.log(OneUser);
  

  return (
    <div>
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
        <input value={age} onChange={(e) => setAge(Number(e.target.value))} type="number" />
        <div className='btns'>
          <button onClick={(e) => addUser(e)}>Создать</button>
          <button onClick={(e) => getAll(e)}>Получить</button>
        </div>
      </form>
      <div>
        {users.map(user => (
          <div key={user.id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
