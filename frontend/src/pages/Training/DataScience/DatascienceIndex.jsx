import { Box } from '@mui/material'
import React from 'react'
import TrainingFooter from '../../../components/TrainingFooter'
import BannerDataScience from './BannerDataScience';
import WhyDataScience from './WhyDataScience';
import DataScienceHero from './DataScienceHero';
import DataSciemceTableDetails from './DataScienceTableDetails';
import TechDataScience from './TechDataScience';
import ProjectDataScience from './ProjectDataScience';
import PlacementDataScience from './PlacementDataScience';
import StudentSayDataSci from './StudentSayDataSci';
import FaqDataScience from './FaqDataScience';


const DatascienceIndex = () => {
  return (
   <Box>
    <DataScienceHero/>
    <BannerDataScience/>
      <WhyDataScience/>
      <DataSciemceTableDetails/>
      <TechDataScience/>
      <ProjectDataScience/>
      <PlacementDataScience/>
      <StudentSayDataSci/>
      <FaqDataScience/>
    <TrainingFooter/>
   </Box>
  )
}

export default DatascienceIndex