import React from 'react'
import { useGetNameByNameQuery, useUpdateUserMutation } from '../../Store/Slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/store'
import { IActicles } from '../../types/acticles'
import { useGetArticleByNameQuery } from '../../Store/Slices/articlesSlice'
import { Article } from '../../Components/articles/Article'
import { setUser } from '../../Store/Slices/setUserSlice'
import { useNavigate } from 'react-router-dom'
import { ImageUpload } from '../../Components/ImageUpload'

export const Profile = () => {
    const name = useSelector((state: RootState) => state.setUser.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [image, setImage] = React.useState<any>()

    const [visionModal, setVisionModal] = React.useState<boolean>(false);
    const [visionChangeUserImage, setVisionChangeUserImage] = React.useState<boolean>(false);

    // const [imageChange, imageChange] = React.useState<boolean>(false);

    const { data: user, refetch } = useGetNameByNameQuery(name.name);
    const { data: articles } = useGetArticleByNameQuery(name.name)

    const [updateUser] = useUpdateUserMutation();

    const [username, setUsername] = React.useState<string>(user?.username ?? '');
    const [bio, setBio] = React.useState<string>(user?.about ?? '');

    const exit = () => {
        dispatch(setUser({ name: 'Bot' }))
        sessionStorage.setItem('user', JSON.stringify('Bot'))
        navigate('/')
    }

    const handleUpdateUser = () => {
        updateUser({
            id: user?.id ?? 1,
            about: bio,
            username
        })
        dispatch(setUser({ name: username }))
        sessionStorage.setItem('user', JSON.stringify(username))
        setVisionModal(false);
        refetch()
    }

    const updateUserImage = (image: any) => {
        setImage(image)
        const data = new FormData()
        data.append('id', String(user?.id) ?? '1')
        data.append('image', image)

        updateUser(data)
        setVisionChangeUserImage(false)
        refetch()
    }

    return (
        <>
            <div className='flex justify-center flex-col items-center '>
                <div className='w-2/3 h-3/4 m-8 '>
                    Профиль
                    <div style={{ borderRadius: '4px' }} className='p-2 border-2 border-solid border-sky-900'>

                        <div className='flex flex-row'>
                            {visionChangeUserImage ?
                                <div className='h-72 w-72'>
                                    <ImageUpload setImage={updateUserImage} />
                                </div>
                                :
                                <img alt='user_photo'
                                    width={300}
                                    height={300}
                                    className='cursor-pointer'
                                    onError={(e: any) => { e.target.src = `http://localhost:3000/image/goust.jpg` }}
                                    onClick={() => setVisionChangeUserImage(true)}
                                    // onMouseEnter={() => setVisionChangeUserImage(true)} 
                                    src={user?.image ? `http://localhost:5000/images/${user.image}` : `http://localhost:3000/image/goust.jpg`}
                                />
                            }

                            {/* <div className={`${visionChangeUserImage ? 'visible' : 'hidden'} absolute cursor-pointer h-72 mr-1 w-72`}>
                                Изменить фотографию
                            </div> */}
                            <div className='ml-4'>

                                <div>{user?.username}</div>
                                <div>{user?.about}</div>
                            </div>
                        </div>
                        <div className='mt-4 flex flex-row justify-between'>
                            <div><button onClick={exit}>Выйти</button></div>
                            <div><button onClick={() => { }}>Изменить пароль</button></div>
                            <div><button onClick={() => setVisionModal(true)}>Изменить профиль</button></div>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        Ваши посты
                        {
                            articles?.map((article: IActicles) => (
                                <Article key={article.id} type='profile' article={article}></Article>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div onClick={() => setVisionModal(false)} className={`${visionModal ? 'visible' : 'hidden'} top-0 z-50 flex justify-center items-center bg-opacity-70 bg-sky-900 w-full h-full fixed`}>
                <div onClick={(e) => e.stopPropagation()} className='h-4/5 w-2/6 flex flex-col p-4 bg-white'>
                    <div className=' w-full'>
                        <div>Введите имя:</div>
                        <input className='border-2 border-slate-500 w-full ' value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                    </div>
                    <div className='h-full w-full'>
                        <div>Введите биографию:</div>
                        <textarea className='border-2 border-slate-500 w-full h-full' defaultValue={bio} onChange={(e) => setBio(e.target.value)} name="bio"></textarea>
                    </div>
                    <div>
                        <button onClick={handleUpdateUser} className='border-2 border-slate-500'>Изменить</button>
                    </div>
                </div>
            </div>
        </>
    )
}
