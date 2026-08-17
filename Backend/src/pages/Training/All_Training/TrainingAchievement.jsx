import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { Avatar, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import training1 from "../../../assets/Images/training-alltrainng/training1.jpg"
import training2 from "../../../assets/Images/training-alltrainng/training2.jpg"
import certificate from "../../../assets/Images/training-alltrainng/certificate.jpg"
import training3 from "../../../assets/Images/training-alltrainng/training3.jpg"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const TrainingAchievement = () => {

 const trainingdetail = [
    {
        id:1,
      img: training1,
      text:"Software Development Training with Live Projects",
      desc:"Work on real client projects, follow agile practices, code reviews and deployment pipelines. Graduate with a portfolio of shipped software features."
       },
    {
        id:2,
        img:training2,
        text:'Industrial & Internship Training Programmes',
        desc:"1 to 6 months internship training for engineering students with real project responsibilities and academically recognised certificates."
     },
   
    {
        id:3,
    img: certificate,
    text:'Software Certification Courses',
    desc:"Get certificates detailing your skills and projects. Prepare for industry-recognised certifications like AWS, Google and more."
      },
    {
        id:4,
         img: training3,
         text:'Placement Training Institute Support',
         desc:"Resume building, mock interviews, communication coaching and direct referrals to our client companies and hiring partners."
     },
   
       
  
  ];


  return (
 <Grid sx={{px:3}}>

   

     
         <Grid container spacing={1} sx={{    mx: "auto", width: "95%",maxWidth: "1500px", gap: 3, isplay: "flex",  justifyContent: "space-evenly",   borderRadius: 2,p: 2,}}>

       

            {
                trainingdetail.map((item, index)=>{

                    return(
                        <Grid  key={index}  size={{ xs: 12, sm: 6, md:2.5}} sx={{ display:'flex', 
                     justifyContent:'center', alignItems:'center', textAlign:'center', borderRadius:2,  position: "relative", 
                   border:'1px solid #edecfd'         }}>

                           
                           <Box sx={{textAlign:'center', display:'flex', justifyContent:'center', flexDirection:'column' ,}}>
                             <Box sx={{  display: "flex", justifyContent: "center", px:2, mb:2, height:'180px',
                                 }}>
                                <Box component='img' src={item.img} sx={{ width: 270, height:180, objectFit: "cover", fontSize:'2rem', borderRadius:2 }} />

                            </Box>
                           
                                <Typography sx={{fontSize:'18px',fontWeight:550, px:3, mb:2, color:'#080d49' }}>{item.text}</Typography>
                                <Typography sx={{fontSize:'15px', px:3, textAlign:'left', color:'#080d49' }}>{item.desc}</Typography>
                                 <Button endIcon={<ArrowRightAltIcon/>} sx={{textTransform:'none', color:'#f85402', justifyContent:'left',
                                    px:3, fontStyle:'italic'
                                 }}>
                                 Learn More</Button>


                           </Box>
                           


                        </Grid>
                    )
                })
            }
       


    </Grid>

    
 </Grid>
  )
}

export default TrainingAchievement