import React from 'react';
import '../../components/TheCrew.css';

const characters = [
    {
        id: 'kon',
        name: "Конь",
        role: "Грубая сила",
        image: "/photos/characters/kon.jpg",
        description: "Обычно ломает вещи или людей. Мало говорит, много делает."
    },
    {
        id: 'opelsin',
        name: "Опельсин",
        role: "Решала",
        image: "/photos/characters/opelsin.jpg",
        description: "Достанет что угодно и где угодно. Главное — не спрашивать как."
    },
    {
        id: 'sanja',
        name: "Саня по Пивку",
        role: "Мозг операции",
        image: "/photos/characters/sanja.jpg",
        description: "Планирует выезды. Знает каждый паб отсюда до Палермо."
    },
    {
        id: 'dimon',
        name: "Димон",
        role: "Голос Хаоса",
        image: "/photos/characters/dimon.jpg",
        description: "Серега давай вставай. Может купить всем пива, а может начать бунт."
    },
    {
        id: 'serega',
        name: "Серега",
        role: "Новая кровь",
        image: "/photos/characters/serega.jpeg",
        description: "Ровный пацан. Всегда готов к следующему выезду."
    }
];

const Feb23TheCrew: React.FC = () => {
    return (
        <section className="crew" id="crew">
            <div className="container">
                <div className="crew__header">
                    <h2>ЛИЧНЫЕ ДЕЛА</h2>
                    <p>Совершенно секретно. Только для служебного пользования.</p>
                </div>

                <div className="crew__grid">
                    {characters.map((char) => (
                        <div key={char.id} className="crew__card">
                            <div className="crew__card-image-wrapper">
                                <img src={char.image} alt={char.name} className="crew__card-image" />
                                <div className="crew__card-stamp">ОПАСЕН</div>
                            </div>
                            <div className="crew__card-content">
                                <h3 className="crew__card-name">{char.name}</h3>
                                <div className="crew__card-role">{char.role}</div>
                                <p className="crew__card-desc">{char.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feb23TheCrew;
