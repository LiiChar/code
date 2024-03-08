import React, { FC, useState } from 'react'

export const FallDownList: FC = () => {
    const [visible, setVisible] = useState(false)


  return (
    <div onClick={(e) => setVisible(true)}>
      <div>
        {
          visible 
          ?
          <div>
          </div>
          :
          <div>

          </div>
        }
      </div>
    </div>
  )
}
