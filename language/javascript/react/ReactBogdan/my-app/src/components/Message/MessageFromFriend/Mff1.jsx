import React from 'react'
import s from './Mff.module.css'
import delMesCreation from '../../../state'

function mff(props) {


  function delMes() {
    props.act.dispatch(delMesCreation(props.message.id))

  }
  return (
    <div className={s.messages}>
      <div className={s.message}>{props.message.mes}</div>
      <button className={s.Btn} onClick={delMes}>Удалить</button>

    </div>
    
  )
}

export default mff