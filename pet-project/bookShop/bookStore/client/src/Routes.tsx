import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header';
import { AdminPage } from './pages/AdminPage';
import { BookPage } from './pages/BookPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ProfilePage } from './pages/ProfilePage';
import { RegistrationPage } from './pages/RegistrationPage';

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/profile/:id' element={<ProfilePage/>} />
        <Route path='/book/:id' element={<BookPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default Router;
