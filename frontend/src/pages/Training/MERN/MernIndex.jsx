import React from 'react'
import Box from '@mui/material/Box';
import TrainingFooter from '../../../components/TrainingFooter';
import BannerMern from '../../Training/MERN/BannerMern'
import FaqMern from './FaqMern';
import StudentSayMern from './StudentSayMern';
import MernHero from './MernHero';
import TechnologyMern from './TechnologyMern';
import LearningMern from './LearningMern';
import SyllabusMern from './SyllabusMern';
import TrainingMern from './TrainingMern';
import ProjectMern from './ProjectMern';
import PlacementMern from './PlacementMern';
// import ProjectMern from './ProjectMern'

const MernIndex = () => {
  return (
  
    

    <Box>

        <MernHero/>
        <TechnologyMern/>
        <LearningMern/>
        <SyllabusMern/>
        <TrainingMern/>
        <ProjectMern/>
        <PlacementMern/>
        <StudentSayMern/>
        <FaqMern/>
        <BannerMern/>
        <TrainingFooter/>

    </Box>
  )
}

export default MernIndex