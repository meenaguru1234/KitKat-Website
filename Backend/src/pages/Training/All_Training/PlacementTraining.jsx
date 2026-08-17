import React from 'react'
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import {  FaChevronRight } from "react-icons/fa";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import avatar1 from "../../../assets/Images/training-alltrainng/boyimg2.jpg"
import avatar2 from "../../../assets/Images/training-alltrainng/girlimg1.jpg"
import avatar3 from "../../../assets/Images/training-alltrainng/girlimg2.jpg"
import avatar4 from "../../../assets/Images/training-alltrainng/girlimg1.jpg"

import cognizant from "../../../assets/Images/training-alltrainng/cognizant.png"
import infosys from "../../../assets/Images/training-alltrainng/infosys.png"
import zoho from "../../../assets/Images/training-alltrainng/zoho.png"
import wipro from "../../../assets/Images/training-alltrainng/wipro.png"
import tcs from "../../../assets/Images/training-alltrainng/tcs.png"
import accenture from "../../../assets/Images/training-alltrainng/accenture.png"

const PlacementTraining = () => {

    const placement = [
        {
            number:'450+',
            text:'Students Placed'
        },
         {
            number:'100+',
            text:'Hiring Partners'
        },
         {
            number:'10+',
            text:'Years of Experience'
        },
         {
            number:'95%',
            text:'Placement Assistance'
        }

    ]


    const placedstudent = [
        {
            avatar:avatar1,
        },
         {
            avatar:avatar2,
        },
         {
            avatar:avatar3,
        },
         {
            avatar:avatar4,
        },
         {
            avatar:avatar1,
        },
         {
            avatar:avatar2,
        },
         {
            avatar:avatar3,
        },
         {
            avatar:avatar4,
        },
         {
            avatar:avatar1,
        },
         {
            avatar:avatar2,
        },
         {
            avatar:avatar3,
        },
    ]

    const companylogo = [
        {
            logo: tcs
        },
          {
            logo: zoho
        },
          {
            logo: infosys
        },
          {
            logo: accenture
        },
          {
            logo: cognizant
        },
          {
            logo: wipro
        },
    ]

  return (
    
    
          <Box sx={{    position: "relative", bgcolor: "#071B52", width:'95%',mx:'auto',borderRadius:2, overflow: "hidden",}}>
  
            <Grid container spacing={2} sx={{px:3, py:2}}>

            <Grid size={{xs:12, md:2}} sx={{}}>

            <Box sx={{height:"100%",display:"flex",flexDirection:"column",  }}>

                <Typography sx={{color:'white', fontSize:'1.5rem'}}>Real Training.</Typography>
                <Typography sx={{color:'white', fontSize:'1.5rem'}}>Real Projects.</Typography>
                <Typography sx={{color:'#fc830a', fontSize:'1.5rem'}}>Real Placements.</Typography>

            </Box>
                
                
                
            </Grid>   



             <Grid size={{xs:12, md:4}} sx={{}}>

                <Box sx={{display:'flex', flexDirection:'row', }}>
                    {
                        placement.map((item, index)=>{
                            return(
                                <Grid key={index} size={{xs:6, md:8}} sx={{border:'1px solid #e7e5e5', display:'flex', gap:2, flexDirection:'column', 
                                alignItems:'center', borderRadius:2,m:0.8}}>

                                    <Typography sx={{color:'white', textAlign:'center',fontSize:'1.7rem'}}>{item.number}</Typography>
                                    <Typography sx={{color:'white', textAlign:'center',fontSize:'0.8rem'}}>{item.text}</Typography>


                                </Grid>
                            )
                        })
                    }

                </Box>

                    <Box sx={{mt:2, m:1}}>
                        <Button sx={{bgcolor:'#fc830a', color:'white', fontSize:'1rem', textTransform:'none', px:2, fontWeight:550}}>
                        Download Placement Report
                        </Button>
                        </Box>

             </Grid>



             <Grid size={{xs:12, md:6}} sx={{}}>
    <Box sx={{display:'flex', flexDirection:'row', }}>
                    {
                        placedstudent.map((item, index)=>{
                            return(
                                <Grid key={index} size={{xs:6, md:8}} sx={{border:'1px solid #e7e5e5', display:'flex', gap:2, 
                                    flexDirection:'column', alignItems:'center', borderRadius:1, }}>

                                   <Box component="img" src={item.avatar}  alt="placed student"
                                     sx={{ width: "48px",  height: "42px",objectFit: "cover",  }}/>

                                </Grid>
                            )
                        })
                    }

                </Box>

                    <Box sx={{mt:2, display:'flex', justifyContent:'center'}}>
                        <Typography sx={{color:'white', fontSize:18}}>Some of our placed students</Typography>
                        </Box>


                        <Box sx={{display:'flex', flexDirection:'row',  px:2, borderRadius:2,bgcolor:'white',py:1,
                            justifyContent:'center', width:'95%', m:'auto'}}>
                    {
                        companylogo.map((item, index)=>{
                            return(
                                <Grid key={index} size={{xs:6, md:2}} sx={{ display:'flex', gap:2, flexDirection:'column', 
                                alignItems:'center', width:'16%' }}>

                            <Box component="img" src={item.logo}  alt="company logo"
                             sx={{  width: "90px", height: "50px",objectFit: "contain", }}  />

                                </Grid>
                            )
                        })
                    }

                </Box>

             </Grid>



            </Grid>
</Box>

  )
}

export default PlacementTraining