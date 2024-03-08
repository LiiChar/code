import React from 'react'
import AnimationPage from '../../HOC/AnimationPage'
import style from './design.module.scss'
import { FormattedMessage } from 'react-intl';

const url = import.meta.env.VITE_FRONTEND_URl


export const DesignPage = () => {
    return (
        <AnimationPage>
            <section className={style.wrapperDesign}>
                <div className={style.design}>
                    <div className={style.DesignSection}>
                        <div className={style.infoSectionDesign}>
                            <div className={style.numberTitle}><FormattedMessage id="desing.numberTitle"/></div>
                            <div className={style.title}><FormattedMessage id="desing.title"/></div>
                            <div className={style.pageText}><FormattedMessage id="desing.pageText"/></div>
                        </div>
                        <div className={style.wrapperCameraImage}>
                            <img className={style.cameraImage} src={`${url}/assets/image/laptop.png`} alt="Image camera for video page" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </AnimationPage>
    )
}
