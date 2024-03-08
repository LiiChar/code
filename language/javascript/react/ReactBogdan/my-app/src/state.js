import message from './message'
import profile from './profile'

let store = {

  _state: {
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

    messages: {
      message: [{ id: 1, mes: 'Hi' },
      { id: 2, mes: 'Hello' },
      { id: 3, mes: 'Die' },
      { id: 4, mes: 'I' },
      { id: 5, mes: 'wanna' },
      { id: 6, mes: 'Kill this programm' },
      ],
      newMessage: { id: 1, mes: 'mess' }
    },

    posts: {
      post: [
        { id: 1, post: 'В данный  наблюдаем скачки сейсмической активности' },
        { id: 2, post: 'В данный нъмомент  скачки сейсмической активности' },
      ],
      newPost: { id: 1, post: 'mess' }
    },
  },




  call() {
  },

  subscribe(rerenderEntireTree) {
    this.call = rerenderEntireTree
    console.log(this.call);
  },

  getState() {
    return this._state
  },



  dispatch(action) {
    this._state = profile(this._state, action)
    this._state = message(this._state, action)

    this.call()
  },

  action: {

  },
}


export function addPostCreation(a) {
  return { id: a + 1, type: 'add-post' }
}
export function onUpdatePostCreation(Mes, a) {
  return { id: a + 1, type: 'update-post', text: Mes }
}
export function delPostCreation(PostContents) {
  return { type: 'delete-post', id: PostContents.id }
}
export function omMesesCreator(updateText, a) {
  return { id: a + 1, type: 'update-mes', text: updateText }
}
export function addMesCreator(a) {
  return { id: a + 1, type: 'add-mes' }
}
export function delMesCreation(message) {
  return { type: 'delete-mes', id: message }
}




export default store

