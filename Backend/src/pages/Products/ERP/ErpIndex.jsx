import React from 'react'
import Box from '@mui/material/Box'
import Footer from "../../../components/Footer"
import ErpHero from './ErpHero'
import BannerErp from './BannerErp'
import WhyErp from './WhyErp'
import ErpSoftware from './ErpSoftware'
import ErpAssessment from './ErpAssessment'
import ErpProcess from './ErpProcess'
import ErpSystemSection from './ErpSystemSection'
import ErpDevelopment from './ErpDevelopment'
import ReviewErp from './ReviewErp'
import FaqErp from './FaqErp'


const ErpIndex = () => {
  return (
    <Box>

        <ErpHero/>
        <BannerErp/>
        <WhyErp/>
        <ErpSoftware/>
        <ErpAssessment/>
        <ErpSystemSection/>
        <ErpProcess/>
        <ErpDevelopment/>
        <ReviewErp/>
        <FaqErp/>
        <Footer/>

    </Box>
  )
}

export default ErpIndex