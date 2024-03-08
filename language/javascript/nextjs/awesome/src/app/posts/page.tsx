
import { Metadata } from 'next'
import Link from 'next/link'
import React, {cache} from 'react'

 const getPosts = cache( async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
})

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

  return posts.map((post: any) => ({
    slug: post,
  }))
}

export const metadata: Metadata = {
  title: "dfsf"
}

export const preload = () => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void
  void getPosts()
}

const page = async (props: any) => {
  const artistData = getPosts()

  // Wait for the promises to resolve
  const [posts] = await Promise.all<any>([artistData])
  return (
    <div>
      {
        posts.map((post: any) => (
          <Link href={`/posts/${post.id}`}>
            <div>{post.title}</div>
          </Link>
        ))
      }
    </div>
  )
}

export default page