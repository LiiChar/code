import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { ArtPage } from './Pages/ArtPage.jsx';
import { ErrorPage } from './Pages/ErrorPage';
import { ListRoom } from './Pages/ListRoom';
import { LogIn } from './Pages/LogIn';
import { Registration } from './Pages/Registration';
import { Room } from './Pages/Room';

function App() {
  return (
    <>
      <Routes>
        <Route path='/listroom' element={<ListRoom/>}/>
        <Route path='/reg' element={<Registration/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/room/:id' element={<Room/>}/>
        <Route path='/' element={<ArtPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  );
}

export default App;
