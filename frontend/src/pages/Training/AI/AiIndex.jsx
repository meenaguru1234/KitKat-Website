import React from 'react'
import Box from '@mui/material/Box'
import TrainingFooter from '../../../components/TrainingFooter'
import AiHeroPage from "../AI/AiHeroPage"
import BannerAi from './BannerAi'
import WhyAi from './WhyAi'
import SyllabusAi from './SyllabusAi'
import LearnAi from './LearnAi'
import PlacementAi from './PlacementAi'
import FaqAi from './FaqAi'
import ToolsTechAi from './ToolsTechAi'

const AiIndex = () => {
  return (
    
    <Box>


        <AiHeroPage/>
        <BannerAi/>
        <WhyAi/>
        <SyllabusAi/>
        <ToolsTechAi/>
        <LearnAi/>
        <PlacementAi/>
        <FaqAi/>
        <TrainingFooter/>
    </Box>
  )
}

export default AiIndex