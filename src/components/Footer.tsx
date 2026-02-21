import React from 'react';
import { MapPin, Github, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => (
    <footer className="footer">
        <div className="container footer__inner">
            <div className="footer__brand">
                <a href="#" className="footer__logo">
                    <MapPin size={20} strokeWidth={2.5} />
                    <span>FreeLimburg<strong>Trips</strong></span>
                </a>
                <p className="footer__tagline">Your guide to the most beautiful corner of the Netherlands.</p>
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
                    <h5>Explore</h5>
                    <a href="#destinations">Destinations</a>
                    <a href="#trips">Trips & Routes</a>
                    <a href="#highlights">Highlights</a>
                    <a href="#contact">Newsletter</a>
                </div>
                <div className="footer__col">
                    <h5>Regions</h5>
                    <a href="#">Valkenburg</a>
                    <a href="#">Maastricht</a>
                    <a href="#">Roermond</a>
                    <a href="#">Meinweg</a>
                </div>
                <div className="footer__col">
                    <h5>Activities</h5>
                    <a href="#">Cycling</a>
                    <a href="#">Hiking</a>
                    <a href="#">Canoeing</a>
                    <a href="#">City Breaks</a>
                </div>
            </div>
        </div>

        <div className="footer__bottom">
            <div className="container footer__bottom-inner">
                <p>© {new Date().getFullYear()} FreeLimburgTrips. All rights reserved.</p>
                <p>Built with ❤️ for the love of Limburg.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
