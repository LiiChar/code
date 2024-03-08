import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Cart, { CadVariant } from './components/Cart';
import { EventExaple } from './components/EventExaple';
import { TodosItemPage } from './components/TodosItemPage';
import { TodosPage } from './components/TodosPage';
import { UserItemPage } from './components/UserItemPage';
import { UserPage } from './components/UserPage';

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <NavLink to={'/users'}>Пользователи</NavLink>
          <NavLink to={'/todos'}>Список дел</NavLink>
        </div>
        <div>
        <Routes>
          <Route path={'/users'} element={<UserPage />}></Route>
          <Route path={'/todos'} element={<TodosPage />}></Route>
          <Route path={'/users/:id'} element={<UserItemPage />}></Route>
          <Route path={'/todos/:id'} element={<TodosItemPage />}></Route>
        </Routes>
        </div>


        {/* <Cart onClick={(num) => console.log('click', num)} height='100px' width='100px' variant={CadVariant.outlined  }>
        <button>Нажми</button>
      </Cart>
      <EventExaple/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
