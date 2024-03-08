import React from 'react'
import Classes from './MyButton.module.css'
function MyButton({children, ...props}) {
  return (
    <button {...props} className={Classes.MyBtn}>
        {children}
    </button>
  )
}

export default MyButton