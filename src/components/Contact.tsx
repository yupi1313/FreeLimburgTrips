import React, { useState } from 'react';
import { Send, Beer } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) { setSubmitted(true); setEmail(''); }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__blob contact__blob--1" />
            <div className="contact__blob contact__blob--2" />

            <div className="container contact__inner">
                <div className="contact__badge">
                    <Beer size={14} />
                    <span>Next Trip Incoming</span>
                </div>
                <h2 className="contact__title">Want to Join<br />the Next One?</h2>
                <p className="contact__subtitle">
                    Drop your email and we'll let you know when the next trip is being planned.
                    Fair warning: it involves football, beer, and zero sleep.
                </p>

                {!submitted ? (
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__input-wrap">
                            <input
                                id="email-input"
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="contact__input"
                            />
                            <button type="submit" className="contact__submit">
                                <Send size={18} />
                                <span>I'm In</span>
                            </button>
                        </div>
                        <p className="contact__note">No spam. Only trip announcements and bad post-match takes.</p>
                    </form>
                ) : (
                    <div className="contact__success">
                        <span className="contact__success-icon">🍺</span>
                        <p>You're on the list! See you at the next match.</p>
                    </div>
                )}

                <div className="contact__perks">
                    {['Early trip announcements', 'Match day logistics', 'Bar recommendations', 'Legendary stories'].map(p => (
                        <span key={p} className="contact__perk">✓ {p}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
