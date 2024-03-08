import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ITodo } from '../Types/types'


export const TodosItemPage: React.FC = () => {
  let [dotos, setTodos] = useState<ITodo | null>()
  let param = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    FetchTodos()
  }, [])
  
  async function FetchTodos() {
    try {
    let response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/` + param.id)
    setTodos(response.data)
  } catch(e) {
    alert(e)
  }
  }

  console.log(dotos);


  return (
    <div>
      <button onClick={() => navigate('/todos')}>Back</button>
      <h1>{dotos?.id}__{dotos?.title}</h1>
    </div>
  )
}
