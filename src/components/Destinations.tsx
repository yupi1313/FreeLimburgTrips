import React from 'react';
import { Beer, MapPin, Star, Flame } from 'lucide-react';
import './Destinations.css';

const trips = [
    {
        id: 1,
        city: 'Bilbao',
        country: 'Spain 🇪🇸',
        subtitle: 'Basque Country Road Trip',
        description: "San Mamés, pintxos bars, Txakoli wine and craft beer in the old town. Athletic Club's atmosphere is absolutely wild — pure passion.",
        icon: Flame,
        color: '#c0392b',
        tags: ['Athletic Club', 'Pintxos', 'San Mamés'],
        size: 'large',
        year: '2023',
        rating: 5.0,
    },
    {
        id: 2,
        city: 'Düsseldorf',
        country: 'Germany 🇩🇪',
        subtitle: 'Altbier Capital',
        description: 'Close to home but epic every time. The Altstadt, 500ml Altbier rounds and a Fortuna game.',
        icon: Beer,
        color: '#f39c12',
        tags: ['Altbier', 'Altstadt', 'Fortuna'],
        size: 'small',
        year: '2022',
        rating: 4.8,
    },
    {
        id: 3,
        city: 'Sicily',
        country: 'Italy 🇮🇹',
        subtitle: 'Southern Italian Madness',
        description: 'Arancini, Birra Messina and a local match under the Sicilian sun. Unforgettable chaos.',
        icon: Star,
        color: '#e67e22',
        tags: ['Palermo', 'Street food', 'Serie B vibes'],
        size: 'small',
        year: '2023',
        rating: 4.9,
    },
    {
        id: 4,
        city: 'Rome',
        country: 'Italy 🇮🇹',
        subtitle: 'Eternal City, Eternal Hangover',
        description: 'A Roma or Lazio match at the Stadio Olimpico, Peroni on every corner, and cobblestone bar-crawls till sunrise.',
        icon: MapPin,
        color: '#8e44ad',
        tags: ['Stadio Olimpico', 'Peroni', 'AS Roma'],
        size: 'medium',
        year: '2024',
        rating: 4.9,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <span className="dest-card__rating">★ {rating.toFixed(1)}</span>
);

const Destinations: React.FC = () => (
    <section className="destinations" id="trips">
        <div className="container">
            <div className="section-header">
                <p className="section-tag">The Trip Log</p>
                <h2 className="section-title">Where We've Been</h2>
                <p className="section-desc">
                    Four cities, countless beers, and one shared love for football. Here's every trip so far.
                </p>
            </div>

            <div className="destinations__grid">
                {trips.map(trip => {
                    const Icon = trip.icon;
                    return (
                        <div
                            key={trip.id}
                            className={`dest-card dest-card--${trip.size}`}
                            style={{ '--accent': trip.color } as React.CSSProperties}
                        >
                            <div className="dest-card__glow" />
                            <div className="dest-card__icon">
                                <Icon size={24} strokeWidth={1.8} />
                            </div>
                            <div className="dest-card__body">
                                <p className="dest-card__subtitle">{trip.country} · {trip.subtitle}</p>
                                <h3 className="dest-card__title">{trip.city}</h3>
                                {trip.size !== 'small' && (
                                    <p className="dest-card__desc">{trip.description}</p>
                                )}
                                <div className="dest-card__meta">
                                    <StarRating rating={trip.rating} />
                                    <span className="dest-card__duration">📅 {trip.year}</span>
                                </div>
                                <div className="dest-card__tags">
                                    {trip.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                </div>
                            </div>
                            <div className="dest-card__arrow">→</div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Destinations;
