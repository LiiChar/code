'use client'

import { useGetMusic } from '@/api/Music/useGetMusic'
import React, { useEffect } from 'react'
import style from './music.module.css'
import { MyInput as Input } from '@/components/ui/MyInput/component'
import { MusicScroll as MusicS } from '@/components/music/MusicList/component'
import { useEvent } from '@/hooks/useEvent'
import { useModal } from '@/context/modalContext'
import { useMusic } from '@/context/MusicContext'
import { AudioPlayer } from '@/components/ui/MusicPlayer/component'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'

enum SectionMusic {
    main = 'main',
    music = 'music',
    radio = 'radio',
    update = 'update',
}

export const Music = React.memo(() => {
    const [search, setSearch] = React.useState<string>('')
    const [sectionMusic, setSectionMusic] = React.useState<SectionMusic>(SectionMusic.music)
    const { toggleVison } = useModal()
    const { music, refresh, currentMusic, audio } = useMusic()
    const { user } = useAuth()

    const handleSearch = useEvent((str: string) => {
        setSearch(str);
    })

    const searchMusic = React.useMemo(() => {
        return music.filter((mus) => mus.name.toLowerCase().includes(search.toLowerCase()))
    }, [search])

    const handleVisionModalUpload = useEvent(() => {
        toggleVison(true)
    })

    const handleSection = (section: SectionMusic) => {
        setSectionMusic(section)
    }

    return (
        <div style={{ flexDirection: 'column', border: 'none' }} className={style.wrapperMusic}>
            <article className={`${style.wrapperMusic} mb-4`}>
                {currentMusic?.music && <AudioPlayer />}
            </article>
            <article className={style.wrapperMusic}>
                <div>
                    <section className='flex justify-between m-2'>
                        <div className='flex'>
                            <button onClick={() => handleSection(SectionMusic.main)} className={style.musicNavElemnt}>Главная</button>
                            <button onClick={() => handleSection(SectionMusic.music)} className={style.musicNavElemnt}>Моя музыка</button>
                            <button onClick={() => handleSection(SectionMusic.radio)} className={style.musicNavElemnt}>Радио</button>
                            <button onClick={() => handleSection(SectionMusic.update)} className={style.musicNavElemnt}>Обновления</button>
                        </div>
                        <div className='flex '>
                            <div className={style.musicNavElemnt} id='icon' data-name="Создать плейлист">&#9833;&#9833;&#9833;</div>
                            <div onClick={handleVisionModalUpload} className={style.musicNavElemnt} id='icon' data-name="Загрузить музыку">&#9835;</div>
                        </div>
                    </section>
                    <section className='p-3 h-16'>
                        <Input left={true} placholder='Поиск музыки' handleFunc={handleSearch} input={search} />
                    </section>
                    <section className='p-3'>
                        <div>
                            Мои треки
                        </div>
                        <div>
                            {sectionMusic == 'music' && <MusicS sectionMusic={search.length > 0 ? searchMusic : music} />}
                        </div>
                    </section>
                </div>
            </article>
            <audio ref={audio} hidden />
        </div>
    )
})
