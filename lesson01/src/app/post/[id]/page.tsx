 
import { Post } from '@/models/Post.model';
import React, { Suspense } from 'react'
import Posts from './../page'
// app/posts/page.ts

type Props = {
    params: {
        id: 0
    },
    searchParams: { [key: string]: string | string[] | undefined },
}
const findPostById = async(id: number): Promise<Post>=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const data = await res.json();
    // await new Promise((resolve)=>setTimeout(resolve, 4000)) 
    return data;
}
   
export default async function Page(props: Props) { 
    const data = await findPostById(props.params.id); 
  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        <hr />
        <Suspense fallback={<><h1>Cargando publicaciones...</h1></>}>
            <Posts/>
        </Suspense>
    </div>
  )
}
