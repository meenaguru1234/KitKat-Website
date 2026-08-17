import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import GoldloanHero from './GoldloanHero'
import BannerGoldloan from './BannerGoldloan'
import WhyGoldloan from './WhyGoldloan'
import ModuleGoldloan from './ModuleGoldloan'
import ScheduleGoldloan from './ScheduleGoldloan'
import GoldloanIndustry from './GoldloanIndustry'
import ProcessGoldloan from './ProcessGoldloan'
import ReviewGoldloan from './ReviewGoldloan'
import FaqGoldloan from './FaqGoldloan'
import ReadyGoldloan from './ReadyGoldloan'



const GoldloanIndex = () => {
  return (
    
    <Box>
        <GoldloanHero/>
        <BannerGoldloan/>
        <WhyGoldloan/>
        <ModuleGoldloan/>
        <ScheduleGoldloan/>
        <GoldloanIndustry/>
        <ProcessGoldloan/>
        <ReviewGoldloan/>
        <FaqGoldloan/>
        <ReadyGoldloan/>       
        <Footer/>

    </Box>
  )
}

export default GoldloanIndex