import Box from '@mui/material/Box';

import React from 'react';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import PreferToTalk from './PreferToTalk';
import OurOfficeLocation from './OurOfficeLocation';
import ContactBanner from './ContactBanner';
import WhyChooseContact from './WhyChooseContact';


const ContactIndex = () => {
  return (
   
    
    <Box>

        <ContactHero/>
        <PreferToTalk/>
        <OurOfficeLocation/>
        <ContactBanner/>
        <WhyChooseContact/>
        <Footer/>

    </Box>
  )
}

export default ContactIndex