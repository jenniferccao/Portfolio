import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change threshold to 700 pixels
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = isScrolled ? 'default-navbar' : (location.pathname === '/' ? 'home-navbar' : 'default-navbar');
    const scrolledClass = isScrolled ? 'scrolled' : '';
    // Update linker based on the isScrolled state
    const linker = isScrolled ? 'default-linker' : (location.pathname === '/' ? 'home-linker' : 'default-linker');


    return (
        <div className={`${navbarClass} ${scrolledClass}`}>
            <div className='nav--text'>
                <a href='#home' className={linker}>HOME</a>
                <a href='#portfolio' className={linker}>PORTFOLIO</a>
                <a href='#contact' className={linker}>CONTACT</a>
            </div>
        </div>
    );

    /*
    return (
        <div className={`${navbarClass} ${scrolledClass}`}>
            <div className='nav--text'>
                <NavLink to="/" className={linker}>HOME</NavLink>
                <NavLink to="/portfolio" className={linker}>PORTFOLIO</NavLink>
                <NavLink to="/contact" className={linker}>CONTACT</NavLink>
            </div>
        </div>
    );
    */
}