import React from 'react';
import './Destinations.css';

const trips = [
    {
        id: 1,
        city: 'Bilbao',
        country: 'Spain',
        flag: '🇪🇸',
        subtitle: 'Basque Country Road Trip',
        description: "San Mamés, pintxos bars, Txakoli wine and craft beer in the old town. Athletic Club's atmosphere is absolutely wild — pure passion.",
        image: '/bilbao.png',
        tags: ['Athletic Club', 'Pintxos', 'Txakoli'],
        size: 'large',
        year: '2023',
        rating: 5.0,
    },
    {
        id: 2,
        city: 'Düsseldorf',
        country: 'Germany',
        flag: '🇩🇪',
        subtitle: 'Altbier Capital',
        description: 'Close to home but epic every time. The Altstadt, 500ml Altbier rounds and a Fortuna game.',
        image: '/dusseldorf.png',
        tags: ['Altbier', 'Altstadt', 'Fortuna'],
        size: 'small',
        year: '2022',
        rating: 4.8,
    },
    {
        id: 3,
        city: 'Sicily',
        country: 'Italy',
        flag: '🇮🇹',
        subtitle: 'Southern Italian Madness',
        description: 'Arancini, Birra Messina and a local match under the Sicilian sun. Unforgettable chaos.',
        image: '/sicily.png',
        tags: ['Palermo', 'Birra Messina', 'Serie B vibes'],
        size: 'small',
        year: '2023',
        rating: 4.9,
    },
    {
        id: 4,
        city: 'Rome',
        country: 'Italy',
        flag: '🇮🇹',
        subtitle: 'Eternal City, Eternal Hangover',
        description: 'A Roma or Lazio match at the Stadio Olimpico, Peroni on every corner, and cobblestone bar-crawls till sunrise.',
        image: '/rome.png',
        tags: ['Stadio Olimpico', 'Peroni', 'AS Roma'],
        size: 'medium',
        year: '2024',
        rating: 4.9,
    },
];

const Destinations: React.FC = () => (
    <section className="destinations" id="trips">
        <div className="container">
            <div className="section-header">
                <span className="section-tag">The Trip Log</span>
                <h2 className="section-title">Where We've Been</h2>
                <p className="section-desc">
                    Four cities. Countless beers. One shared love for football.
                </p>
            </div>

            <div className="destinations__grid">
                {trips.map(trip => (
                    <div
                        key={trip.id}
                        className={`trip-card trip-card--${trip.size}`}
                    >
                        {/* Photo */}
                        <div className="trip-card__img-wrap">
                            <img src={trip.image} alt={`${trip.city} stadium`} className="trip-card__img" />
                            <div className="trip-card__overlay" />
                        </div>

                        {/* Label on top */}
                        <div className="trip-card__top">
                            <span className="trip-card__flag">{trip.flag}</span>
                            <span className="trip-card__rating">★ {trip.rating.toFixed(1)}</span>
                        </div>

                        {/* Content at bottom */}
                        <div className="trip-card__body">
                            <p className="trip-card__subtitle">{trip.country} · {trip.subtitle}</p>
                            <h3 className="trip-card__title">{trip.city}</h3>
                            {trip.size !== 'small' && (
                                <p className="trip-card__desc">{trip.description}</p>
                            )}
                            <div className="trip-card__tags">
                                {trip.tags.map(t => <span key={t} className="trip-tag">{t}</span>)}
                            </div>
                            <div className="trip-card__meta">
                                <span className="trip-card__year">📅 {trip.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Destinations;
