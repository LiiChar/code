import React from 'react'
import AnimationPage from '../../HOC/AnimationPage'
import style from './contact.module.scss'
import { FormattedMessage } from 'react-intl';

const ContactPage = () => {
    return (
        <AnimationPage>
            <section className={style.wrapperContact}>
                <div className={style.contact}>
                    <div className={style.question}><FormattedMessage id='contact.question'/></div>
                    <div className={style.contactText}><FormattedMessage id='contact.contactText'/></div>
                    <div className={style.numPhone}><FormattedMessage id='contact.numPhone'/></div>
                    <div className={style.email}><FormattedMessage id='contact.email'/></div>
                </div>
            </section>
        </AnimationPage>
    )
}

export default ContactPage