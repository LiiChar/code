import React from 'react'
import { Link } from 'react-router-dom'
import { IActicles } from '../../types/acticles'
import shortText from '../../utils/shortText'
import parse from 'html-react-parser';

interface IPropsArticle {
  article: IActicles,
  type: string,
  sortTags?: any
}

export const Article: React.FC<IPropsArticle> = (props) => {

  const tags = props.article.tags.split(',')

  const text = shortText(props?.article?.text || '')

  return (
    <div className=' mb-5 border-2 border-solid border-sky-900'>
      <div className='m-4'>
        {props.type === 'article' && <div className='flex flex-row h-5 w-5'>
          {props.article.user_photo ?
            <img alt='user_photo' onError={(e: any) => { e.target.src = `http://localhost:3000/image/goust.jpg` }} className='h-5 mr-1 w-5' src={`http://localhost:5000/images/${props.article.user_photo}`} />
            :
            <img alt='user_photo' className='h-5 mr-1 w-5' src={`http://localhost:3000/image/goust.jpg`} />
          }
          {props.article.author}

        </div>}
        <div className='my-2 text-lg'>
          <b>
            <Link to={'artic/' + props.article.id}>{props.article.name}</Link>
          </b>
          <span className=' ml-2    text-base'>
            {props.article.watcher}
          </span>
        </div>
        <div className='text-xs overflow-x-hidden mb-2'>
          {tags.length > 1  && tags.map((tag) => (
            <span key={tag} className='mr-1'>
              <button onClick={() => props.sortTags(tag)}>
                {tag},
              </button>
            </span>
          ))
          }
        </div>
        <div>
          {props.article.image && <img alt='postImage' onError={(e: any) => { e.target.src = `http://localhost:3000/image/goust.jpg` }} className='w-max h-max' src={`http://localhost:5000/images/${props.article.image}`} />}
          <div className='whitespace-pre-line'>{parse(text)}</div>
        </div>
        <div className='mt-3'>
          <Link className='border-2 border-sky-400 p-1' to={'http://localhost:3000/artic/' + props.article.id}>Читать дальше</Link>
        </div>
      </div>
    </div>
  )
}
