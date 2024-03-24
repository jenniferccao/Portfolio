import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {

    let location = useLocation();
    const navbarClass = location.pathname === '/' ? 'home-navbar' : 'default-navbar';
    const linker = location.pathname === '/' ? 'home-linker' : 'default-linker';

    return (
        <div className={navbarClass}>
            <div className='nav--text'>
                <NavLink to="/" className={linker}>HOME</NavLink>
                <NavLink to="/portfolio" className={linker}>PORTFOLIO</NavLink>
                <NavLink to="/contact" className={linker}>CONTACT</NavLink>
            </div>
        </div>
    );
}