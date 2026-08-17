import React from 'react'
import Box from '@mui/material/Box'
import TrainingFooter from '../../../components/TrainingFooter'
import DevOpsHero from './DevOpsHero'
import BannerDevOps from './BannerDevOps'
import WhyDevOps from './WhyDevOps'
import SyllabusDevOps from './SyllabusDevOps'
import ToolsTechADevOps from './ToolsTechDevOps'
import SkillsDevOps from './SkillsDevOps'
import FaqDevOps from './FaqDevOps'
import PlacementDevOps from './PlacementDevOps'


const DevOpsIndex = () => {
  return (
    
    <Box>

 
        <DevOpsHero/>
        <BannerDevOps/>
        <WhyDevOps/>
        <SyllabusDevOps/>
        <ToolsTechADevOps/>
        <SkillsDevOps/>
        <PlacementDevOps/>
        <FaqDevOps/>
        <TrainingFooter/>
    </Box>
  )
}

export default DevOpsIndex