import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import kotlin from "../../../assets/Images/kotlin.png"
import dart from "../../../assets/Images/dart.png"
import flutter from "../../../assets/Images/fluttertext.png"
import reactnative from "../../../assets/Images/reactnative.png"
import swift from "../../../assets/Images/swift.png"
import firebase from "../../../assets/Images/firebasetext.png"
import androidstudio from "../../../assets/Images/androidstudio.png"

import { Avatar } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';




const TechMob = () => {

 const softwarelogo = [
    {
        id:1,
      logo: kotlin,
       },
    {
        id:2,
        logo:dart,
     },
   
    {
        id:3,
    logo: flutter,
      },
    {
        id:4,
         logo: reactnative,
     },
    {
        id:5,
         logo: swift,
    },
    {
        id:6,
         logo: firebase,
    },
     {
        id:7,
         logo: androidstudio,
    },
    
  ];


  return (
 <Grid sx={{ mt:2,px:3}}>

   

        <Box sx={{display:'flex', justifyContent:'center',mb:2 }}>
            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#0f0675'}}>Technoloagies You Will Master</Typography>
        </Box>

         <Grid container spacing={3} sx={{px:4,   gap:3, border:'1px solid #edecfd', display:'flex', justifyContent:'space-between', borderRadius:2}}>

       

            {
                softwarelogo.map((item, index)=>{

                    return(
                        <Grid  key={item.id}  size={{ xs: 12, sm: 6, md: 1 }} sx={{ display:'flex', 
                     justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:2,  position: "relative", 
                    
                        }}>

                           
                            <Box sx={{  display: "flex", justifyContent: "center", }}>
                                <Box component='img' src={item.logo} sx={{ width: 160, height: 100, objectFit: "contain", fontSize:'2rem' }} />
                            </Box>
                           




                        </Grid>
                    )
                })
            }
       


    </Grid>

 </Grid>
  )
}

export default TechMob