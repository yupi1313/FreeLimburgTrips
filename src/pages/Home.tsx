import React from 'react';
import Hero from '../components/Hero';
import NextTrip from '../components/NextTrip';
import Destinations from '../components/Destinations';
import Gallery from '../components/Gallery';
import Highlights from '../components/Highlights';

const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <NextTrip />
            <Destinations />
            <Gallery />
            <Highlights />
        </main>
    );
};

export default Home;
