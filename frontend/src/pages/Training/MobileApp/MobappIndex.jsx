import Box from '@mui/material/Box'
import React from 'react'
import TrainingFooter from '../../../components/TrainingFooter';
import MobAppHero from './MobAppHero';
import BannerMobapp from './BannerMobapp';
import DevelopmentMob from './DevelopmentMob';
import TechMob from './TechMob';
import WhykitkatMobApp from './WhykitkatMobApp';
import Placemementprocess from './Placementprocess';
import StudentSaysMob from './StudentSaysMob';
import FaqMob from './FaqMob';


const MobappIndex = () => {
  return (
    
  <Box>

    <MobAppHero/>
    <BannerMobapp/>
    <DevelopmentMob/>
    <TechMob/>
    <WhykitkatMobApp/>
    <Placemementprocess/>
    <StudentSaysMob/>
    <FaqMob/>
    <TrainingFooter/>
  </Box>


  )
}

export default MobappIndex