import React from 'react';
import './TheCrew.css';

const characters = [
    {
        id: 'kon',
        name: "Po Prozvishju Kon'",
        role: "The Muscle",
        image: "/photos/characters/kon.jpg",
        description: "Usually seen breaking things or people. Doesn't say much."
    },
    {
        id: 'opelsin',
        name: "Oleksander Opelsin",
        role: "The Fixer",
        image: "/photos/characters/opelsin.jpg",
        description: "Can get you anything anywhere. Just don't ask about his methods."
    },
    {
        id: 'sanja',
        name: "Sanja Po Pivku",
        role: "The Brains",
        image: "/photos/characters/sanja.jpg",
        description: "Plots the away days. Knows every pub from here to Palermo."
    },
    {
        id: 'dimon',
        name: "Dimon",
        role: "The Wildcard",
        image: "/photos/characters/dimon.jpg",
        description: "Serjoga Davai Vstavai. Unpredictable. Might buy the next round, might start a riot."
    },
    {
        id: 'serega',
        name: "Serega",
        role: "The New Blood",
        image: "/photos/characters/serega.jpeg",
        description: "A solid lad. Ready for the next away day."
    }
];

const TheCrew: React.FC = () => {
    return (
        <section className="crew" id="crew">
            <div className="container">
                <div className="crew__header">
                    <span className="section-tag">Dossier Files</span>
                    <h2 className="crew__title">Meet The Firm</h2>
                </div>

                <div className="crew__grid">
                    {characters.map((char) => (
                        <div key={char.id} className="crew__card">
                            <div className="crew__img-wrapper">
                                <img src={char.image} alt={char.name} className="crew__img" />
                                <div className="crew__overlay"></div>
                                <div className="crew__stamp">WANTED</div>
                            </div>
                            <div className="crew__info">
                                <h3 className="crew__name">{char.name}</h3>
                                <p className="crew__role">{char.role}</p>
                                <p className="crew__desc">{char.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TheCrew;
