import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import CrmHero from './CrmHero'
import CrmBanner from './CrmBanner'
import WhyCrm from './WhyCrm'
import CrmService from './CrmService'
import CrmAssessment from './CrmAssessment'
import CrmIndustry from './CrmIndustry'
import CoreCrm from './CoreCrm'
import CrmProcess from './CrmProcess'
import CrmTech from './CrmTech'
import ReviewCrm from './ReviewCrm'
import FaqCrm from './FaqCrm'

const CrmIndex = () => {
  return (
   <Box>

    <CrmHero/>
    <CrmBanner/>
    <WhyCrm/>
    <CrmService/>
    <CrmAssessment/>
    <CrmIndustry/>
    <CoreCrm/>
    <CrmProcess/>
    <CrmTech/>
    <ReviewCrm/>
    <FaqCrm/>
    <Footer/>
   </Box>
  )
}

export default CrmIndex