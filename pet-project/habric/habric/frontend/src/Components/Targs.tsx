import React, { ChangeEvent, FC, useState } from 'react'

interface IPropsTags {
    tags: string[];
    setTags: any,
    removeTag: (arg: string) => void
}

export const Targs: FC<IPropsTags> = (props) => {
    const tags: string[] = ['Философия', 'It', 'Программирование', 'Алгоритмы', 'JavaScript', 'Рисования', 'С++', 'Python', 'C#', 'Web-developer', 'Database', 'Postgresql', 'MySql']
    const [vision, setVision] = useState<boolean>(false)
    const [text, setText] = useState<string>('')

    let filtetTags: string[] = tags.filter((tag) => tag.toLocaleLowerCase().includes(text.toLocaleLowerCase()))

    function handleTags(e: ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)

    }

    const removeTags = (e: any) => {
        props.removeTag(e.target.innerText)
    }

    return (
        <div className='w-2/4'>

            <div className='flex flex-col'>

                {vision && <div style={{bottom: '160px'}} className=' z-50 absolute w-1/4 hiddenBar  overflow-auto h-40'>
                    {filtetTags.map((tag) => (<div key={tag} onClick={() => {
                        if (!props.tags.includes(tag)) {
                            props.setTags(tag)
                        }
                    }}
                    >{tag}</div>))}
                </div>}
                <div className='w-full'>
                    <input
                        onClick={() => setVision(!vision)}
                        onChange={(e) => handleTags(e)}
                        placeholder='Выберите тег'
                        className='w-full bg-grey-500 outline-none border-2 border-blue-500'
                        value={text}
                    >
                    </input>

                    <div style={{height: '36px'}}  className='relative  scrollBar overflow-auto w-full'>
                        <div className='w-max boxCrolling  flex flex-row' >
                            {
                                props.tags.map((tag) => (
                                    <span onClick={removeTags} className='mr-1 cursor-pointer' key={tag}>{tag}</span>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
