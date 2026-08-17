import { Box } from '@mui/material'
import React from 'react'
import DigiFaq from './DigiFaq'
import DigiHero from './DigiHero'
import SearchDigi from './SearchDigi'
import DigiWhyKitkat from './DigiWhyKitkat'
import DigiMarketing from './DigiMarketing'
import LaunchDigi from './LaunchDigi'
import DigiSolution from './DigiSolution'
import DigiProven from './DigiProven'
import DigiBenifitStories from './DigiBenifitStories'
import Footer from '../../../components/Footer'

const DigiMarketIndex = () => {
  return (
    <Box>

        <DigiHero/>
        <SearchDigi/>
        <DigiWhyKitkat/>
        <DigiMarketing/>
        <LaunchDigi/>
        <DigiSolution/>
        <DigiProven/>
        <DigiBenifitStories/>
        <DigiFaq/>
        <Footer/>
    </Box>
  )
}

export default DigiMarketIndex