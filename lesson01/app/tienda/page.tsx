"use client"
import {useState} from 'react' 

export default function TiendaPage() {
    const [counter, setCounter] = useState(0)
    console.log('init')
  return (
    <>
    <div>page</div>
    <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
    </>
  )
}
