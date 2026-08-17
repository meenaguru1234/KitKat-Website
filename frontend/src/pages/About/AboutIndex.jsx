import Box from '@mui/material/Box';

import React from 'react';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import OurValues from './OurValues';
import OurJourney from './OurJourney';
import AboutBanner from './AboutBanner';
import LeadershipTeam from './LeadershipTeam';
import OurOffice from './OurOffice';
import WhatOurClientsSay from './WhatOurClientsSay';
import TrustedBy from './TrustedBy';

const AboutIndex = () => {
    return (
        <Box>
            <AboutHero/>
            <OurStory/>
            <OurValues/>
            <OurJourney/>
            <AboutBanner/>
            <LeadershipTeam/>
            <OurOffice/>
            <WhatOurClientsSay/>
            <TrustedBy/>
            
            <Footer/>
        </Box>
    );
}

export default AboutIndex;
