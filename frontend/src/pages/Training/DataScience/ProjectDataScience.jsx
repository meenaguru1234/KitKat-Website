import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';

import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';
import MovieIcon from '@mui/icons-material/Movie';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HouseIcon from '@mui/icons-material/House';

const ProjectDataScience = () => {

   const service = [
        { 
            icon: BarChartIcon, 
            label: "Sales Analysis Dashboard", 
            color: "#1976d2", 
            desc: "Analyze sales data and build interactive dashboards for business insights." 
        },
        { 
            icon: GroupsIcon, 
            label: "Customer Segmentation", 
            color: "#00b83d", 
            desc:"Group customers using clustering techniques and improve marketing strategies." 
        },
        { 
            icon: MovieIcon, 
            label: "Movie Recommendation System", 
            color: "#8e44ad" , 
            desc:"Build a recommendation system using machine learning and collaborative filtering."
        },
        { 
            icon: CreditCardIcon, 
            label: "Credit Card Fraud Detection", 
            color: "#e67e22", 
            desc:"Detect fraudulent transactions using classification algorithms and real datasets." 
        },
        { 
            icon: HouseIcon, 
            label: "House Price Prediction", 
            color: "#e91e63" , 
            desc:"Predict house prices using regression models and feature engineering."
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={2} sx={{}}>

         <Box sx={{width:'100%',  gap: 2, mb:2, flexWrap: "wrap", textAlign: "center" }}>
              
                <Typography variant="h3" sx={{ fontWeight: 700,textTransform:'uppercase', color: "#071B52", fontSize: { xs: "1rem", sm: "1rem", md: "1.4rem" } }}>
               REAL-WORLD PROJECTS YOU WILL BUILD
                </Typography>
               
              </Box>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%', }}>
                 <Grid container  justifyContent="center">
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2.3 }} sx={{display:'flex',justifyContent:'center', width:'100%'}} >
                                 
                               <Box sx={{height:'100%', width:'220px', gap:4, display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:0, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                 
                               <Box  sx={{   display: "flex",  alignItems: "center",  justifyContent: "center",   }}>
                                    <Icon sx={{  color: item.color,  fontSize: 50, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: '#071B52', fontSize:'16px', textAlign: "center" , lineHeight:1.5,}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, }}>
                                      {item.desc}
                                 </Typography>
                              

                            </Box>
                               </Box>
                            </Grid>
                            </>
                        )

                    })
                
                }

                   </Grid>
            </Grid>

        </Grid>

        
    </Box>
  )
}

export default ProjectDataScience