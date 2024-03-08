import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetUserMutation } from '../../Store/Slices/userSlice'
import { IActicles, IUser } from '../../types/acticles'
import { useGetArticleNameMutation } from '../../Store/Slices/articlesSlice'
import { Article } from '../../Components/articles/Article'

export const User = () => {

  const { id } = useParams()  
  const [user, setUser] = React.useState<any>()
  const [articles, setArticles] = React.useState<any>()

  const [getUser] = useGetUserMutation()
  const [getArticles] = useGetArticleNameMutation()

  React.useEffect(() => {
    getUser(id).then((user: any) => {
      setUser(user.data)
      getArticles(user.data.username).then((articles: any) => {
        setArticles(articles.data)
      })
    });
  }, [id])

  return (
    <div className='flex justify-center flex-col items-center '>
      <div className='w-2/3 h-3/4 m-8 '>
        Профиль
        <div style={{ borderRadius: '4px' }} className='p-2 border-2 border-solid border-sky-900'>

          <div className='flex flex-row'>
              <img alt='user_photo'
              onError={(e: any) => {
                e.target.src = `http://localhost:3000/image/goust.jpg`
              }}
                width={300}
                height={300}
                className='cursor-pointer'
                src={user?.image ? `http://localhost:5000/images/${user.image}` : `http://localhost:3000/image/goust.jpg`}
              />
            <div className='ml-4'>
              <div>{user?.username}</div>
              <div>{user?.about}</div>
            </div>
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
  )
}
