import { useAuth } from '../../../context/useAuth';
import { Link } from 'react-router-dom'
import unknown_person from '../../../assets/image/unknown_person.jpg'
import NavBar from './NavBar/NavBar';
import style from './aside.module.css'

const Aside = () => {
    const { isAuth, user } = useAuth();

    return (
        <div className={style.aside}>
            <div className={style.account}>
                {isAuth || !user
                    ?
                    <div className={style.unregister}>
                        <div className={style.unregisterImg}>
                            <img alt='image unregistered user' src={unknown_person} />
                        </div>
                        <div className={style.unregisterLink}>
                            <Link to='register'>Войти</Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div>
                            {user?.photo ?? <img alt='photo registrated user' src={user?.photo} />}
                        </div>
                        <div>
                            {user?.username}
                        </div>
                    </div>
                }
            </div>
            <NavBar />
        </div>

    )
}

export default Aside