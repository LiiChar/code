const add_post = `add-post`
const update_post = 'update-post'
const delete_post = 'delete-post'

let init = {
  dialogsDate: {
    dialogi: [{ name: 'Andry', address: 1 },
    { name: 'Dimich', address: 2 },
    { name: 'Victor', address: 3 },
    { name: 'Saha', address: 4 },
    { name: 'Sveta', address: 5 },
    { name: 'Anrew', address: 6 },
    ],
    newFriends: 'vlad'
  },
  posts: {
    post: [
      { id: 1, post: 'В данный  наблюдаем скачки сейсмической активности' },
      { id: 2, post: 'В данный нъмомент  скачки сейсмической активности' },
    ],
    newPost: { id: 1, post: 'mess' }
  },
}


function ProfileReducer(state = init, action) {
    if (action.type === add_post) {
        let newPost = state.posts.newPost
        console.log(state.messages.message);
        state.posts.post.push(newPost)
  
        state.posts.newPost = { id: action.id, post: '' }
  
        
      }
  
      else if (action.type === update_post) {
  
        let updateNewMes = action.text
        console.log(updateNewMes);
        state.posts.newPost = { id: action.id, post: updateNewMes };
        
      }
  
      else if (action.type === delete_post) {
        for (let i = 0; i < state.posts.post.length; i++) {
          if (action.id === state.posts.post[i].id) {
            delete state.posts.post.splice([i], 1)
          }
        }
      }

      return state;
}

export default ProfileReducer