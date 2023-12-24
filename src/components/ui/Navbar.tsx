import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className="flex pb-50 space-between">
            <Link href='/' className="bold f-size-18" style={{ color: 'black' }}><b>{'<Luis Leal/>'}</b></Link>
            <div className="flex gap-25">
                <Link href="/blog" className="black-text hover-underline-blue">Blog</Link>
                <Link href="/tools" className="black-text hover-underline-blue">Herramientas</Link>
            </div>
        </nav>
    )
}
