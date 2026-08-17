import Box from '@mui/material/Box';
import React from 'react';
import Hero from './Hero';
import Info from './Info';
import SoftwareDev from './SoftwareDev';
import Technologies from './Technologies';
import CustomSoftware from './CustomSoftware';
import Industries from './Industries';
import CostEstimateBanner from './CostEstimateBanner';
import ClientTestimonials from './ClientTestimonials';
import Footer from '../../../components/Footer';

const CustomIndex = () => {
    return (
        <Box>
            <Hero/> 
            <Info/> 
            <SoftwareDev/> 
            <Technologies/> 
            <CustomSoftware/> 
            <Industries/> 
            <CostEstimateBanner/>
            <ClientTestimonials/>

            <h2 style={{alignItems:'center', color:'#071B52', justifyContent:'center', display:'flex', fontWeight:600}}>Trusted By Business Across Coimbatore</h2>
            <Footer/>
        </Box>
    );
}

export default CustomIndex;
