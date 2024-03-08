import React from 'react'
import Friens from './Friends/Friens'
import Mff1 from './MessageFromFriend/Mff1'
import s from './Message.module.css'
import omMesesCreator from '../../state'
import addMesCreator from '../../state'


function Message1(props) {
  console.log(props.act);
  let newPost = React.createRef();

  
  let a = props.mes.length


  function onMesesChange() {
    let updateText = newPost.current.value
    props.act.dispatch(omMesesCreator(updateText, a))
  }

  function addMes() {
    props.act.dispatch(addMesCreator(a))
  }

  let name = props.dia.map((e) =>
    <Friens names={`${e.name}`} address={`/${e.address}`} />
  ) 
  let message = props.mes.map((e) =>
    <Mff1 message={e} act={props.act}/>
  )



  return (
    <div className={s.Mes}>
      <div>{name}</div>
      <div className={s.messages}>{message}<div>
        <textarea onChange={onMesesChange} ref={newPost} value={props.newMesText.newMes}></textarea>

      </div>
        <button className={s.Btn} onClick={addMes} type='button'>Добавить</button>
      </div>
    </div>
  )
}

export default Message1 