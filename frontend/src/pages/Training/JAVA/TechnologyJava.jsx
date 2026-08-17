import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import corejava from "../../../assets/Images/training-python/java.png"
import advancedjava from "../../../assets/Images/training-python/advancedjava.png"
import spring from "../../../assets/Images/training-python/springframework.png"
import springboot from "../../../assets/Images/training-python/springboot.png"
import hibernate from "../../../assets/Images/training-python/hibernate.png"
import mysql from "../../../assets/Images/training-python/sql.png"
import jdbc from "../../../assets/Images/training-python/jdbc.png"
import servlet from "../../../assets/Images/training-python/java.png"
import maven from "../../../assets/Images/training-python/maven.png"
import git from "../../../assets/Images/training-python/git.png"

const TechnologyJava = () => {

 const softwarelogo = [
    {
        id:1,
      logo: corejava,
      text:"Core Java"
       },
    {
        id:2,
        logo:advancedjava,
        text:'Advanced Java'
     },
   
    {
        id:3,
    logo: spring,
    text:'Spring Framework'
      },
    {
        id:4,
         logo: springboot,
         text:'Spring Boot'
     },
    {
        id:5,
         logo: hibernate,
         text:'Hibernate'
    },
    {
        id:6,
         logo: mysql,
         text:"My Sql"
    },
     {
        id:7,
         logo: jdbc,
         text:"JDBC"
    },
       {
        id:7,
         logo: servlet,
         text:'Servlets & JSP'
    },
         {
        id:8,
         logo:maven,
         text:'Maven'
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

export default TechnologyJava