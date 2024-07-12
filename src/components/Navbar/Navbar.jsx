import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaBars } from 'react-icons/fa'
import './nav.css'

const Navbar = () => {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            
            <Link className='navlink' to="/"><img src='https://s3-alpha-sig.figma.com/img/13bf/35ba/581eb517178a731e48ec47d3781b25e2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNUmpJ-LLAl-P-V5ndyaFJMqc7Q7jKYKzdSqycFlD80z5z-fSJFYf8840KwLU0nSQ~vFRtTYB0c3BzBWXfkLbjORw1VLdnCRT5RfkFhZMteaq8~T98CqlTyu0Rv9jKRpuTEhZ7TmYZJD7AnTlkcWaVFF0GIouaflIpkOZgXPE4Qe2YTrd5Sk1CLJLe095pCzJF-aTXfjArk5HnU4iv2iAxoDDJxpvJ1IgXw1S2PPUtmoofoJ2ojQWGUONE7l0Z-MCEeoaW6QToInCJNUyM6qzgRiT4v665DU1EcOQbsWSZSVkpTLvFQjjt~sxYVATK6hwlm6zI-qUHvNIj3F3rI1aA__' alt='Logo'/></Link>
            <nav ref={navRef}>
                <ul className='list-items'>
                    <li className='item'>Home</li>
                    <li className='item'>About</li>
                    <li className='item'>Contact</li>
                    <li className='item'>Services</li>
                </ul>
                <button className='loginbtn'>Login</button>
                <button className='navbtn nav-close' onClick={showNavbar}>
                    <FaTimes color='red ' />
                </button>
            </nav>

            <button className='navbtn ' onClick={showNavbar}>
                <FaBars color='white' />
            </button>

        </header>
    )
}

export default Navbar
