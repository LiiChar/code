import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { login, registration } from '../http/userApi'
import { LOGIN_ROUTER, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/const'

const Auth = observer(() => {
  const navigate = useNavigate()
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTER
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
  
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: window.innerHeight - 54 }}>
      <Card style={{ width: 600, padding: '5px' }}>
        <h2 style={{ margin: 'auto' }}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>

        <Form style={{ display: 'flex', flexDirection: 'column' }}>
          <Form.Control value={email} onChange={e => setEmail(e.target.value)} placeholder='Введите ваш email...' style={{ marginTop: '3px' }} />
          <Form.Control type={'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder='Введите ваш пароль...' style={{ marginTop: '3px' }} />
          <Row style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3px', paddingLeft: '15px', paddingRight: '15px' }}>
            <Button onClick={click} style={{ marginTop: '3px', alignSelf: 'end' }} variant={'outline-success'}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</Button>
            {isLogin ? <div>
              Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегестируйтесь</Link>
            </div>
              :
              <div>
                Есть аккаунт? <Link to={LOGIN_ROUTER}>Войдите</Link>
              </div>
            }
          </Row>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth