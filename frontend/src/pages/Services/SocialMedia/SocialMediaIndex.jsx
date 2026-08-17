import { Box } from '@mui/material'
import React from 'react'
import SocialFaq from './SocialFaq'
import SocialClientReview from './SocialClientReview'
import SocialPackages from './SocialPackages'
import IndustryCaseStudy from './IndustryCaseStudy'
import WhyKitkatOurResult from './WhyKitkatOurResult'
import SocialMediaHero from './SocialMediaHero'
import SocialBanner from './SocialBanner'
import MarketingService from './MarketingService'
import Customers from './Customers'
import SocialProcess from './SocialProcess'
import Footer from '../../../components/Footer'

const SocialMediaIndex = () => {
  return (
    
    
    <Box>

      <SocialMediaHero/>
      <SocialBanner/>
      <MarketingService/>
      <Customers/>
      <SocialProcess/>
      <WhyKitkatOurResult/>
      <IndustryCaseStudy/>
      <SocialPackages/>
      <SocialClientReview/>
      <SocialFaq/>
      <Footer/>

    </Box>
  )
}

export default SocialMediaIndex