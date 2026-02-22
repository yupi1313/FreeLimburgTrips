import React from 'react';
import Hero from '../components/Hero';
import TheCrew from '../components/TheCrew';
import NextTrip from '../components/NextTrip';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Highlights from '../components/Highlights';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <TheCrew />
            <NextTrip />
            <Destinations />
            <Gallery />
            <Highlights />
        </main>
    );
};

export default Home;
