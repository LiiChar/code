import React from 'react'
import Image from '../Image/Image'
import s from './Posts.module.css'

function Posts({PostContents, act}) {


  function delPost() {
    act.act.store.dispatch(act.act.store.action.delPostCreation(PostContents))
  }

  return (
    <div className={s.Post}>
        <div>
            <Image ClassImg={'ImgPosts'} img={'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg'}/>
        </div>
        <div className={s.PostContent}>
            {PostContents.post}
        </div>
        <div className={s.Btn}>
          <button onClick={delPost}>Нажмите чтобы удалить</button>
        </div>
    </div>
  )
}

export default Posts