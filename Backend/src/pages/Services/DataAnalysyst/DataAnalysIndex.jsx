import { Box } from '@mui/material'
import React from 'react'
import DataAnalysFaq from './DataAnalysFaq'
import DataHero from './DataHero'
import DataBanner from './DataBanner'
import WhyBusiness from './WhyBusiness'
import DataService from './DataService'
import SearchData from './SearchData'
import DataIndustries from './DataIndustries'
import DataImpact from './DataImpact'
import Clientstories from './Clientstories'
import Footer from '../../../components/Footer'

const DataAnalysIndex = () => {
  return (
   
    
    <Box>

        <DataHero/>
        <DataBanner/>
        <WhyBusiness/>
        <DataService/>
        <SearchData/>
        <DataIndustries/>
        <DataImpact/>
        <Clientstories/>
        <DataAnalysFaq/>
        <Footer/>

    </Box>
  )
}

export default DataAnalysIndex