import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import '../../components/Hero.css';

const Feb23Hero: React.FC = () => {
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
                    <Star size={14} />
                    <span>С Днем Защитника Отечества</span>
                    <Star size={14} />
                </div>

                <h1 className="hero__title">
                    НАСТОЯЩИЕ МУЖИКИ<br />
                    <span className="hero__title-accent">ИЗ ЛИМБУРГА</span>
                </h1>

                <p className="hero__subtitle">
                    С 23 февраля! Мы покоряем стадионы, пьем пиво и всегда готовы к бою. Бильбао, Дюссельдорф, Сицилия, Рим — нас уже знают. С праздником, мужики!
                </p>

                <div className="hero__stats">
                    {[
                        { value: '23', label: 'Февраля' },
                        { value: '100%', label: 'Мужества' },
                        { value: '∞', label: 'Пива' },
                    ].map(s => (
                        <div className="hero__stat" key={s.label}>
                            <strong>{s.value}</strong>
                            <span>{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero__poster">
                <div className="hero__poster-noise" />
                <div className="hero__poster-vignette" />
                <img src="/photos/characters/group.jpg" alt="The Lads" className="hero__poster-img" />
            </div>
        </section>
    );
};

export default Feb23Hero;
