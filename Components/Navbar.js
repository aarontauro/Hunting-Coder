import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const location = useRouter();   

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Hunting Coder</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link className={`mr-5 hover:text-gray-900 ${location.pathname === '/' ? 'text-black' : '' }`} href='/'>Home</Link>
                        <Link className={`mr-5 hover:text-gray-900 ${location.pathname === '/about' ? 'text-black' : '' }`} href='/about'>About</Link>
                        <Link className={`mr-5 hover:text-gray-900 ${location.pathname === '/blog' ? 'text-black' : '' }`} href='/blog'>Blog</Link>
                        <Link className={`mr-5 hover:text-gray-900 ${location.pathname === '/contact' ? 'text-black' : '' }`} href='/contact'>Contact</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
