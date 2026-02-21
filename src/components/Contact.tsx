import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
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
            {/* Decorative blobs */}
            <div className="contact__blob contact__blob--1" />
            <div className="contact__blob contact__blob--2" />

            <div className="container contact__inner">
                <div className="contact__badge">
                    <Mail size={14} />
                    <span>Trip Updates</span>
                </div>
                <h2 className="contact__title">Ready to Explore<br />Free Limburg?</h2>
                <p className="contact__subtitle">
                    Get curated trip ideas, seasonal guides, and local secrets delivered straight to your inbox.
                    Join over 3,000 Limburg lovers.
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
                                <span>Subscribe</span>
                            </button>
                        </div>
                        <p className="contact__note">No spam ever. Unsubscribe in one click.</p>
                    </form>
                ) : (
                    <div className="contact__success">
                        <span className="contact__success-icon">🎉</span>
                        <p>You're on the list! Expect your first Limburg guide soon.</p>
                    </div>
                )}

                <div className="contact__perks">
                    {['Weekly trip picks', 'Local food guides', 'Event calendars', 'Route maps'].map(p => (
                        <span key={p} className="contact__perk">✓ {p}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
