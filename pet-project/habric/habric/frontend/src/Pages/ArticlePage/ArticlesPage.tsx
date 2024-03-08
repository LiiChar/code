import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Comments } from '../../Components/comments/Comments'

import { useCreateCommentMutation } from '../../Store/Slices/commentSlie'
import { RootState } from '../../Store/store'
import parse from 'html-react-parser';
import { useGetArticleMutation } from '../../Store/Slices/articlesSlice'

export const ArticlesPage = () => {
  const name = useSelector((state: RootState) => state.setUser.user)
  const { id } = useParams()
  const [article, setData] = React.useState<any>()
  const [getArticleById] = useGetArticleMutation()
  React.useEffect(() => {
    getArticleById(id).then((article: any) => {
      setData(article.data)
    })
  }, [id])
  // const article = articles?.find((article) => article.id === Number(id))
  const user = useSelector((state: RootState) => state.setUser.user)

  const [addComment, { isSuccess }] = useCreateCommentMutation()

  const [comment, setComment] = React.useState<string>('')

  function sendComment() {
    addComment({ author: user.name, text: comment, to: Number(article?.id) })
    if (isSuccess) {

      setComment('')
    }
  }


  return (
    <>
      <div className='m-5 border-2 rounded-lg border-solid border-sky-900 '>
        <div className='m-4'>
          <div className='flex flex-row justify-between'>
            {article?.author}
            <div>
              {user.name === article?.author &&
                <Link className='border-2 border-sky-900' to={`/artic/${id}/edit`}>изменить</Link>
              }
            </div>
          </div>
          <div className='my-2 text-lg'><b>{article?.name}</b></div>
          <div className='text-xs mb-2'>{article?.tags}</div>
          <div>
            <div className='flex justify-center'>{article?.image && <img onError={(e: any) => { e.target.src = `http://localhost:3000/image/goust.jpg` }} alt='pthono' className='w-max h-max' src={`http://localhost:5000/images/${article?.image}`} />}</div>
            <div className='whitespace-pre-line'>{parse(String(article?.text! ?? ''))}</div>
          </div>
        </div>
      </div>
      <div className='m-5 border-2 border-solid border-sky-900'>
        {
          name.name === 'Bot' ?
            <div className='m-12 text-lg flex justify-center items-center'>
              <div>
                Чтобы увидеть и написать комментарий нужно <Link className='underline text-sky-900' to={'/login'}>войти</Link>
              </div>
            </div>
            :
            <div className='m-4'>
              <div>

                <div className='mb-4 font-bold'>Коментарии</div>
                <div className='mb-6'>
                  <div className='text-xs'>Ваш комментарий</div>
                  <textarea value={comment} style={{ border: '1px solid blue', borderRadius: "4px" }} className='h-32 outline-none resize-none w-full' onChange={(e) => setComment(e.target.value)}  ></textarea>
                  <div>
                    <button onClick={sendComment}>Отправить</button>
                  </div>
                </div>
              </div>

              <Comments idef={article?.id} />
            </div>
        }
      </div>
    </>
  )
}
