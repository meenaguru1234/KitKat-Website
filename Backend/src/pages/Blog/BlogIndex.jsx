import { Box } from '@mui/material'
import React from 'react'
import Footer from '../../components/Footer'
import BlogHero from './BlogHero'
import WhyBlog from './WhyBlog'
import CultureBlog from './CultureBlog'
import OpenPositions from './OpenPositions'
import HowWeHire from './HowWeHire'
import CTABannerBlogs from './CTABannerBlogs'
import WhatOurTeamSays from './WhatOurTeamSays'

const BlogIndex = () => {
  return (
    <Box>

        <BlogHero/>
        <WhyBlog/>
        <CultureBlog/>
        <OpenPositions/>
        <HowWeHire/>
        <WhatOurTeamSays/>
        <CTABannerBlogs/>
        <Footer/>
    </Box>
  )
}

export default BlogIndex