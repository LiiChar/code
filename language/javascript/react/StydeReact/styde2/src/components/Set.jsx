import React from 'react'

function Set({hadleState}) {
  return (
    <div>
        <button onClick={() => hadleState()}>Нажми</button>
    </div>
  )
}

export default Set