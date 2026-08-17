import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import MiniBankHero from './MiniBankHero'
import BannerMiniBank from './BannerMiniBank'
import SoftwareBanking from './SoftwareBanking'
import WhyMiniBank from './WhyMiniBank'
import BankingComparison from './BankingComparison'
import PowerfulFeatures from './PowerfulFeatures'
import BankingPartner from './BankingPartner'
import CTABanner from './CTABanner'



const MiniBankIndex = () => {
  return (
    
    <Box>

        <MiniBankHero/>
        <BannerMiniBank/>
        <SoftwareBanking/>
        <WhyMiniBank/>
        <BankingComparison/>
        <PowerfulFeatures/>
        <BankingPartner/>
        <CTABanner/>
        

        <Footer/>

    </Box>
  )
}

export default MiniBankIndex