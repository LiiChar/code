import { MyContext } from '../App'
import React from 'react'

function Get() {

  return (
    <MyContext.Consumer>
        {({ title, click }) => (
          <div onClick={click}>
            {title}
          </div>
        )}
    </MyContext.Consumer>
  )
}

export default Get