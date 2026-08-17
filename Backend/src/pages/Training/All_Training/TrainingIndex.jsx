import { Box } from '@mui/material'
import React from 'react'
import TrainingFooter from '../../../components/TrainingFooter'
import TrainingHero from './TrainingHero'
import BannerTraining from './BannerTraining'
import WhyTraining from './WhyTraining'
import BookTraining from './BookTraining'
import JobTraining from './JobTraining'
import TrainingAchievement from './TrainingAchievement'
import PlacementTraining from './PlacementTraining'
import CompareTraining from './CompareTraining'
import EnrollTraining from './EnrollTraining'
import FaqTraining from './FaqTraining'
import TrustKitKat from './TrustKitKat'

const TrainingIndex = () => {
  return (
   <Box>

      <TrainingHero/>
      <BannerTraining/>
      <WhyTraining/>
      <BookTraining/>
      <JobTraining/>
      <TrainingAchievement/>
      <PlacementTraining/>
      <CompareTraining/>
      <EnrollTraining/>
      <FaqTraining/>
      <TrustKitKat/>




        <TrainingFooter/>
   </Box>
  )
}

export default TrainingIndex