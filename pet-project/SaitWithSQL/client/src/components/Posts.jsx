import React, { useState } from 'react'
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { useDispatch } from 'react-redux';
import { fetchChangePost } from '../feature/slicePost/counterSlice';


const Posts = () => {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={() => dispatch(fetchChangePost(text))}>Добавить пост</button>
    </div>
  )
}

export default Posts