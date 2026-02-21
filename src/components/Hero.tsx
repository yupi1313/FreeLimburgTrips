import React, { useEffect, useRef } from 'react';
import { ArrowDown, MapPin, Star } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;
        const onMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 20;
            const y = ((e.clientY - top) / height - 0.5) * 20;
            hero.style.setProperty('--mx', `${x}px`);
            hero.style.setProperty('--my', `${y}px`);
        };
        hero.addEventListener('mousemove', onMouseMove);
        return () => hero.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <section className="hero" ref={heroRef} id="hero">
            {/* Decorative animated blobs */}
            <div className="hero__blob hero__blob--1" />
            <div className="hero__blob hero__blob--2" />
            <div className="hero__blob hero__blob--3" />

            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
                <div key={i} className="hero__particle" style={{ '--i': i } as React.CSSProperties} />
            ))}

            <div className="container hero__content">
                <div className="hero__badge">
                    <Star size={12} fill="currentColor" />
                    <span>Limburg's #1 Travel Guide</span>
                    <Star size={12} fill="currentColor" />
                </div>

                <h1 className="hero__title">
                    Discover the<br />
                    <span className="hero__title-accent">Heart of Limburg</span>
                </h1>

                <p className="hero__subtitle">
                    Rolling hills, medieval castles, winding rivers, and world-class cycling routes.
                    Free Limburg is waiting to be explored — one breathtaking trip at a time.
                </p>

                <div className="hero__stats">
                    {[
                        { value: '50+', label: 'Curated Trips' },
                        { value: '12', label: 'Regions' },
                        { value: '4.9★', label: 'Avg Rating' },
                    ].map(s => (
                        <div className="hero__stat" key={s.label}>
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="hero__actions">
                    <a href="#destinations" className="btn btn--primary">
                        <MapPin size={18} />
                        Explore Destinations
                    </a>
                    <a href="#highlights" className="btn btn--ghost">
                        Watch the Story
                    </a>
                </div>
            </div>

            <a href="#destinations" className="hero__scroll-hint" aria-label="Scroll down">
                <ArrowDown size={20} />
            </a>
        </section>
    );
};

export default Hero;
