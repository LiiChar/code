'use client'

import React, { FC, useCallback } from 'react'
import { MyUpload } from '../MyUploadInput/component'
import { MyInput as Input } from '../MyInput/component'
import { useGetGenre } from '@/api/Genre/useGetGenre';
import { MySelect } from '../MySelect/component';
import { useEvent } from '@/hooks/useEvent';
import { useModal } from '@/context/modalContext';
import style from './upload.module.css'
import { MyButton } from '../MyButton/component';
import { useGetComposer } from '@/api/Composer/useGetComposer';
import { useCreateMusic } from '@/api/Music/useCreateMusic';
import { useMusic } from '@/context/MusicContext';


export const UploadMusic: FC = React.memo(() => {
    const [file, setFile] = React.useState<any>();
    const [photo, setPhoto] = React.useState<any>();
    const [nameMusic, setNameMusic] = React.useState<string>("");
    const [genre, setGenre] = React.useState<number>(0);
    const [composer, setComposers] = React.useState<number>(0);
    const [upload, setUpload] = React.useState<boolean>(false);

    const genres = useGetGenre()
    const composersList = useGetComposer()
    const {handleGetData} = useCreateMusic()
    const {music,refresh} = useMusic()

    const { vision, toggleVison } = useModal()

    const handleFile = useEvent((file: File) => {
        setFile(file)
    })

    const handlePhoto = useEvent((photo: File) => {
        setPhoto(photo)
    })

    const handleName = useEvent((name: string) => {
        setNameMusic(name)
    })

    const handleGenre = useEvent((select: number) => {
        setGenre(select)
    })

    const handleComposer = useEvent((select: number) => {
        setComposers(select)
    })

    const uploadMusic = (() => {
        setUpload(true);
        let formData = new FormData();
        formData.append('name', nameMusic);
        formData.append('genre_id', String(genre));
        formData.append('composer_id', String(composer));
        formData.append('cover', photo);
        formData.append('music', file);
        handleGetData(formData).then(() => {
            refresh()
            toggleVison(false)
        })
    })

    return (
        <div onClick={() => toggleVison(false)} style={{ display: vision ? '' : 'none' }} className={style.wrapperModalUpload}>
            <div onClick={(e) => e.stopPropagation()} className={style.modalUpload}>
                <div className='m-4'>
                    <div className={style.underLine}>
                        Выберите файлы на вашем компьютере
                    </div>
                    <div>
                        Музыка
                    </div>
                    <MyUpload type='file' accept='accept=".mp3,audio/*"' handleFunc={handleFile} />
                </div>
                <div className='m-4'>
                    <div>
                        Обложка
                    </div>
                    <MyUpload type='file' handleFunc={handlePhoto} />
                </div>
                <div className='m-4'>
                    <span className='mr-2'>Жанр:</span><MySelect  handleSelect={handleGenre} list={genres } />
                </div>
                <div className='m-4'>
                    <span className='mr-2'>Композитор:</span><MySelect  handleSelect={handleComposer} list={composersList} />
                </div>
                <div className='m-4 h-8'>
                    <Input input={nameMusic} handleFunc={handleName} placholder='Введите название' />
                </div>
                <div className='m-4 w-24 h-8 float-right'>
                    <MyButton handleFunc={uploadMusic} placeholder={upload ? 'Подождите' : nameMusic ? 'Загрузить' : 'Выйти'} />
                </div>
            </div>
        </div>
    )
})
