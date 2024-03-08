import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

const Routers: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/log' element={<Login />} />
        <Route path='/' element={<Chat />} />
        <Route path='/reg' element={<Registration />} />
      </Routes>
    </>

  )
}

export default Routers

