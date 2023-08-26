import Link from 'next/link'
import React, { ReactNode } from 'react'
export const metadata = {
    title: 'Tienda'
}
export default function LayoutTienda({
    children
}: {
    children: ReactNode
}) {
  return (
    <>
     <nav>
        <ul>
            <li>
                <Link href="/tienda/categoria">Categoria</Link>
            </li>             
        </ul>
    </nav>
    {children}
    </>
  )
}
