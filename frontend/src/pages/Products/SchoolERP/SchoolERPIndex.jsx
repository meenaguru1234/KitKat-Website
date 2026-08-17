import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import ReviewSchoolErp from './ReviewSchoolErp'
import ProcessSchoolErp from './ProcessSchoolErp'
import IndustrySchoolErp from './IndustrySchoolErp'
import ActionSchoolErp from './ActionSchoolErp'
import ModuleSchoolErp from './ModuleSchoolErp'
import WhySchoolErp from './WhySchoolErp'
import BannerSchoolErp from './BannerSchoolErp'
import SchoolErpHero from './SchoolErpHero'

const SchoolERPIndex = () => {
  return (
    
    <Box>

        <SchoolErpHero/>
        <BannerSchoolErp/>
        <WhySchoolErp/>
        <ModuleSchoolErp/>
        <ActionSchoolErp/>
        <IndustrySchoolErp/>
        <ProcessSchoolErp/>
        <ReviewSchoolErp/>
        <Footer/>

    </Box>
  )
}

export default SchoolERPIndex