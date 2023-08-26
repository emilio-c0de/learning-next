'use client'
import { Post } from '@/models/Post.model'
import React from 'react'
type PostCardProps = {
    post: Post
}
export default function PostCard({post}: PostCardProps) {
  return (
    <>
    <div>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=>{
                    console.log('funcionando')
                }}>Click me</button>
            </div>
    </>
  )
}
