import Link from 'next/link'
import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <nav className='navbar py-5'>
        <Link href="/" className='text-3xl font-bold'>
            <h1>Next Curso</h1>
        </Link>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/tienda">Tienda</Link>
            </li>
            <li>
                <Link href="/post">Post</Link>
            </li>
            <li>
                <Link href="/about">About</Link>                
            </li>
        </ul>
    </nav>
  )
}
