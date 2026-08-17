import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import MatriHero from './MatriHero'
import BannerMatrimony from './BannerMatrimony'
import WhyMatrimony from './WhyMatrimony'
import ModuleMatrimony from './ModuleMatrimony'
import LaunchMatrimony from './LaunchMatrimony'
import IndustryMatrimony from './IndustryMatrimony'
import ProcessMatrimony from './ProcessMatrimony'
import ReviewMatrimony from './ReviewMatrimony'
import FaqMatrimony from './FaqMatrimony'
import PlatformMatrimony from './PlatformMatrimony'






const MatriIndex = () => {
  return (
    
    <Box>

        <MatriHero/>
        <BannerMatrimony/>
        <WhyMatrimony/>
        <ModuleMatrimony/>
        <LaunchMatrimony/>
        <IndustryMatrimony/>
        <ProcessMatrimony/>
        <ReviewMatrimony/>
        <FaqMatrimony/>
        <PlatformMatrimony/>
        <Footer/>

    </Box>
  )
}

export default MatriIndex