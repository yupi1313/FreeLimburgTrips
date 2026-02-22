import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, MapPin, Beer, Car } from 'lucide-react';
import './NextTrip.css';

const NextTrip: React.FC = () => {
    return (
        <section className="next-trip" id="next-trip">
            <div className="container">
                <div className="next-trip__inner">
                    <div className="next-trip__content">
                        <span className="next-trip__badge">Next Up · 10-12 April 2025</span>
                        <h2 className="next-trip__title">
                            <em>Como</em>, Italy 🇮🇹
                        </h2>
                        <p className="next-trip__desc">
                            Lakeside luxury meets Serie A passion. We're heading to the stunning Stadio Giuseppe Sinigaglia — literally on the water's edge.
                            Very warm weather, beautiful views, and plenty of Birra Moretti.
                        </p>

                        <div className="next-trip__details">
                            <div className="next-trip__detail">
                                <MapPin size={20} className="next-trip__icon" />
                                <div>
                                    <strong>Location</strong>
                                    <span>Lake Como & Stadio Sinigaglia</span>
                                </div>
                            </div>
                            <div className="next-trip__detail">
                                <CalendarDays size={20} className="next-trip__icon" />
                                <div>
                                    <strong>When</strong>
                                    <span>10-12 April 2025</span>
                                </div>
                            </div>
                            <div className="next-trip__detail">
                                <Beer size={20} className="next-trip__icon" />
                                <div>
                                    <strong>The Vibe</strong>
                                    <span>Aperol Spritz, Moretti & Calcio</span>
                                </div>
                            </div>
                            <div className="next-trip__detail">
                                <Car size={20} className="next-trip__icon" />
                                <div>
                                    <strong>The Fleet</strong>
                                    <span>Travelling in style with a white Tesla Model Y & VW Up!</span>
                                    <div className="next-trip__cars">
                                        <img src="/tesla_y.png" alt="White Tesla Model Y" className="next-trip__car-img" />
                                        <img src="/vw_up.png" alt="White VW Up" className="next-trip__car-img" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link to="/como" className="next-trip__cta">Explore the Trip</Link>
                    </div>

                    <div className="next-trip__visuals">
                        <div className="next-trip__img-wrap next-trip__img-wrap--main">
                            <img src="/como_lake.png" alt="Lake Como with Italian women" className="next-trip__img" />
                        </div>
                        <div className="next-trip__img-wrap next-trip__img-wrap--sub">
                            <img src="/como_stadium.png" alt="Stadio Giuseppe Sinigaglia Como" className="next-trip__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NextTrip;
