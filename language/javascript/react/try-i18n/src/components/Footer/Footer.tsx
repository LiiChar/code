import React from 'react'
import style from './footer.module.scss'
import { useTheme } from '../../context/ThemeContext'
import classNames from 'classnames'
import { useLocal } from '../../context/LocalsContext'
import { LOCALES } from '../../i18n/locales'
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  const { isLight, toggleTheme } = useTheme()
  const { changeLocal, local } = useLocal()
  return (
    <div className={classNames({ [style.wrapperFooter]: true, [style.light]: isLight, [style.dark]: !isLight, })}>
      <div onClick={toggleTheme} className={style.theme}>
        {
          isLight
            ?
            <div>
              <FormattedMessage id="footer.light" />
            </div>
            :
            <div>
              <FormattedMessage id="footer.dark" />
            </div>
        }
      </div>
      <div className={style.footer}>

        <div className={style.name}>
          <FormattedMessage id="footer.name" />
        </div>
        <div>
          <FormattedMessage id="footer.2023" />
        </div>
        <div className={style.nameSite}>
          <FormattedMessage id="footer.nameSite" />
        </div>
      </div>
      <div className={style.locals}>
        <div className={classNames(style.local, { [style.activeLocal]: local === LOCALES.RUSSIAN })} onClick={() => changeLocal(LOCALES.RUSSIAN)}>Ru</div>
        <div className={classNames(style.local, { [style.activeLocal]: local === LOCALES.FRENCH })} onClick={() => changeLocal(LOCALES.FRENCH)}>Fr</div>
        <div className={classNames(style.local, { [style.activeLocal]: local === LOCALES.ENGLISH })} onClick={() => changeLocal(LOCALES.ENGLISH)}>EN</div>
      </div>
    </div>
  )
}

export default Footer