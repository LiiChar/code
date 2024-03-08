import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { FavouritsPage } from './pages/FavouritsPage';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/favourites' element={<FavouritsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
