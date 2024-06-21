import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClass = isScrolled ? 'default-navbar' : (location.pathname === '/' ? 'home-navbar' : 'default-navbar');
    const scrolledClass = isScrolled ? 'scrolled' : '';
    const linker = isScrolled ? 'default-linker' : (location.pathname === '/' ? 'home-linker' : 'default-linker');

    return (
        <div className={`${navbarClass} ${scrolledClass}`}>
            <div className='nav--text'>
                <Link smooth to="#home" className={linker}>HOME</Link>
                <Link smooth to="#portfolio" className={linker}>PORTFOLIO</Link>
                <Link smooth to="#contact" className={linker}>CONTACT</Link>
            </div>
        </div>
    );
}
