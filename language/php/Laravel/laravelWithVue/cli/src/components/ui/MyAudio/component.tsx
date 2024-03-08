import { musicContextType } from '@/context/MusicContext'
import { useDownload } from '@/hooks/useDownload'
import { useEvent } from '@/hooks/useEvent'
import { IMusic } from '@/type/type'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { MyImage } from '../MyImage/component'

interface AudioProps {
    music: IMusic,
    contMusic: musicContextType
}

const baseUrl = 'http://127.0.0.1:8000/'

export const MyAudio: FC<AudioProps> = React.memo(({ music, contMusic }) => {
    const [hover, setHover] = useState<boolean>(false);
    const {audioList, currentMusic, formatDuration, formatTimer, isPlaying, nextSound, prevSound, setAudio, start, stop,} = contMusic;
    const [timer, setTimer] = useState<number>(0);
    const isCurrentMusic = currentMusic.url === (baseUrl + music.music) && timer != 0;
    const handleHover = useEvent((bool: boolean) => {
        setHover(bool)
    })
    return (
        <div onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} onClick={() => isPlaying ? stop() : start(baseUrl + music.cover)} className={`flex pl-2 pr-2 justify-between h-full ${isCurrentMusic || hover ? 'bg-gray-200 rounded-lg' : ''}`}>
            <div className='flex h-full items-center'>
                <div className='mr-2 rounded-lg'>
                    <div className='relative w-11 h-11'>
                        <MyImage  handleFunc={() => isPlaying ? stop() : start(baseUrl + music.cover)}  className='rounded-lg' fill={true} alt='Cover for music' src={baseUrl + music.cover} />
                    </div>
                </div>
                <div onClick={(e) => e.stopPropagation()} className='items-center'>
                    <div>{music.name}</div>
                    <div>{music.composeres?.username}</div>
                </div>
            </div>
            <div onClick={(e) => e.stopPropagation()} className='h-full flex items-center'>
                <div style={{visibility: hover ? 'visible': 'hidden'}} className='mr-4'>
                    <button className='mr-2'>A</button>
                    <button>Y</button>
                </div>
                <div className='h-full relative right-0 w-8 flex items-center justify-center'>
                    <span className='w-full'>{isCurrentMusic ? formatTimer(timer) : formatDuration()}</span>
                </div>
            </div>
            <div className='absolute z-50'>
                <audio onTimeUpdate={() => formatTimer(currentMusic.audio.currentTime)} ref={currentMusic.audio} hidden />
            </div>
        </div>
    )
})

