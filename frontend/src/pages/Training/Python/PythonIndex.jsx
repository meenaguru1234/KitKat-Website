import React from 'react'
import Box from "@mui/material/Box";
import TrainingFooter from '../../../components/TrainingFooter'
import PythonHero from './PythonHero';
import Bannerpython from './Bannerpython';
import WhyPython from './WhyPython';
import SyllabusPython from './SyllabusPython';
import CoursePython from './CoursePython';
import LearnPython from './LearnPython';
import PlacementPython from './PlacementPython';
import FaqPython from './FaqPython';


const PythonIndex = () => {
  return (
   
    <Box>

      <PythonHero/>
      <Bannerpython/>
      <WhyPython/>
      <SyllabusPython/>
      <CoursePython/>
      <LearnPython/>
    <PlacementPython/>
    <FaqPython/>
      <TrainingFooter/>
    </Box>
  )
}

export default PythonIndex