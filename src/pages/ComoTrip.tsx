import React, { useEffect } from 'react';
import { CalendarDays, MapPin, Beer, ArrowLeft, Coffee, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ComoTrip.css';

const ComoTrip: React.FC = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="como-page">
            <div className="como-page__hero">
                <div className="como-page__hero-overlay"></div>
                <img src="/como_lake.png" alt="Lake Como" className="como-page__hero-bg" />
                <div className="container como-page__hero-content">
                    <Link to="/" className="como-page__back">
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>
                    <span className="como-page__badge">10-12 April 2025</span>
                    <h1 className="como-page__title">Lake <em>Como</em></h1>
                    <p className="como-page__subtitle">Lakeside luxury, warm weather, and Serie A passion.</p>
                </div>
            </div>

            <div className="container">
                <div className="como-page__grid">
                    {/* Left Column: Details */}
                    <div className="como-page__details">
                        <section className="como-section">
                            <h2>The Experience</h2>
                            <p className="como-section__text">
                                Get ready for an unforgettable weekend. We're heading to Northern Italy, where the Alps meet the water. Expect stunning scenery, sunny skies, incredible Italian food, and of course, the beautiful game played right by the lake.
                            </p>

                            <div className="como-features">
                                <div className="como-feature">
                                    <Sun size={24} className="como-feature__icon" />
                                    <h3>Warm Weather</h3>
                                    <p>Spring in Italy means sunny days and perfect t-shirt weather by the lake.</p>
                                </div>
                                <div className="como-feature">
                                    <Coffee size={24} className="como-feature__icon" />
                                    <h3>La Dolce Vita</h3>
                                    <p>Espresso in the morning, Aperol Spritz in the afternoon, pizza at night.</p>
                                </div>
                            </div>
                        </section>

                        <section className="como-section">
                            <h2>The Match</h2>
                            <div className="como-stadium">
                                <img src="/como_stadium.png" alt="Stadio Giuseppe Sinigaglia" className="como-stadium__img" />
                                <div className="como-stadium__info">
                                    <h3>Stadio Giuseppe Sinigaglia</h3>
                                    <p>
                                        Located literally on the edge of the lake, this historic stadium offers one of the most picturesque settings in world football.
                                    </p>
                                    <div className="como-stadium__meta">
                                        <span><MapPin size={16} /> Viale Giuseppe Sinigaglia, Como</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Logistics */}
                    <div className="como-page__sidebar">
                        <div className="como-card">
                            <h3>Logistics</h3>
                            <ul className="como-logistics">
                                <li>
                                    <CalendarDays size={20} />
                                    <div>
                                        <strong>Dates</strong>
                                        <span>April 10 - April 12, 2025</span>
                                    </div>
                                </li>
                                <li>
                                    <MapPin size={20} />
                                    <div>
                                        <strong>Destination</strong>
                                        <span>Como, Lombardy, Italy</span>
                                    </div>
                                </li>
                                <li>
                                    <Beer size={20} />
                                    <div>
                                        <strong>Vibe</strong>
                                        <span>Calm mornings, chaotic matchdays</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="como-card">
                            <h3>The Fleet</h3>
                            <p className="como-card__desc">We are rolling down in a 2-car convoy to conquer the roads.</p>
                            <div className="como-fleet">
                                <div className="como-fleet__item">
                                    <img src="/tesla_y.png" alt="Tesla Model Y" />
                                    <span>Tesla Model Y</span>
                                </div>
                                <div className="como-fleet__item">
                                    <img src="/vw_up.png" alt="VW Up" />
                                    <span>VW Up!</span>
                                </div>
                            </div>
                        </div>

                        <div className="como-card como-card--cta">
                            <h3>Ready to join?</h3>
                            <p>Spots are limited. Let us know you're coming.</p>
                            <a href="/#contact" className="como-btn">I'm In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComoTrip;
