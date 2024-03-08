import React, { useEffect } from 'react'
import Posts from './components/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetPost, fetchDeletePost } from './feature/slicePost/counterSlice';

const App = () => {
  const post = useSelector((state) => state.post.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetPost())
  }, [])

  return (
    <div>
      <Posts/>
      {
        post.map(post =>
          <div onClick={() => dispatch(fetchDeletePost(post.id))} key={post.id}>id:{post.id} text:{post.post}</div>
        )}
    </div> 
  )
}

export default App