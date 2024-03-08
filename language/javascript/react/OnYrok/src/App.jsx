
import React from 'react';
import "./Style/App.css"
import { useState } from 'react';
import PostList from "./components/PostList"
import PostForm from './components/PostForm'
import  PostFilter  from "./components/PostFilter";
import MyModal from './components/UI/Modal/MyModal'
import MyButton from './components/UI/Button/MyButton'
import { usePosts } from './hooks/usePost';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "aa", body: "dd" },
    { id: 2, title: "bb", body: "ww" },
    { id: 3, title: "cc", body: "aa" },
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal 
      visible={modal}
      setVisible={setModal}
      >
      <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPost} title="Посты про js"></PostList>
    </div>
  );
}


export default App;
