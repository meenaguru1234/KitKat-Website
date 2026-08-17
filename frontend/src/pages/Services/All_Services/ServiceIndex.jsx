import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../../components/Footer'
import ServiceHero from './ServiceHero'
import OurServices from './OurServices'
import WhyChoose from './WhyChoose'
import ProcessService from './ProcessService'
import ConsultService from './ConsultService'
import BannerService from './BannerService'

const ServiceIndex = () => {
  return (
   <Box>
    
        <ServiceHero/>
        <OurServices/>
        <WhyChoose/>
        <ProcessService/>
        <ConsultService/>
        <BannerService/>
        <Footer/>
   </Box>
  )
}

export default ServiceIndex