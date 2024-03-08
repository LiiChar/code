
import React from 'react'

async function getPost(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
  }

const page = async (props: any) => {
    const post = await getPost(props.params.id);
    
  return (
    <div>
        {post.body}
    </div>
  )
}

export default page