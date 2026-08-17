import Box from '@mui/material/Box'
import React from 'react'
import Footer from "../../../components/Footer"
import MedicalBillingSolutions from './MedicalBillingSolutions'
import MedicalBillingDetails from './WhyMedicalBilling'
import FeatureMedicalBill from './FeatureMedicalBill'
import DevelopmentMediBill from './DevelopmentMediBill'
import MedicalBillingIndustries from './MedicalBilling'
import WhyMedicalBilling from './WhyMedicalBilling'
import IndustryMediBill from './IndustryMediBill'
import BenifitsMediBill from './BenifitsMediBill'
import MedicalBilling from './MedicalBilling'
import Modernize from './Modernize'
import MedicalBillHero from './MedicalBillHero'


const MedicalbillIndex = () => {
  return (
    
    <Box>
        <MedicalBillHero/>
        <Modernize/>
        <MedicalBillingSolutions/>
        <FeatureMedicalBill/>
        <DevelopmentMediBill/>
        <WhyMedicalBilling/>
        <IndustryMediBill/>
        <BenifitsMediBill/>
        <MedicalBilling/>

        <Footer/>

    </Box>
  )
}

export default MedicalbillIndex