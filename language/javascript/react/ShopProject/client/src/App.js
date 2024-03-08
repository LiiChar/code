import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './index';
import AppRoute from './components/AppRoute';
import NavBar from './components/NavBar';
import { check } from './http/userApi';


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 100)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <Spinner animation={'grow'}/>
  }

  return (

      <BrowserRouter>
        <NavBar />
        <AppRoute />
      </BrowserRouter>

  );
})

export default App;
