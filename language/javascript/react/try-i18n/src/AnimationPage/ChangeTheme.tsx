import React from 'react'
import { motion } from 'framer-motion'

export const variants = {
    show: {
        backgraundColor: 'black',
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.3
        }
    },
    hide: {
        y: -20,
        opacity: 0
    }
};

const ChangeTheme = () => {
    return (
        <div style={{position: 'absolute', width: '100%', height: '100%'}}>

            <motion.div
                variants={variants}
                animate="show"
                initial="hide"
            >

            </motion.div>
        </div>
    )
}

export default ChangeTheme