import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateArticleMutation } from '../../Store/Slices/articlesSlice'
import { RootState } from '../../Store/store'
import { setVision } from '../../Store/Slices/setUserSlice'
import { Targs } from '../Targs'
import { ImageUpload } from '../ImageUpload'

export const AddArticles = () => {
    const [name, setName] = React.useState<string>('')
    const [text, setText] = React.useState<string>('')
    const [tags, setTags] = React.useState<string[]>([])
    const [image, setImage] = React.useState<any>()
    const user = useSelector((state: RootState) => state.setUser.user)
    const dispatch = useDispatch()

    const [addArticles] = useCreateArticleMutation()

    const ref = React.useRef<HTMLTextAreaElement>(null)

    function publishing(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault()
        
        const FormTags = tags.join(',')
        console.log(tags, FormTags);
        const data = new FormData()
        data.append('name', name)
        data.append('author', user.name)
        data.append('text', text || 'gf')
        data.append('tags', FormTags)
        data.append('image', image)
        addArticles(data)
        dispatch(setVision(false))
    }

    function changeTags(tag: string) {
        setTags([...tags, tag])
    }

    function removeTags(tag: string) {
        setTags(tags.filter((el) => el !== tag));
    }

    const handleCursive = (type: string) => {
        if (Number(ref?.current?.selectionStart ?? 0) === Number(ref?.current?.selectionEnd ?? 0)) {
            return
        }
        let te: any = text
        te = te.slice(0, Number(ref?.current?.selectionStart ?? 0)) + '<' + type + '>' + te.slice(Number(ref?.current?.selectionStart ?? 0), Number(ref?.current?.selectionEnd ?? 0)) + '</' + type + '>' + te.slice(Number(ref?.current?.selectionEnd ?? 0))
        setText(te);
    }

    const handleExit = () => {
        if ( name !== '' || text !== '') {
            
            if (window.confirm('Вы уверены что хотите выйти')) {
                dispatch(setVision(false))
            }
        } else {
            dispatch(setVision(false))

        }
    }

    return (
        <div onClick={handleExit} className='fixed top-0 w-full h-full bg-slate-500 bg-opacity-50 flex justify-center items-center'>
            <div onClick={(e) => e.stopPropagation()} className='w-2/3 h-4/5 bg-white p-4'>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <textarea maxLength={150} autoFocus required className='w-96 outline-none scrollBar resize-none' value={name} onChange={(e) => setName(e.target.value)} placeholder='Введите тему'></textarea>
                    <ImageUpload setImage={setImage} />
                </div>
                <div className='h-6 flex flex-row'>
                    <button className='h-6 mr-2 w-6 border-2 border-blue-400 flex justify-center items-center' onClick={() => handleCursive('i')}><i>I</i></button>
                    <button className='h-6 mr-2 w-6 border-2 border-blue-400 flex justify-center items-center' onClick={() => handleCursive('b')}><i>b</i></button>
                    <button className='h-6 mr-2 w-6 border-2 border-blue-400 flex justify-center items-center' onClick={() => handleCursive('h1')}><h1>1</h1></button>
                    <button className='h-6 mr-2 w-6 border-2 border-blue-400 flex justify-center items-center' onClick={() => handleCursive('h2')}><h2>2</h2></button>
                    <button className='h-6 mr-2 w-6 border-2 border-blue-400 flex justify-center items-center' onClick={() => handleCursive('u')}><u>u</u></button>
                </div>
                <div className='h-3/4'>
                    <textarea wrap={'soft'} required ref={ref} value={text} onChange={() => setText(ref?.current?.value ?? '')} className='w-full h-full outline-none resize-none'></textarea>
                </div>
                <div className='flex flex-row h-20 justify-between '>
                    <button type={'submit'} className='border-2 h-10 border-blue-400' onClick={(e) => publishing(e)}>Выложить</button>
                    <Targs tags={tags} removeTag={removeTags} setTags={changeTags}></Targs>
                </div>
            </div>
        </div>
    )
}
