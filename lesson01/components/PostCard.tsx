'use client'
 
import { Post } from '@/models/Post.model';
import Link from 'next/link'
import React from 'react'
type PostCardProps = {
    post: Post
}
export default function PostCard({post}: PostCardProps) {
  return (
    <>
    <div>
               <Link href={`/post/${post.id}`}>
                <h3>{post.title}</h3>
               </Link>
                <p>{post.body}</p>
                <button onClick={()=>{
                    console.log('funcionando')
                }}>Click me</button>
            </div>
    </>
  )
}
