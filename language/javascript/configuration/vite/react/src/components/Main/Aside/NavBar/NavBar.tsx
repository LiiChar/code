import React from 'react'
import { Link } from 'react-router-dom'
import style from './nav_bar.module.css'

const NavBar = () => {
    return (
        <ul className={style.list}>
            <li className={style.elementList}>
                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace='' space="preserve" width="20px" height="20px" fill="#000000" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M40.252,14.489C18.019,14.489,0,32.507,0,54.741c0,22.233,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,32.507,62.477,14.489,40.252,14.489z"></path> <rect x="148.122" y="14.489" className="st0" width="363.878" height="80.504"></rect> <path className="st0" d="M40.252,215.748C18.019,215.748,0,233.767,0,256c0,22.233,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,233.767,62.477,215.748,40.252,215.748z"></path> <rect x="148.122" y="215.748" className="st0" width="363.878" height="80.504"></rect> <path className="st0" d="M40.252,417.007C18.019,417.007,0,435.026,0,457.259c0,22.232,18.019,40.252,40.252,40.252 c22.225,0,40.252-18.019,40.252-40.252C80.504,435.026,62.477,417.007,40.252,417.007z"></path> <rect x="148.122" y="417.007" className="st0" width="363.878" height="80.504"></rect> </g> </g></svg>
                <Link to='/'>Главная</Link>
            </li>
            <li className={style.elementList}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                <Link to='/search'>Поиск</Link>
            </li>
            <li className={style.elementList} >
            <svg width="20px" height="20px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 4C10.4508 4 9.0799 5.00309 8.61115 6.47966L7.81104 9H8.49995H15.5H16.1889L15.3888 6.47966C14.92 5.00309 13.5491 4 12 4ZM18.2872 9L17.295 5.8745C16.5626 3.56734 14.4206 2 12 2C9.57933 2 7.43733 3.56734 6.7049 5.8745L5.71268 9H3.34789C2.00585 9 1.04464 10.2956 1.43384 11.58L2.55808 15.29L3.94596 19.87C4.32928 21.135 5.49529 22 6.81704 22H9.99995H14H17.1829C18.5046 22 19.6706 21.135 20.0539 19.87L21.4418 15.29L22.5661 11.58C22.9553 10.2956 21.9941 9 20.652 9H18.2872ZM6.4444 11H3.34789L4.25698 14H8.03615L7.62706 11H6.4444ZM9.64557 11L10.0547 14H13.9452L14.3543 11H9.64557ZM16.3728 11L15.9638 14H19.7429L20.652 11H17.5555H16.3728ZM19.1369 16H15.691L15.1456 20H17.1829C17.6235 20 18.0121 19.7117 18.1399 19.29L19.1369 16ZM13.1271 20L13.6725 16H10.3274L10.8728 20H13.1271ZM8.85434 20L8.30888 16H4.86304L5.86001 19.29C5.98778 19.7117 6.37646 20 6.81704 20H8.85434Z" fill="#000000"></path> </g></svg>
                <Link to='/busket'>Корзина</Link>
            </li>
            <li className={style.elementList}>
            <svg width="20px" height="20px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"></path> <g id="Shopicon"> <path d="M33.843,26.914L24,36l-9.843-9.086C8.674,30.421,5,36.749,5,44h38C43,36.749,39.326,30.421,33.843,26.914z"></path> <path d="M24,28c3.55,0,6.729-1.55,8.926-4C34.831,21.876,36,19.078,36,16c0-6.627-5.373-12-12-12S12,9.373,12,16 c0,3.078,1.169,5.876,3.074,8C17.271,26.45,20.45,28,24,28z"></path> </g> </g></svg>
                <Link to='/account'>Аккаунт</Link>
            </li>
        </ul>
    )
}

export default NavBar