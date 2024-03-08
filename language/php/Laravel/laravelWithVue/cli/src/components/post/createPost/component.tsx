import { useCreatePost } from '@/api/Post/useCreatePost'
import { useGetPost } from '@/api/Post/useGetPost'
import { MyButton } from '@/components/ui/MyButton/component'
import { MyInput } from '@/components/ui/MyInput/component'
import { MyText } from '@/components/ui/MyText/component'
import { MyUpload } from '@/components/ui/MyUploadInput/component'
import { useAuth } from '@/context/AuthContext'
import { useModal } from '@/context/modalContext'
import { useEvent } from '@/hooks/useEvent'
import React, { useState } from 'react'

export const CreatePost = () => {
    // Добавить useAuth
    const [name, setName] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [photo, setPhoto] = useState<any>()
    const {createPost: cratePost} = useCreatePost()
    const {user} = useAuth()
    const {refresh} = useGetPost()
    const {toggleVison} = useModal()

    const handleText = useEvent((textProp: string) => {
        setText(textProp)
    })

    const handleName = useEvent((nameProps: string) => {
        setName(nameProps)
    })

    const handlePhoto = useEvent((photoProps: File) => {
        setPhoto(photoProps)
    })

    const createPost = useEvent(() => {
        let formData = new FormData();
        formData.append('name', name);
        formData.append('text', text);
        formData.append('user_id', String(user?.id));
        formData.append('image', photo);

        cratePost(formData).then(() => {
            refresh()
            toggleVison(false)
        })
    })

    return (
        <div onClick={() => toggleVison(false)} style={{ backgroundColor: '#3636365e',  }} className='fixed top-0 w-full h-full flex justify-center items-center bg border'>
            <div onClick={(e) => e.stopPropagation()} style={{borderRadius: '8px'}} className='p-4 flex flex-col h-3/4 gap-4 w-1/2  bg-white'>
                <div>
                    <MyInput handleFunc={handleName} input={name} placholder='Введите название поста' autoFocuced={true} />
                </div>
                <div>
                    <MyUpload handleFunc={handlePhoto} type='image' />
                </div>
                <div className='overflow-auto h-full' >
                    <MyText handleFunc={handleText} text={text} />
                </div>
                <div>
                    <MyButton handleFunc={createPost} placeholder='Создать'/>
                </div>
            </div>
        </div>
    )
}
