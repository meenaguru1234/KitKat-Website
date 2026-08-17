import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar } from '@mui/material';
import googleads from "../../../assets/Images/training-digimark/googleads.png"
import googleanalytics from "../../../assets/Images/training-digimark/googleanalytics.png"
import searchconsole from "../../../assets/Images/training-digimark/searchconsole.png"
import semrush from "../../../assets/Images/training-digimark/semrush.png"
import meta from "../../../assets/Images/training-digimark/meta.png"
import hootsuit from "../../../assets/Images/training-digimark/hootsuit.png"
import mailchimp from "../../../assets/Images/training-digimark/mailchimp.png"
import wordpress from "../../../assets/Images/training-digimark/wordpress.png"
import canva from "../../../assets/Images/training-digimark/canva.png"
import hubspot from "../../../assets/Images/training-digimark/hubspot.png"

const TechDigiMarket = () => {

 const softwarelogo = [
    {
        id:1,
      logo: googleads,
      text:"Google Ads"
       },
    {
        id:2,
        logo:googleanalytics,
        text:'Google Analytics'
     },
   
    {
        id:3,
    logo: searchconsole,
    text:'Search Console'
      },
    {
        id:4,
         logo: semrush,
         text:'Semrush'
     },
    {
        id:5,
         logo: meta,
         text:'Meta Ads Manager'
    },
    {
        id:6,
         logo: hootsuit,
         text:"HootSuite"
    },
     {
        id:7,
         logo: mailchimp,
         text:"Mailchimp"
    },
       {
        id:7,
         logo: wordpress,
         text:'WordPress'
    },
         {
        id:8,
         logo:canva,
         text:'Canva'
    },
         {
        id:9,
         logo: hubspot,
         text:'HubSpot'
    },
    
  ];


  return (
 <Grid sx={{ mt:2,px:3}}>

   

        <Box sx={{display:'flex', justifyContent:'center',mb:2 }}>
            <Typography sx={{fontSize:'1.4rem', fontWeight:600, color:'#0d0664', textTransform:'uppercase'}}>
                Tools & platforms You Will Master</Typography>
        </Box>

         <Grid container spacing={3} sx={{px:4,   gap:3, border:'1px solid #edecfd', display:'flex', justifyContent:'space-between', borderRadius:2}}>

       

            {
                softwarelogo.map((item, index)=>{

                    return(
                        <Grid  key={index}  size={{ xs: 12, sm: 6, md: 1 }} sx={{ display:'flex', 
                     justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:2,  position: "relative", 
                    py:2
                        }}>

                           
                           <Box sx={{textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column' ,}}>
                             <Box sx={{  display: "flex", justifyContent: "center", px:2, }}>
                                <Box component='img' src={item.logo} sx={{ width: 40, height: 50, objectFit: "contain", fontSize:'2rem' }} />

                            </Box>
                           
                                <Typography sx={{fontSize:'11px', }}>{item.text}</Typography>


                           </Box>


                        </Grid>
                    )
                })
            }
       


    </Grid>

 </Grid>
  )
}

export default TechDigiMarket