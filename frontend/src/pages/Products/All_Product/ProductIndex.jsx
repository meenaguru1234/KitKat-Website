import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../../components/Footer'
import HeroProduct from './HeroProduct'
import SmartSolution from './SmartSolution'
import WhyChoose from './WhyChoose'
import ReadyTransform from './ReadyTransform'


const ProductIndex = () => {
  return (
   

    <Box>

      <HeroProduct/>
      <SmartSolution/>
      <WhyChoose/>
      <ReadyTransform/>
        <Footer/>

    </Box>
  )
}

export default ProductIndex