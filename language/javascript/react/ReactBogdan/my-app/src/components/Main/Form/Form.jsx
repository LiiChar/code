import React from 'react';
import s from './Form.module.css';
import addPostCreation from '../../../state'
import onUpdatePostCreation from '../../../state'


function Form(props) {
  console.log(props.act1);


  let a = props.act.act.post.length
  let newMes = React.createRef();

  function OnPost() {
    props.act1.dispatch(addPostCreation(a))
  }



  function onUpdatePostCont() {
    let Mes = newMes.current.value
    props.act1.dispatch(onUpdatePostCreation(Mes,a))
  }

  return (
    <div >
      <div className={s.Form}>
        <div className={s.Insert}>
          Введите форму
        </div>
        <div className={s.Input}>
          <input onChange={onUpdatePostCont} ref={newMes} className={s.InputContent} type="text" />
        </div>
        <div className={s.Btn}>
          <button onClick={OnPost}>Нажмите чтобы добавить</button>
        </div>

      </div>
    </div>
  )
}

export default Form