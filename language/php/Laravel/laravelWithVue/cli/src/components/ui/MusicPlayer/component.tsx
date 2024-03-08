import { useMusic } from '@/context/MusicContext'
import { useDownload } from '@/hooks/useDownload'
import { useEvent } from '@/hooks/useEvent'
import { IMusic } from '@/type/type'
import Image from 'next/image'
import React, { FC, useState } from 'react'

const baseUrl = 'http://127.0.0.1:8000/'

export const AudioPlayer = React.memo(() => {
    const { currentMusic, start, stop, nextSound, prevSound, isPlaying, formatDuration, formatTimer } = useMusic()
    console.log(currentMusic);
    
    const [timer, setTimer] = useState<number>(0);

    const music = currentMusic.music

    return (
        <div className={`flex pl-2 pr-2 justify-between h-full `}>

            <div className='flex h-full items-center'>
                <div className='mr-4'>
                    <button onClick={() => isPlaying ? stop() : start(baseUrl + music.cover)} className='mr-4'>{isPlaying ? 'stop' : 'start'}</button>
                    <button onClick={() => nextSound('')} className='mr-4'>next</button>
                    <button onClick={() => prevSound('')}>prev</button>
                </div>
                <div className='mr-2 rounded-lg'>
                    <div className='relative w-11 h-11'>
                        <Image sizes="(max-width: 320px) 280px,
               (max-width: 640px) 600px,
               (max-width: 1024px) 940px,
               1200px" className='rounded-lg' fill={true} alt='Cover for music' src={baseUrl + music.cover} />
                    </div>
                </div>
                <div onClick={(e) => e.stopPropagation()} className='items-center'>
                    <div>{music.name}</div>
                    <div>{music.composeres?.username}</div>
                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()} className='h-full flex items-center'>

                <div className='h-full relative right-0 w-8 flex items-center justify-center'>
                    <span className='w-full'>{formatTimer(timer)}</span>
                </div>
            </div>
            <div className='absolute z-50'>
                <audio onTimeUpdate={() => setTimer(currentMusic.audio.currentTime)} ref={currentMusic.audio} hidden />
 
            </div>
        </div>
    )
})
