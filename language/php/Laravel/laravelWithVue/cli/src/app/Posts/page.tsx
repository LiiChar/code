'use client'

import { useCreatePost } from '@/api/Post/useCreatePost';
import { useGetPost } from '@/api/Post/useGetPost';
import { Wrapper } from '@/components/layout/Wrapper/component';
import { CreatePost } from '@/components/post/createPost/component';
import { PostElement } from '@/components/post/postElement/component';
import { MyButton } from '@/components/ui/MyButton/component';
import { MyInput } from '@/components/ui/MyInput/component';
import { useModal } from '@/context/modalContext';
import { useEvent } from '@/hooks/useEvent';
import { IPost } from '@/type/type';
import React, { useState } from 'react'

const Posts = () => {
    const {toggleVison,vision} = useModal()
    const [search, setSearch] = useState<string>('')
    const { posts } = useGetPost()

    const handleSearch = useEvent((e) => {
        setSearch(e)
    })

    const handleButton = useEvent(() => {
        toggleVison(true)
    })

    return (
        <>
            <Wrapper>
                <div style={{width: '84%'}} className='flex flex-col w-full h-max'>
                    <div className='flex flex-row w-full h-8 pl-8 pr-8 justify-between'>
                        <div>
                            <MyInput handleFunc={handleSearch} input={search} placholder='Введите название поста или песни' />
                        </div>
                        <div className='w-1/5'>
                            <MyButton handleFunc={handleButton} placeholder='Написать пост' />
                        </div>
                    </div>
                    <div className='flex flex-col w-full h-full'>
                    <PostElement posts={posts}/>
                    </div>
                </div>
            </Wrapper>
            {vision && <CreatePost />}            
        </>
    )
}

export default Posts;