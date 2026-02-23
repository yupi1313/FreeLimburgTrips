import React, { useEffect } from 'react';
import Feb23Hero from './Feb23Hero';
import Feb23TheCrew from './Feb23TheCrew';
import NextTrip from '../../components/NextTrip';
import Gallery from '../../components/Gallery';
import './Feb23Page.css';

const Feb23Home: React.FC = () => {
    // Apply the theme to the entire body so Navbar and Footer pick it up too
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('theme-feb23');

        return () => {
            document.body.classList.remove('theme-feb23');
        };
    }, []);

    return (
        <main className="theme-feb23-page">
            <Feb23Hero />
            <Feb23TheCrew />

            {/* Standard components will naturally inherit the .theme-feb23 CSS variables */}
            <NextTrip />
            <Gallery />
        </main>
    );
};

export default Feb23Home;
