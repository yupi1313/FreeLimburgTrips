import React, { useEffect, useRef } from 'react';
import { ArrowDown, Beer, Trophy } from 'lucide-react';
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
            <div className="hero__blob hero__blob--1" />
            <div className="hero__blob hero__blob--2" />
            <div className="hero__blob hero__blob--3" />

            {[...Array(12)].map((_, i) => (
                <div key={i} className="hero__particle" style={{ '--i': i } as React.CSSProperties} />
            ))}

            <div className="container hero__content">
                <div className="hero__badge">
                    <Beer size={12} />
                    <span>Limburg's Finest Football Tourists</span>
                    <Beer size={12} />
                </div>

                <h1 className="hero__title">
                    Football, Friends<br />
                    <span className="hero__title-accent">&amp; Loads of Beer</span>
                </h1>

                <p className="hero__subtitle">
                    A group of lads from Limburg travelling Europe to watch football and drink the local beers.
                    Bilbao, Düsseldorf, Sicily, Rome — and wherever the next match takes us.
                </p>

                <div className="hero__stats">
                    {[
                        { value: '4', label: 'Cities Visited' },
                        { value: '∞', label: 'Beers Consumed' },
                        { value: '100%', label: 'Good Times' },
                    ].map(s => (
                        <div className="hero__stat" key={s.label}>
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className="hero__actions">
                    <a href="#trips" className="btn btn--primary">
                        <Trophy size={18} />
                        Our Trips
                    </a>
                    <a href="#contact" className="btn btn--ghost">
                        Join the Crew
                    </a>
                    <a href="https://www.paypal.com/donate/?business=q1qooo@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn--ghost" style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}>
                        Donate 🍻
                    </a>
                </div>
            </div>

            <a href="#trips" className="hero__scroll-hint" aria-label="Scroll down">
                <ArrowDown size={20} />
            </a>
        </section>
    );
};

export default Hero;
