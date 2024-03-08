import React from 'react'
import { ITodo } from '../Types/types'

interface TodoItemProps {
    todo: ITodo;
    onClick: (user: ITodo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, onClick}) => {
  
  return (
    <div onClick={() => onClick(todo)}>
        <input  type="checkbox" checked={todo.completed}/>
        {todo.id}. {todo.title}
    </div>
  )
}
