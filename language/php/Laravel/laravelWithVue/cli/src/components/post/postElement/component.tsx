import { MyImage } from '@/components/ui/MyImage/component'
import { IPost } from '@/type/type'
import shortTextSlice from '@/utils/shortTextSlice';
import React, { FC } from 'react'

interface ElementProps {
    posts: IPost[];
}

export const PostElement: FC<ElementProps> = ({ posts }) => {

    return (
        <div className='flex flex-wrap w-full h-full'>
            {
                posts.map((post: IPost) => (
                    <div key={post.id} className=' w-1/2 p-8 pb-4 pt-4'>
                        <div className='w-full overflow-hidden' style={{whiteSpace:'nowrap'}}>
                            {post.name} 
                        </div>
                        <div style={{width: 'calc(100%)', height: 'calc(16vw)'}} className='relative'>
                            {post.image && <MyImage src={'http://localhost:8000/' + post.image} alt='' fill={true}/>}
                        </div>
                        <div className='w-full overflow-hidden'  dangerouslySetInnerHTML={{ __html: shortTextSlice(post.text)  }} style={{wordWrap: 'break-word', maxHeight: '144px'}}></div>
                    </div>
                ))
            }
        </div>
    )
}
