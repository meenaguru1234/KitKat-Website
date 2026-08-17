import { Box } from '@mui/material'
import React from 'react'
import TrainingFooter from '../../../components/TrainingFooter'
import JavaHero from './JavaHero'
import BannerJava from './BannerJava'
import WhyJava from './WhyJava'
import PathJava from './PathJava'
import JavaSyllabusDetails from './JavaSyllabusDetails'
import TechnologyJava from './TechnologyJava'
import ProjectJava from './ProjectJava'
import PlacementJava from './PlacementJava'
import StudentSaysJava from './StudentsaysJava'
import FaqJsx from './FaqJava'

const JavaIndex = () => {
  return (
    <Box>

        <JavaHero/>
        <BannerJava/>
        <WhyJava/>
        <PathJava/>
        <JavaSyllabusDetails/>
        <TechnologyJava/>
        <ProjectJava/>
        <PlacementJava/>
        <StudentSaysJava/>
        <FaqJsx/>
        <TrainingFooter/>
    </Box>
  )
}

export default JavaIndex