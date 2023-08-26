import Link from "next/link"
import { ReactNode } from "react"


export default function layout({ children }: {
    children: ReactNode
}) {
    return (
        <>
        <h1>Sección Tienda</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/tienda/categoria">Categorias</Link>
                    </li>

                </ul>
            </nav>
            {children}
        </>
    )
}
