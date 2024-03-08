import React from 'react'
import style from './aside.module.css'
import Link from 'next/link'

export const Aside = React.memo(() => {
  return (
    <aside className={style.wrapperAside}>
      <nav className='flex flex-col mr-4'>
        <Link href='Profile'>Моя страница</Link>
        <Link href='Posts'>Посты</Link>
        <Link href='Subsribe'>Подписки</Link>
        <Link href='/'>Моя музыка</Link>
        <Link href='About'>О нас</Link>
      </nav>
    </aside>
  )
})
