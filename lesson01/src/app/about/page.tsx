'use client'
import { useRouter, useParams } from 'next/navigation'
import React from 'react'

export default function AboutPage() {
  const router = useRouter();
  const params = useParams();
  return (
    <section className='p-3'>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quos, deserunt totam quia consectetur voluptas sint est assumenda nesciunt fugiat quo temporibus tempora dicta itaque reprehenderit facilis sapiente! Porro, enim minima. Veritatis adipisci tempore sint quasi ut eveniet assumenda eaque consequatur explicabo pariatur voluptate, dicta neque a suscipit corporis, provident repellat expedita distinctio! Commodi natus cum quaerat reprehenderit dignissimos, alias nam fugiat incidunt temporibus veniam nobis numquam veritatis est in explicabo dolor quod quia dolore? Magni saepe laborum consectetur repudiandae quia iure nesciunt eveniet consequatur, quisquam commodi tenetur maiores eaque. Quod ratione dolorum delectus modi! Quas quia doloremque velit inventore.
      </p>
      <button className='bg-sky-400 px-3 py-3 rounded-md' onClick={()=>{
        console.log(params)
        router.push('/');
      }}>Click</button>
    </section>
  )
}
