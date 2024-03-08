import React from 'react';
import { useState } from 'react';
import MyInput from './UI/Input/MyInput'
import MyButton from './UI/Button/MyButton'





const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})
    function addNewPost(e) {
        e.preventDefault()

     

        const newPost = {
            ...post, id: Date.now
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
  return (
    <div>
        <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='Название' />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder='Название' />

        <MyButton onClick={addNewPost}>Содать пост</MyButton>
      </form>
    </div>
  )
}

export default PostForm