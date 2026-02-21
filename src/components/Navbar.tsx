import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { href: '#next-trip', label: 'Next Trip' },
        { href: '#trips', label: 'Past Trips' },
        { href: '#highlights', label: 'About Us' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#" className="navbar__logo">
                    <MapPin size={22} strokeWidth={2.5} />
                    <span>FreeLimburg<strong>Trips</strong></span>
                </a>

                <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
                    {links.map(l => (
                        <a key={l.href} href={l.href} className="navbar__link" onClick={() => setMenuOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
                        Join the Crew
                    </a>
                </nav>

                <button
                    className="navbar__burger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Navbar;
