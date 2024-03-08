import React from 'react'
import style from './header.module.scss';
import {Link, useLocation} from 'react-router-dom'
import classNames from 'classnames';
import { useTheme } from '../../context/ThemeContext';
import getLanguageHeaderByLocals from '../../utils/getLanguageHeaderByLocals';

const Header: React.FC = React.memo(() => {
    const {pathname} = useLocation();
    const {isLight, theme, toggleTheme} = useTheme();
    
    let linkPath = getLanguageHeaderByLocals()


    return (
        <div className={classNames({[style.light]: isLight, [style.headerWrapper]: true})}>

            <div onClick={() => toggleTheme()} className={style.nameSite}>
                Be Leb.
            </div>
            <div className={style.wrapperLinks}>
                {
                    linkPath.map(({namePath, path}) => (
                        <Link key={path} className={classNames({ [style.activeLink]: path == pathname, [style.link] :  isLight, [style.linkDark]: !isLight}, )} to={path}>{namePath}</Link>
                    ))
                }
            </div>
            <div className={style.hello}>
                <div className={`${style.roudedAnim} ${style.goTo}`}></div>
                <div className={`${style.roudedAnim} ${style.goBack}`}></div>
                <div className={`${style.roudedAnim} ${style.goTo}`}></div>
                <div className={`${style.roudedAnim} ${style.goBack}`}></div>
                <div>
                    hello
                </div>
            </div>
        </div>
    )
})

export default Header