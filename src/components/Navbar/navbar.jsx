import React from 'react'
import './navbar.style.css'
// Importaciones De los ICONOS NAVBAR
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logoYT from '../img/Logo_YT.png'
const navbar = () => {
    return (
        <navbar className='navbar'>

            <div className='navbar-logo'>
                <img src={logoYT} alt="Logo" className='logo' />
            </div>

            <div className='icons'>

                <a href="https://github.com/ZeyKedd" target="_blank" rel="noopener noreferrer">
                    <button className='icons-button'>
                        <FaGithub />
                    </button>
                </a>

                <a href="https://www.linkedin.com/in/sebastian-hernandez-581b87340/?trk=opento_sprofile_goalscard" target="_blank" rel="noopener noreferrer">
                    <button className='icons-button'>
                        <FaLinkedin />
                    </button>
                </a>
            </div>
            <div>
            </div>
        </navbar>
    )
}

export default navbar