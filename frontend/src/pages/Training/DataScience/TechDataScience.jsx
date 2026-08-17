import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import git from "../../../assets/Images/training-python/git.png"
import python from "../../../assets/Images/training-datascience/python.png"
import numpy from "../../../assets/Images/training-datascience/numpy.png"
import pandas from "../../../assets/Images/training-datascience/pandas.png"
import matplotlib from "../../../assets/Images/training-datascience/matplotlib-removebg-preview.png"
import seaborn from "../../../assets/Images/training-datascience/seaborn.png"
import scikitlearn from "../../../assets/Images/training-datascience/scikitlearn.png"
import sql from "../../../assets/Images/training-datascience/sql.png"
import jupyter from "../../../assets/Images/training-datascience/jupiter.png"
import tableau from "../../../assets/Images/training-datascience/tablue.png"

const TechDataScience = () => {

 const softwarelogo = [
    {
        id:1,
      logo: python,
      text:"Python"
       },
    {
        id:2,
        logo:numpy,
        text:'NumPy'
     },
   
    {
        id:3,
    logo: pandas,
    text:'Pandas'
      },
    {
        id:4,
         logo: matplotlib,
         text:'Matplotlib'
     },
    {
        id:5,
         logo: seaborn,
         text:'Seaborn'
    },
    {
        id:6,
         logo: scikitlearn,
         text:"Scikit-learn"
    },
     {
        id:7,
         logo: sql,
         text:"SQL"
    },
       {
        id:7,
         logo: jupyter,
         text:'Jupyter'
    },
         {
        id:8,
         logo:tableau,
         text:'Tableau'
    },
         {
        id:9,
         logo: git,
         text:'Git & GitHub'
    },
    
  ];


  return (
 <Grid sx={{ mt:2,px:3}}>

   

        <Box sx={{display:'flex', justifyContent:'center',mb:2 }}>
            <Typography sx={{fontSize:'1.4rem', fontWeight:600, color:'#0f0675', textTransform:'uppercase'}}>Technoloagies You Will Master</Typography>
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
                                <Box component='img' src={item.logo} sx={{ width: 50, height: 50, objectFit: "contain", fontSize:'2rem' }} />

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

export default TechDataScience