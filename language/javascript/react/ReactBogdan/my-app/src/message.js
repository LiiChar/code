
const add_mes = 'add-mes'
const update_mes = 'update-mes'
const delete_mes = 'delete-mes'

let init = {


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

}

function MessageReducer(state = init, action) {
    if (action.type === add_mes) {
        let newMes = state.messages.newMessage
        console.log(state.messages.message);
        state.messages.message.push(newMes)
  
        state.messages.newMessage = { mes: '' }
  
        
      }
  
      else if (action.type === update_mes) {
  
        let updateNewMes = action.text
        console.log(updateNewMes);
        state.messages.newMessage = { mes: updateNewMes };
        
  
  
      }else if (action.type === delete_mes) {
        for (let i = 0; i < state.messages.message.length; i++) {
          if (action.id === state.messages.message[i].id) {
            console.log(state.messages.message[i].id)
            state.messages.message.splice([i], 1)
          }
        }
        
      }
      return state
  
}

export default MessageReducer