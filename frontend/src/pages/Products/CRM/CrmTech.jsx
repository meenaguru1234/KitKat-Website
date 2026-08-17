import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import groupimg from "../../../assets/Images/product/crm/groupimg.png"
import php from "../../../assets/Images/product/crm/php.png"
import laravel from "../../../assets/Images/product/crm/laravel.jpg"
import node from "../../../assets/Images/product/crm/nodejsimg.png"
import react from "../../../assets/Images/product/crm/react.png"
import mysql from "../../../assets/Images/product/crm/mysql.png"
import postgresql from "../../../assets/Images/product/crm/postgreSql.png"
import aws from "../../../assets/Images/product/crm/aws.png"

import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';



const CrmTech = () => {

    const courselogo= [
        {
            logo:php
        },
         {
            logo:laravel
        },
        {
            logo:node
        },
         {
            logo:react
        },
         {
            logo:mysql
        },
         {
            logo:postgresql
        },
         {
            logo:aws
        }
    ]

      const processSteps = [
         {
            icon:ApartmentOutlinedIcon,
            text:"Secure & Scalable Architecture"
         },
             {
            icon:CloudOutlinedIcon,
            text:"Cloud Hosting & Backups"
         },
            {
            icon:WebhookOutlinedIcon,
            text:"API Integrations"
         },
            {
            icon:TerminalOutlinedIcon,
            text:"Role-based Access Control"
         },   
        ];


  return (
     <Box sx={{ py: { xs: 5, md: 1 }, px: { xs: 2, md: 6 }, bgcolor: "#08044f" , mx:'auto', width:1500, borderRadius:5,
     display:'flex', justifyContent:'space-between', gap:2}}>

 <Grid container sx={{ mx:'auto', width:1400}}>



       <Grid spacing={2} size={{xs:12, md:9}}>
            <Typography sx={{fontSize: {xs: "14px", md: "20px", }, fontWeight: 700, mb: 1.5, color:'white'}}  >
                      Technologies We Use for CRM Development
                    </Typography>   
  
                <Box  sx={{height: "auto",p: {  xs: 2, md: 2.5,  }, px:2,    }}  >
                   
                    <Box sx={{flexDirection:'row' , flexWrap:'nowrap', overflow:'hidden', width:'100%',
                display: "flex",alignItems: "center",}}>
                        {
                            courselogo.map((item,index)=>(
                                <Grid key={index} size={{xs:12}} sx={{ }}>

                                    <Box sx={{  height: 100,  width: 130,  minWidth: 130,  borderRadius: 3, bgcolor: "white", display: "flex",
                                        alignItems: "center",   justifyContent: "center",   overflow: "hidden",}}>
                                    <Box component={'img'} src={item.logo} sx={{    width: "85%",height: "85%", objectFit: "contain",}} />

                                    </Box>


                                </Grid>
                            ))
                        }
                    </Box>
             
                
  
              </Box>
    </Grid>

      <Grid size={{xs:12,sm:12, md:3}} sx={{borderRadius:5, }}>

                    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',width:'100%', 
                        height:'100%'}}>

                                
                 
             <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row', md:'column'},justifyContent: "center", 
             alignItems:'flex-start', gap: { xs: 6, md: 3, lg:1 }, px:1 }}>

    {
        processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
                <Box key={index}  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , gap:2}}>

                    {/* circle + arrow wrapper */}
                    <Box sx={{ position: 'relative', display: 'flex', }}>
                        <Box sx={{}}>
                            <Icon sx={{ fontSize: 32, color: 'white' }} />
                        </Box>

                      
                    </Box> <Typography sx={{ fontWeight: 500, color: 'white', fontSize: "0.85rem" , textAlign:'center'}}>
                            {step.text}
                        </Typography>
                    {/* </Box> */}

                </Box>
            );
        })
    }

</Box>              


                    </Box>
                        
        


                </Grid>


     

 </Grid>
    
    </Box>
  )
}

export default CrmTech