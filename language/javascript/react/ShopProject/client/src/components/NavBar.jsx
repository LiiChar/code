import React, { useContext } from 'react'
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import { useNavigate  } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTER } from '../utils/const';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logBut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white', textDecoration: 'none'}} to={'/'}>НеСкуписьКупи</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button onClick={() => logBut()} variant={'outline-light'} style={{marginLeft: '10px'}}>Выйти</Button>
                        <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Админ панель</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTER)}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    )
})

export default NavBar