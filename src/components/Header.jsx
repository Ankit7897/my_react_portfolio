import React from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Header = ({ menuOpen, setmenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setmenuOpen={setmenuOpen} />

            </nav>
            <button className='navBtn' onClick={() => setmenuOpen(!menuOpen)}><AiOutlineMenu /></button>

        </>
    )
}

export const HederPhone = ({ menuOpen, setmenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setmenuOpen={setmenuOpen} />
        </div>
    )
}

const NavContent = ({ setmenuOpen }) => (
    <>
        <h2>Ankit.</h2>

        <div>
            <a href="#home" onClick={() => setmenuOpen()}>
                Home
            </a>
            <a href="#work" onClick={() => setmenuOpen(false)}>
                Work
            </a>
            <a href="#timeline" onClick={() => setmenuOpen(false)}>
                Experience
            </a>
            <a href="#services" onClick={() => setmenuOpen(false)}>
                Services
            </a>
            <a href="#testimonial" onClick={() => setmenuOpen(false)}>
                Testimonial
            </a>
            <a href="#contact" onClick={() => setmenuOpen(false)}>
                Contact
            </a>
        </div>
        <a href="mailto:official.miankityadav2222@gmail.com">
            <button>Email</button>
        </a>

    </>
)

export default Header