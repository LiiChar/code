import { motion } from 'framer-motion'
import style from './anim.module.scss'
import React from 'react'
import classNames from 'classnames';
import {useLocation} from 'react-router-dom';

const AnimationPageChange: React.FC = React.memo(() => {
    const [isActive, setIsActive] = React.useState<boolean>(false)
    const {pathname} = useLocation()

    React.useEffect(() => {
        setIsActive(true)
    }, [pathname])

    return (
        <div className={classNames(style.wrapMotion, {[style.active]: isActive}) }>
            <motion.div
            initial={{
                opacity: 1
            }}
                animate={{
                    opacity: 0.8
                }}
                exit={{
                    opacity: 0
                }}
                onAnimationEnd={() => {
                    console.log('isedn');
                    
                    setIsActive(false)
                }}
                onAnimationComplete={() => {
                    console.log('isfin');

                    setIsActive(false)
                }}
                className="space-y-12"
            >
            </motion.div>
        </div>
    );
})

export default AnimationPageChange;