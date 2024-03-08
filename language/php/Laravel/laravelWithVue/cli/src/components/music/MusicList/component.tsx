'use client'
import React, { FC, useCallback, useEffect } from 'react'
import style from './musicScroll.module.css'
import { IMusic } from '@/type/type'
import Link from 'next/link'
import { MyAudio as Audio } from '@/components/ui/MyAudio/component'
import { useEvent } from '@/hooks/useEvent'
import { useMusic } from '@/context/MusicContext'

interface MusicSrcollProps {
  sectionMusic: IMusic[],
  
}

export const MusicScroll: FC<MusicSrcollProps> = React.memo(({ sectionMusic }) => {
  const [element, setElement] = React.useState<number>(1);
  const music = useMusic()

  const handleArrow = useEvent((side: string) => {
    if (side === 'left') {
      setElement(element - 6)

    } else if (side === 'right') {
      setElement(element + 6)

    }
  })


  return (
    <>
      <div className={style.wrapperMusicList}>
        {element !== 1 ? <Link onClick={() => handleArrow('left')} href={`#musicEl${element - 6}`} className={style.wrapperArrawLeft}>
          <div className={style.arrowLeft} >&lt;</div>
        </Link> : ''}
        <div className={style.wrapMusicScroll}>
          {sectionMusic &&
            sectionMusic.map((mus: IMusic) => (
              <section key={mus.id} id={`musicEl${mus.id}`} className={style.musicScrollElement}>
                <Audio contMusic={music} music={mus} />
              </section>
            ))
          }
        </div>
        {element + 6 <= (sectionMusic.length) ? <Link onClick={() => handleArrow('right')} href={`#musicEl${element + 6}`} className={style.wrapperArrawRight}>
          <div className={style.arrowRight} >&gt;</div>
        </Link> : ''}
        
      </div>
    </>
  )
})
