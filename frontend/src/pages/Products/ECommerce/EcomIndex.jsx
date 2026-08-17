import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../../components/Footer'
import EcomHero from './EcomHero'
import BannerEcom from './BannerEcom'
import WhyChooseUs from './WhyChooseUs'
import EcomServices from './EcomServices'
import EcomPlatforms from './EcomPlatforms'
import EcomDevelopment from './EcomDevelopment'
import ReviewEcom from './ReviewEcom'
import FaqEcom from './FaqEcom'

const EcomIndex = () => {
  return (
    <Box>

        <EcomHero/>
        <BannerEcom/>
        <WhyChooseUs/>
        <EcomServices/>
        <EcomPlatforms/>
        <EcomDevelopment/>
        <ReviewEcom/>
        <FaqEcom/>




        <Footer/>

    </Box>
  )
}

export default EcomIndex