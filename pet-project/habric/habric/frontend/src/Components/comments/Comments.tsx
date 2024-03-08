import React from 'react'
import { useFetchAllCommentsQuery } from '../../Store/Slices/commentSlie'
import { AnswerComment } from './AnswerComment'
import changeTimeFromDB from '../../utils/changeTimeFromDB'
import { FallDownList } from '../FallDownList'

interface IProps {
  idef?: number | null
}

export const Comments: React.FC<IProps> = (props) => {
  const { data: store } = useFetchAllCommentsQuery()

  const [answerer, setAnswer] = React.useState<string>('')
  const [isInput, setIsInput] = React.useState<number | null>()

  const comments: any = store?.filter((com) => props.idef === com.to);

  const handleIsInput = (text: string, id: number): void => {
    setIsInput(id);
    setAnswer(text);
  }

  console.log(comments);


  return (
    <div className='w-full'>
      {comments?.map((com: any) => (
        <div key={com.id}>
          <div>
            <div className='ml-2 text-sm flex flex-row'>
              {com.user_photo ?
                <img alt='phtot_user' width={25} height={25} src={`http://localhost:5000/images/${com.user_photo}`} />
                :
                <img alt='user_photo' className='h-5 mr-1 w-5' src={`http://localhost:3000/image/goust.jpg`} />}
              <div className='font-bold '>{com.author}</div>
              <div className='ml-2 text-slate-500 text-xs'>{changeTimeFromDB(com.updatedAt)}</div>
              <div><FallDownList IsInpuy={setIsInput} isInput={handleIsInput} value={answerer} props={com} /></div>
            </div>
            {isInput !== com.id
              ?
              <pre>{com.text}</pre>
              :
              <input type="text" value={answerer} onChange={(e) => setAnswer(e.target.value)} />
            }
          </div>
          <div>
            <span className='ml-2 mr-4'>0</span>
            <AnswerComment text={{ value: answerer, setValue: setAnswer }} idef={com.id} author={com.author} />
          </div>
        </div>
      ))}
    </div>
  )
}
