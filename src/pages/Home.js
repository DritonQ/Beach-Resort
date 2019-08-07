import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        // <Hero hero="defaultHero"/>// or like this
        <React.Fragment>
        <Hero>
            <Banner title="Dhoma Luksose" subtitle="Dhomat Luksose fillojn nga 150E">
                <Link to="/rooms" className="btn-primary" >Dhomat Tona</Link>
            </Banner>
        </Hero>
        
        <Services />
        <FeaturedRooms />
        </React.Fragment>
        
    );
}

export default Home;