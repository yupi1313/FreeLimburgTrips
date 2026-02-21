import React from 'react';
import { Sun, Clock, Users, Shield } from 'lucide-react';
import './Highlights.css';

const highlights = [
    {
        icon: Sun,
        title: 'Best Seasons',
        desc: 'April–October offers warm cycling weather, blooming nature, and packed festival calendars.',
    },
    {
        icon: Clock,
        title: 'Easy to Reach',
        desc: 'Limburg is within 2 hours of Amsterdam, Brussels, Düsseldorf, and Paris by fast rail.',
    },
    {
        icon: Users,
        title: 'For Everyone',
        desc: 'Whether solo, with family, or as a couple — Limburg has the perfect pace and landscape for you.',
    },
    {
        icon: Shield,
        title: 'Safe & Welcoming',
        desc: 'One of the safest regions in the Netherlands, known for warm Burgundian hospitality.',
    },
];

const itinerary = [
    { day: 'Day 1', title: 'Arrive in Maastricht', desc: 'Explore the old city centre, cross the Sint Servaasbrug and enjoy Limburgse vlaai at a canal-side cafe.' },
    { day: 'Day 2', title: 'Valkenburg Day Trip', desc: 'Visit the castle ruins, descend into the Velvet Caves, and sup at Café de la Station.' },
    { day: 'Day 3', title: 'Cycling the Geul Valley', desc: 'Rent an e-bike and cycle 45km through villages like Schin op Geul, Mechelen, and Epen.' },
    { day: 'Day 4', title: 'Drielandenpunt Hike', desc: 'Summit the highest point in the Netherlands, then lunch across the border in Aachen, Germany.' },
];

const Highlights: React.FC = () => (
    <section className="highlights" id="highlights">
        <div className="container">
            <div className="highlights__grid">
                {/* Left: facts */}
                <div className="highlights__left">
                    <p className="section-tag">Why Limburg</p>
                    <h2 className="highlights__title">Everything You Need<br />for a Perfect Trip</h2>
                    <p className="highlights__intro">
                        Free Limburg combines the best of Dutch, Belgian, and German traditions into one compact,
                        staggeringly beautiful region. Here's why travellers keep coming back.
                    </p>
                    <div className="highlights__facts">
                        {highlights.map(h => {
                            const Icon = h.icon;
                            return (
                                <div key={h.title} className="fact">
                                    <div className="fact__icon"><Icon size={20} strokeWidth={2} /></div>
                                    <div>
                                        <h4 className="fact__title">{h.title}</h4>
                                        <p className="fact__desc">{h.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right: sample itinerary */}
                <div className="highlights__right">
                    <div className="itinerary">
                        <div className="itinerary__header">
                            <span className="section-tag" style={{ marginBottom: 0 }}>Sample Itinerary</span>
                            <h3 className="itinerary__heading">4-Day Limburg Classic</h3>
                        </div>
                        {itinerary.map((item, idx) => (
                            <div className="itinerary__item" key={idx}>
                                <div className="itinerary__dot">
                                    <span>{idx + 1}</span>
                                </div>
                                <div className="itinerary__content">
                                    <span className="itinerary__day">{item.day}</span>
                                    <h4 className="itinerary__title">{item.title}</h4>
                                    <p className="itinerary__desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Highlights;
