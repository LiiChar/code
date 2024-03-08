import React from 'react'
import { motion } from 'framer-motion'

interface IMotPage {
    children: React.ReactNode
}

const AnimationPage: React.FC<IMotPage> = ({children}) => {
    return (
        <motion.div
        initial={{opacity: 0}}
            animate={{
                opacity: 0.5,
                transitionEnd: {
                    opacity: 1,
                  },
            }}
        >
            {children}
        </motion.div>
    )
}

export default AnimationPage