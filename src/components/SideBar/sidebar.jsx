import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.style.css'

const Sidebar = () => {
    return (
        <aside className="sidebar" aria-label="Sidebar">
            <nav className="sidebar-nav" role="navigation">
                <NavLink to="/" end className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Inicio</NavLink>
                <NavLink to="/portafolio" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Portafolio</NavLink>
                <NavLink to="/contacto" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Contacto</NavLink>
                <NavLink to="/quiensoy" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>Quien Soy</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar