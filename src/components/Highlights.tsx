import React from 'react';
import { Beer, CalendarDays, Users, MapPin } from 'lucide-react';
import './Highlights.css';

const facts = [
    {
        icon: Users,
        title: 'The Crew',
        desc: 'A tight-knit group of mates from Limburg with one shared obsession: football, travel, and local beers.',
    },
    {
        icon: CalendarDays,
        title: 'Since 2022',
        desc: 'Started with a spontaneous trip to Düsseldorf. Now it\'s a tradition — every year, at least one big trip.',
    },
    {
        icon: Beer,
        title: 'The Rule',
        desc: 'Every city, you must drink the local beer. No exceptions. No Heineken. Ever.',
    },
    {
        icon: MapPin,
        title: 'Next Destination',
        desc: 'TBD — but the pitch has been made for Porto, Madrid, and Glasgow. Watch this space.',
    },
];

const itinerary = [
    { day: 'Day 1', title: 'Arrive & Warm Up', desc: 'Check in, hit the first bar, and do a reconnaisance of the stadium neighbourhood. Try the local beer. Twice.' },
    { day: 'Day 2', title: 'Match Day 🏟️', desc: 'Pre-match beers, scarves on, into the stadium. Absolute scenes. Post-match celebrations (or commiserations) until late.' },
    { day: 'Day 3', title: 'Recovery Tour', desc: 'Slow morning, big breakfast, explore the city. Find the best local spots that aren\'t in any tourist guide.' },
    { day: 'Day 4', title: 'Home (Reluctantly)', desc: 'Final round at the airport. Arguments about who\'s planning the next trip start before boarding.' },
];

const Highlights: React.FC = () => (
    <section className="highlights" id="highlights">
        <div className="container">
            <div className="highlights__grid">
                <div className="highlights__left">
                    <p className="section-tag">About Us</p>
                    <h2 className="highlights__title">Lads from Limburg,<br />Football at Heart</h2>
                    <p className="highlights__intro">
                        We're not a fan club, not a travel agency. Just a group of friends who found a great excuse to
                        see Europe: follow the football, drink the beer, make the memories.
                    </p>
                    <div className="highlights__facts">
                        {facts.map(h => {
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

                <div className="highlights__right">
                    <div className="itinerary">
                        <div className="itinerary__header">
                            <span className="section-tag" style={{ marginBottom: 0 }}>The Formula</span>
                            <h3 className="itinerary__heading">A Typical Trip</h3>
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
