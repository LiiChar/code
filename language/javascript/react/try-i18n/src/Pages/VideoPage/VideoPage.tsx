import React from 'react'
import AnimationPage from '../../HOC/AnimationPage'
import style from './video.module.scss'
import { FormattedMessage } from 'react-intl';

const url = import.meta.env.VITE_FRONTEND_URl

const VideoPage = () => {
    return (
        <AnimationPage>
            <section className={style.wrapperVideo}>
                <div className={style.video}>
                    <div className={style.videoSection}>
                        <div className={style.infoSectionVideo}>
                            <div className={style.numberTitle}><FormattedMessage id="video.numberTitle" /></div>
                            <div className={style.title}><FormattedMessage id="video.title" /></div>
                            <div className={style.pageText}><FormattedMessage id="video.pageText" /></div>
                        </div>
                        <div className={style.wrapperCameraImage}>
                            <img className={style.cameraImage} src={`${url}/assets/image/camera.png`} alt="Image camera for video page" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </AnimationPage>
    )
}

export default VideoPage