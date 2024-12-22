import React from 'react'
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const Navbar = () => {
    return (
        <>
            <header className="px-8 py-8 w-full z-10 absolute">
                <nav className="flex justify-between items-center max-container">
                    <a href="/">
                        <img
                            src={headerLogo}
                            alt="Logo"
                            width={120}
                            height={40}
                        />
                    </a>
                    <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href}
                                        className="font-montserrat text-lg text-slate-gray leading-normal"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='lg:hidden'>
                        <img
                            src={hamburger}
                            alt="Hamburger"
                            width={30}
                            height={30}
                        />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar