import React from 'react';
import { Bike, Castle, TreePine, Waves, Coffee, Camera } from 'lucide-react';
import './Destinations.css';

const destinations = [
    {
        id: 1,
        title: 'Valkenburg aan de Geul',
        subtitle: 'Castles & Caves',
        description: 'Explore the only hill city in the Netherlands with its iconic castle ruins, mystical caves, and charming terrace cafes.',
        icon: Castle,
        color: '#c47c3a',
        tags: ['History', 'Caves', 'Romantic'],
        size: 'large',
        duration: '2–3 days',
        rating: 4.9,
    },
    {
        id: 2,
        title: 'Cycling the Geul Valley',
        subtitle: 'Epic Bike Routes',
        description: 'Wind through lush river valleys, past wildflower meadows and half-timbered villages on 100km of dedicated cycling paths.',
        icon: Bike,
        color: '#2d6a4f',
        tags: ['Cycling', 'Nature', 'Active'],
        size: 'small',
        duration: '1 day',
        rating: 4.8,
    },
    {
        id: 3,
        title: 'National Park De Meinweg',
        subtitle: 'Wild Nature Escapes',
        description: 'Lose yourself in ancient heathland and Scots pine forests. Spot deer, rare birds, and hidden fens far from the city.',
        icon: TreePine,
        color: '#1a3d2b',
        tags: ['Hiking', 'Wildlife', 'Peace'],
        size: 'small',
        duration: '1–2 days',
        rating: 4.7,
    },
    {
        id: 4,
        title: 'Maas River Canoe Trip',
        subtitle: 'Waterway Adventures',
        description: 'Paddle the mighty Maas through open countryside, stopping at riverside terraces to taste local Limburg beer and flan.',
        icon: Waves,
        color: '#2563ab',
        tags: ['Canoeing', 'Water', 'Fun'],
        size: 'medium',
        duration: '1–2 days',
        rating: 4.8,
    },
    {
        id: 5,
        title: 'Maastricht City Break',
        subtitle: 'Culture & Gastronomy',
        description: 'Discover a city of Roman bridges, Burgundian cafe culture, world-class bookshops, and the finest Dutch cuisine.',
        icon: Coffee,
        color: '#7c3aed',
        tags: ['City', 'Food', 'Culture'],
        size: 'medium',
        duration: '2 days',
        rating: 4.9,
    },
    {
        id: 6,
        title: 'Panoramic Hilltop Walks',
        subtitle: 'Scenic Vistas',
        description: 'Climb the Drielandenpunt — the highest point in the Netherlands — and gaze across three countries from one breathtaking spot.',
        icon: Camera,
        color: '#b7791f',
        tags: ['Hiking', 'Views', 'Borders'],
        size: 'small',
        duration: '1 day',
        rating: 4.9,
    },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <span className="dest-card__rating">★ {rating.toFixed(1)}</span>
);

const Destinations: React.FC = () => (
    <section className="destinations" id="destinations">
        <div className="container">
            <div className="section-header">
                <p className="section-tag">Where to Go</p>
                <h2 className="section-title">Top Destinations<br />in Free Limburg</h2>
                <p className="section-desc">
                    From medieval hill towns to sweeping river valleys — every corner of Limburg tells a different story.
                </p>
            </div>

            <div className="destinations__grid">
                {destinations.map(dest => {
                    const Icon = dest.icon;
                    return (
                        <div
                            key={dest.id}
                            className={`dest-card dest-card--${dest.size}`}
                            style={{ '--accent': dest.color } as React.CSSProperties}
                        >
                            <div className="dest-card__glow" />
                            <div className="dest-card__icon">
                                <Icon size={24} strokeWidth={1.8} />
                            </div>
                            <div className="dest-card__body">
                                <p className="dest-card__subtitle">{dest.subtitle}</p>
                                <h3 className="dest-card__title">{dest.title}</h3>
                                {dest.size !== 'small' && (
                                    <p className="dest-card__desc">{dest.description}</p>
                                )}
                                <div className="dest-card__meta">
                                    <StarRating rating={dest.rating} />
                                    <span className="dest-card__duration">⏱ {dest.duration}</span>
                                </div>
                                <div className="dest-card__tags">
                                    {dest.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
