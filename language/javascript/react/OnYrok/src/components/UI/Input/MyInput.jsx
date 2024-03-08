import React from 'react'
import classes from './MyInput.module.css'



const MyInput = (props, ref) => {
  return (
    <input  className={classes.MyInput} type="text" {...props}/>
  )
}

export default MyInput