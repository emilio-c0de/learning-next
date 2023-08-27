"use client";

import React, { useEffect, useState } from 'react'
type Post = {
    id: number,
    title: string
    body: string
 }
const loadPosts = async(): Promise<Array<Post>>=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json(); 
    return data;
}

export default function TiendaPage() {
    const [posts, setPosts] = useState<Array<Post>>([])
    useEffect(()=>{
         loadPosts().then(response=>{
            setPosts(response)
         })
    }, [])
  return (
    <>
        {
        posts.map((value, index)=>(
            <div key={index}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
                
            </div>
        ))
    }
    </>
  )
}
