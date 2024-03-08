import React, { useState, useEffect, FC } from 'react'
import axios from 'axios';
import { ITodo,  } from '../Types/types';
import { List } from './List';
import { TodoItem } from './TodoItem';
import { useNavigate } from 'react-router-dom';

export const TodosPage: FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    let navigate = useNavigate()

    useEffect(() => {
        fetchTodos()
    }, [])


    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <List
            item={todos}
            renderItem={(todo: ITodo) => <TodoItem onClick={(todos) => navigate('/todos/' + todos.id)} todo={todo} key={todo.id} />} />
    )
}
