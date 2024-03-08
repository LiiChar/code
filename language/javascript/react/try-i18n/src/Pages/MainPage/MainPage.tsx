import React from 'react'
import style from './main.module.scss'
import AnimationPage from '../../HOC/AnimationPage'
import { FormattedMessage } from 'react-intl';

const MainPage = () => {
    return (
        <AnimationPage>

            <section>
                <div>
                    <h1 className={style.intro}>
                        <FormattedMessage id="main.intro"/> <br />
                        <FormattedMessage id="main.intro2"/> <br />
                        <span className={style.smallTitle}>
                        <FormattedMessage id="main.smallTitle"/>
                        </span>
                    </h1>
                </div>
            </section>
        </AnimationPage>
    )
}

export default MainPage