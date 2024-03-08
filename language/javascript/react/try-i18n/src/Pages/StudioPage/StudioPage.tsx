import React from 'react'
import AnimationPage from '../../HOC/AnimationPage'
import style from './studio.module.scss'
import classNames from 'classnames'
import { useTheme } from '../../context/ThemeContext'
import { FormattedMessage } from 'react-intl';

const url = import.meta.env.VITE_FRONTEND_URl

const StudioPage = () => {
    const { isLight } = useTheme()

    return (
        <AnimationPage>
            <section className={classNames({ [style.wrapperStudio]: true, [style.light]: isLight, [style.dark]: !isLight, })}>
                <div className={style.studio}>
                    <div className={style.wrapperTitle}>
                        <div className={style.title}>
                            <FormattedMessage id="studio.title" />
                        </div>
                    </div>
                    <article className={style.articleWrapper}>
                        <div className={style.wrapperInfo}>
                            <div className={style.titleArticle}>
                                <FormattedMessage id="studio.article1.div" />
                            </div>
                            <p>
                                <FormattedMessage id="studio.article1.p1" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article1.p2" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article1.p3" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article1.p4" />
                            </p>
                        </div>
                        <div className={style.wrapperImage}>
                            <img className={style.imageStudio} src={`${url}/assets/image/FirstImage.jpg`} alt="First image person for present studio" />
                        </div>
                    </article>
                    <article className={style.articleWrapper}>
                        <div className={style.wrapperImage}>
                            <img className={style.imageStudio} src={`${url}/assets/image/SecondImage.jpg`} alt="Second image person for present studio" />
                        </div>
                        <div className={style.wrapperInfo}>
                            <div  className={style.titleArticle}>
                                <FormattedMessage id="studio.article2.div" />
                            </div>
                            <p>
                                <FormattedMessage id="studio.article2.p1" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article2.p2" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article2.p3" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article2.p4" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article2.p5" />
                            </p>
                        </div>
                    </article>
                    <article className={style.articleWrapper}>
                        <div className={style.wrapperInfo}>
                            <div  className={style.titleArticle}>
                                <FormattedMessage id="studio.article3.div" />
                            </div>
                            <p>
                                <FormattedMessage id="studio.article3.p1" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article3.p2" />
                            </p>
                            <p>
                                <FormattedMessage id="studio.article3.p3" />
                            </p>
                        </div>
                        <div className={style.wrapperImage}>
                            <img className={style.imageStudio} src={`${url}/assets/image/TheesImage.jpg`} alt="Thee image map for present studio" />
                        </div>
                    </article>
                </div>
            </section>
        </AnimationPage>
    )
}

export default StudioPage