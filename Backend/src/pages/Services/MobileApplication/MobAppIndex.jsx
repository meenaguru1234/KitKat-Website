import React from 'react'
import MobHero from './MobHero'
import { Box } from '@mui/material'
import MobService from './MobService'
import WhyChooseKitkat from './WhyChooseKitkat'
import Mobprocss from './Mobprocss'
import MobLaunch from './MobLaunch'
import ClientReviews from './ClientReviews'
import TrustedSponsor from './TrustedSponsor'
import Footer from '../../../components/Footer'


const MobAppIndex = () => {
  return (
    <>
        <Box>
             <MobHero/>
             <MobService/>
             <WhyChooseKitkat/>
             <Mobprocss/>
             <MobLaunch/>
             <ClientReviews/>
             <TrustedSponsor/>
             <Footer/>
        </Box>



    </>
  )
}

export default MobAppIndex