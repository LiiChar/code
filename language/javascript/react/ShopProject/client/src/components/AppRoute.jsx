import React from 'react'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/const';
import {Routes, Route , Navigate} from 'react-router-dom'
import { Context } from '../index';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';

const AppRoute = observer(() => {
    const {user} = useContext(Context)
  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact></Route>
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact></Route>
        )}
        <Route path='*' element={<Navigate to={SHOP_ROUTE}/>} />
    </Routes>
  )
})

export default AppRoute