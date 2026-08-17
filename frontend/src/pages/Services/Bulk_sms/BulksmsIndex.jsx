import { Box } from '@mui/material'
import React from 'react'
import Faq from './FaqSms'
import SmsHero from './SmsHero'
import LaunchSms from './LaunchSms'
import WhyKitkat from './WhyKitkat'
import SmsService from './SmsService'
import TalkSms from './TalkSms'
import SmsIndustry from './SmsIndustry'
import Benifits from './Benifits'
import FaqSms from './FaqSms'
import Footer from '../../../components/Footer'

const BulksmsIndex = () => {
  return (
 
    <Box sx={{bgcolor:'rgba(242, 247, 248, 0.87)'}}>
     
        <SmsHero/>
        {/* <LaunchSms/> */}
        <WhyKitkat/>
        <SmsService/>
        <TalkSms/>
        <SmsIndustry/>
        <Benifits/>
        <FaqSms/>
        <Footer/>

    </Box>
  )
}

export default BulksmsIndex