import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
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
