import React, { FC, useEffect, useState } from 'react'
import { v4 } from 'uuid';
import io from 'socket.io-client';
import { message } from '../interfaces/interface';
import axios from 'axios';

const Chat: FC = () => {
  let [state, setState] = useState<message[]>([])
  let [text, setText] = useState('')
  let users = []
  
  const socket = io("ws://localhost:4000");

  useEffect(() => {
    axios.get('http://localhost:4000/api/chat').then((data) => {
      users = data.data.body
    })
  }, [])

  useEffect(() => {
    socket.emit('getMessage');
  }, [])

  // receive a message from the server
  socket.on('getMessage', (messages: message[]) => {
    console.log(messages);
    
    setState(messages)
  });

  function handleMes() {
    socket.emit('sendMessage', {id: v4(), user: 'Vald', message: text})
  } 

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text}/>
      <button onClick={handleMes}>Click</button>
      {state.map((arg: message) =>
        <div key={arg.id}>{arg.user}:   {arg.message}</div>
      )}
    </div>
  )
}

export default Chat