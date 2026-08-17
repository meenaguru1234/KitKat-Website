import React from 'react'
import Box from '@mui/material/Box'
import Footer from "../../../components/Footer"
import HrmHero from './HrmHero'
import HrmBanner from './HrmBanner'
import WhyHrm from './WhyHrm'
import ModuleHrm from './ModuleHrm'
import ScheduleHrm from './ScheduleHrm'
import HrmIndustry from './HrmIndustry'
import HrmProcess from './HrmProcess'
import ReviewHrm from './ReviewHrm'
import FaqHrm from './FaqHrm'
import ReadyHrm from './ReadyHrm'

const HrmIndex = () => {
  return (
  
  <Box>

    <HrmHero/>
    <HrmBanner/>
    <WhyHrm/>
    <ModuleHrm/>
    <ScheduleHrm/>
    <HrmIndustry/>
    <HrmProcess/>
    <ReviewHrm/>
    <FaqHrm/>
    <ReadyHrm/>
    <Footer/>

  </Box>
  )
}

export default HrmIndex