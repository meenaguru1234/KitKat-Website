import Box from '@mui/material/Box';
import React from 'react';
import SeoFaq from './SeoFaq';
import ClientReview from './ClientReview';
import SeoPricing from './SeoPricing';
import SeoHero from './SeoHero';
import SeoBanner from './SeoBanner';
import SeoService from './SeoService';
import Curious from './Curious';
import SeoProcess from './SeoProcess';
import SeoWhyKitkat from './SeoWhyKitkat';
import Footer from '../../../components/Footer';



const SeoIndex = () => {
  
    return (

        <Box>


            <SeoHero/>
            <SeoBanner/>
            <SeoService/>
            <Curious/>
            <SeoProcess/>
            <SeoWhyKitkat/>
            <SeoPricing/>
            <ClientReview/>
            <SeoFaq/>
            <Footer/>
        </Box>
      
    );
}

export default SeoIndex;