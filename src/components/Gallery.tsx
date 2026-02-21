import React, { useState } from 'react';
import './Gallery.css';

// All 18 real trip photos
const photos = [
    '/photos/19ee782f-b542-4b85-bfaf-53f0f4a17877.jpg',
    '/photos/32a189ff-dd6e-4f1e-b627-307d02f298b3.jpg',
    '/photos/3d1d7215-6de1-4223-93a1-71e23af2f423.jpg',
    '/photos/51bca8bf-6845-4b4d-ae68-e62b2e3ca549.jpg',
    '/photos/5c04152c-8d04-4c6b-8ece-8892a76ee16b.jpg',
    '/photos/6811550b-c6b8-4438-82db-40c14d1d19ac.jpg',
    '/photos/810974f8-06d7-49b8-b986-96e8bbca2b11.jpg',
    '/photos/8e1b4463-4561-4855-8c3f-41d9e85b47e8.jpg',
    '/photos/9dace6e4-33b7-4caa-97a3-753eb5877553.jpg',
    '/photos/img_8044.jpg',
    '/photos/img_8231.jpg',
    '/photos/img_8254.jpg',
    '/photos/img_9750.jpg',
    '/photos/img_9804.jpg',
    '/photos/img_9830.jpg',
    '/photos/e679d508-fe70-43f8-b0cb-3a9841091731.jpg',
    '/photos/f17857a0-ce0f-4ce1-bcf2-2e407db1915e.jpg',
    '/photos/ffb10168-79c0-4041-9e67-dafd29a653a3.jpg',
];

interface LightboxProps {
    src: string;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, onClose, onPrev, onNext }) => {
    // Close on backdrop click
    const handleBackdrop = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    // Keyboard nav
    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [onClose, onNext, onPrev]);

    return (
        <div className="lightbox" onClick={handleBackdrop}>
            <button className="lightbox__close" onClick={onClose} aria-label="Close">×</button>
            <button className="lightbox__prev" onClick={onPrev} aria-label="Previous">‹</button>
            <img src={src} alt="Trip photo" className="lightbox__img" />
            <button className="lightbox__next" onClick={onNext} aria-label="Next">›</button>
        </div>
    );
};

const Gallery: React.FC = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    const openPhoto = (idx: number) => setActiveIdx(idx);
    const closePhoto = () => setActiveIdx(null);
    const prevPhoto = () => setActiveIdx(i => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
    const nextPhoto = () => setActiveIdx(i => (i === null ? 0 : (i + 1) % photos.length));

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Behind the Scenes</span>
                    <h2 className="section-title">The Trip in Photos</h2>
                    <p className="section-desc">
                        No filters needed. Good lads, great cities, cold beers.
                    </p>
                </div>

                <div className="gallery__grid">
                    {photos.map((src, idx) => (
                        <button
                            key={src}
                            className="gallery__item"
                            onClick={() => openPhoto(idx)}
                            aria-label={`View photo ${idx + 1}`}
                        >
                            <img
                                src={src}
                                alt={`Trip photo ${idx + 1}`}
                                className="gallery__img"
                                loading="lazy"
                            />
                            <div className="gallery__hover">
                                <span className="gallery__zoom">⊕</span>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {activeIdx !== null && (
                <Lightbox
                    src={photos[activeIdx]}
                    onClose={closePhoto}
                    onPrev={prevPhoto}
                    onNext={nextPhoto}
                />
            )}
        </section>
    );
};

export default Gallery;
