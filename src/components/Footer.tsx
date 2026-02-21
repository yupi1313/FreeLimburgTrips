import React from 'react';
import { MapPin, Github, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <div className="footer__brand">
                <a href="#" className="footer__logo">
                    <MapPin size={20} strokeWidth={2.5} />
                    <span>Free<strong>LimburgTrips</strong></span>
                </a>
                <p className="footer__tagline">Lads from Limburg. Football in Europe. Loads of beer.</p>
                <div className="footer__socials">
                    {[{ icon: Instagram, href: '#' }, { icon: Twitter, href: '#' }, { icon: Github, href: '#' }].map(({ icon: Icon, href }, i) => (
                        <a key={i} href={href} className="footer__social" aria-label="Social link">
                            <Icon size={16} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer__links">
                <div className="footer__col">
                    <h5>Navigate</h5>
                    <a href="#trips">Our Trips</a>
                    <a href="#highlights">About Us</a>
                    <a href="#contact">Join the Crew</a>
                </div>
                <div className="footer__col">
                    <h5>Trips</h5>
                    <a href="#trips">Bilbao 🇪🇸</a>
                    <a href="#trips">Düsseldorf 🇩🇪</a>
                    <a href="#trips">Sicily 🇮🇹</a>
                    <a href="#trips">Rome 🇮🇹</a>
                </div>
                <div className="footer__col">
                    <h5>The Rules</h5>
                    <a href="#">Drink local beer</a>
                    <a href="#">Watch football</a>
                    <a href="#">No Heineken</a>
                    <a href="#">Come back next year</a>
                </div>
            </div>
        </div>

        <div className="footer__bottom">
            <div className="container footer__bottom-inner">
                <p>© {new Date().getFullYear()} FreeLimburgTrips. All rights reserved.</p>
                <p>Made with 🍺 somewhere in Limburg.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
