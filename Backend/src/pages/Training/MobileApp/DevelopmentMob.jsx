import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import android from "../../../assets/Images/Android.png"
import flutter from "../../../assets/Images/Flutter.png"
import react from "../../../assets/Images/ReactLogo.png"
import ios from "../../../assets/Images/ios.png"
import firebase from "../../../assets/Images/Firebase.png"
import playstore from "../../../assets/Images/playstore.jpg"
import { Avatar } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';




const DevelopmentMob = () => {

 const softwareArray = [
    {
        id:1,
      logo: android,
      title: "Android",
      title1: "Development",
      text: "Web, desktop and mobile applications built for your special business needs",
    },
    {
        id:2,
     logo: flutter,
      title: "Flutter",
      title1: "Development",
      text: "Integrated ERP  systems to manage finance, inventory, HR, Production and more",
    },
   
    {
        id:3,
    logo: react,
      title: "React Native",
      title1: "Development",
      text: "CRM Solutions that streamline sales, track leads and improve customer relations",
    },
    {
        id:4,
         logo: ios,
      title: "iOS",
      title1: "Development",
      text: "Automate approvals, tasks and business processes to increase efficiency",
    },
    {
        id:5,
         logo: firebase,
      title: "Firebase &",
      title1: "APIs",
      text: "Robust enterprise solutions with role-based access, audits and integration",
    },
    {
        id:6,
         logo: playstore,
      title: "Publich",
      title1: "Your App",
      text: "Focused business apps likes inventory, scheduling, dashboards and more",
    },
    
  ];


  return (
 <Grid sx={{ mt:2,}}>

   

        <Box sx={{display:'flex', justifyContent:'center',mb:2 }}>
            <Typography sx={{fontSize:'1.5rem', fontWeight:600, color:'#0f0675'}}>What You Will Learn in Our Mobile App Development Course</Typography>
        </Box>

         <Grid container spacing={3} sx={{px:4,   gap:3,}}>

       

            {
                softwareArray.map((item, index)=>{

                    return(
                        <Grid  key={item.id}  size={{ xs: 12, sm: 6, md: 2 }} sx={{border:'1px solid #ebf2f3', display:'flex',flexDirection:'column',
                     justifyContent:'space-evenly', alignItems:'center', textAlign:'center', borderRadius:2,  position: "relative", 
                    //  borderRight: index!= softwareArray.length - 1 ? "<NavigateNextIcon/>":"none"
                        }}>

                              {index !== softwareArray.length - 1 && (
                                              <Box
                                                sx={{
                                                  position: "absolute",
                                                  top: "50%",
                                                  right: "-29px",
                                                  transform: "translateY(-50%)",
                                            
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                //   zIndex: 10,
                                                }}
                                              >
                                                <NavigateNextIcon sx={{ color: "#6356f1", fontSize: 30 }} />
                                              </Box>
                                            )}

                            <Box sx={{      p: 2,  display: "flex", justifyContent: "center",  mb: 2,}}>
                                <Box component='img' src={item.logo} sx={{ width: 100, height: 60, objectFit: "contain", }} />
                            </Box>
                            <Box>
                                <Typography sx={{fontSize:'1.1rem', fontWeight:600, color:'#0f0675', }}>{item.title}</Typography>
                                <Typography sx={{fontSize:'1.1rem', fontWeight:600, color:'#0f0675',mb:1}}>{item.title1}</Typography>

                                <Typography sx={{fontSize:'1rem', fontWeight:500, color:'#070330',mb:1}}>{item.text}</Typography>

                            </Box>





                        </Grid>
                    )
                })
            }
       


    </Grid>

 </Grid>
  )
}

export default DevelopmentMob