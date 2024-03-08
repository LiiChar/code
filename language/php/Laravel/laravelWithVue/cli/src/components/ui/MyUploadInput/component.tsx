import React, { FC, memo } from 'react'

interface UploadProps {
    handleFunc: (file: File) => void,
    type?: string,
    accept?: string
}



export const MyUpload: FC<UploadProps> = memo(({handleFunc, accept, type='file'}) => {
  return (
    <div>
        <input className='display-none' type='file' onChange={(e) => e.target.files && handleFunc(e.target.files[0])} />
    </div>
  )
})
