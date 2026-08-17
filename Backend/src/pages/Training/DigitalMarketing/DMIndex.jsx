import { Box } from '@mui/material'
import React from 'react'
import TrainingFooter from '../../../components/TrainingFooter'
import DigiHero from './DigiHero'
import BannerDigi from './BannerDigi'
import WhyDigitalMarketing from './WhyDigitalMarketing'
import TableDigiDetails from './TableDigiDetails'
import PlacementDigi from './PlacementDigi'
import StudentSaysDigi from './StudentSaysDigi'
import FaqDigi from './FaqDigi'
import LaunchDigi from './LaunchDigi'
import TechDigiMarket from './TechDigiMarket'
import ProjectDigi from './ProjectDigi'

const DMIndex = () => {
  return (
  
    

    <Box>

        <DigiHero/>
        <BannerDigi/>
        <WhyDigitalMarketing/>
        <TableDigiDetails/>
        <TechDigiMarket/>
        <ProjectDigi/>
        <PlacementDigi/>
        <StudentSaysDigi/>
        <FaqDigi/>
        <LaunchDigi/>
        <TrainingFooter/>
    </Box>
  )
}

export default DMIndex
