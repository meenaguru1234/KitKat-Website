
import { Box } from '@mui/material'
import React from 'react'
import WebHostingHero from './WebHostingHero'
import TrustedHosting from './TrustedHosting'
import WhyChooseHosting from './WhyChooseHosting'
import WebHostingServices from './WebHostingServices'
import WebHostingSecurity from './WebHostingSecurity'
import PlanArray from './BusinessArray'
import BusinessArray from './BusinessArray'
import ReadyLaunch from './ReadyLaunch'
import Footer from '../../../components/Footer'

const WebhostingIndex = () => {
  return (
    <>
    <Box>
        <WebHostingHero/>
        <TrustedHosting/>
        <WhyChooseHosting/>
        <WebHostingServices/>
        <WebHostingSecurity/>
        <BusinessArray/>
        <ReadyLaunch/>
        <Footer/>
    </Box>
    
    
    
    </>
  )
}

export default WebhostingIndex