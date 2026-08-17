import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import conferenceimg from '../../../assets/Images/training-alltrainng/conferenceimg.jpg'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import DoneIcon from '@mui/icons-material/Done';

const WhyTraining = () => {


    const whykikat = [
        {
            icon:DoneIcon,
            text:'Trainers are working software engineers and project leads.'

        },
          {
            icon:DoneIcon,
            text:'Live project exposure on real client assignments.'

        },
          {
            icon:DoneIcon,
            text:'Small batch sizes for one-to-one mentoring.'

        },
          {
            icon:DoneIcon,
            text:'Milestone-based reviews like real software delivery.'

        },
          {
            icon:DoneIcon,
            text:'Practical approach that builds confidence and job readiness.'

        },
   
    ]




    return (
        <Box sx={{mt:4,px:{xs:1,lg:8}}}>
            <Box sx={{display:'flex', justifyContent:'center', }}>
                 <Typography component={'h1'} variant='h5' sx={{fontWeight:600, color:'#071B52'}}>
                    Why KitKat Is the Best Software Training Institute in Coimbatore
                 </Typography>
                 {/* <Box sx={{color:' #ee5f0c', width:'75px', height:'4px'}}/> */}
                       
            </Box>
            <Grid container sx={{border:'1px solid #c5c7c8fc', borderRadius:5, bgcolor:'#e8f6f9a4',p:3}}>
              
                <Grid size={{xs:12,md:6}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2,p:4,}}>
                       
                        <Grid container spacing={1}>
                            {
                                whykikat.map((item, index)=>{
                                    const Icon = item.icon

                                    return(
                                    <Grid key={index} size={{xs:4, md:12}} sx={{display:'flex', justifyContent:'flex-start', 
                                    flexDirection:'row', gap:1, mb:'0.7rem'}}>

                                        <Box sx={{height:17, width:17, border:'1px solid #ee5f0c',  display:'flex',justifyContent:'center',
                                            bgcolor:'#ee5f0c',borderRadius:20, gap:2, m:0.5}}>
                                            <Icon sx={{fontSize:15, color:'white',  }}/>
                                        </Box> 
                                        <Typography sx={{fontSize:16, color:'#071B52'}}>{item.text}</Typography>



                                    </Grid>
                                    )
                                })
                            }

                            
                        </Grid>

                    </Box>
                </Grid>

                  <Grid size={{xs:12,md:6}} sx={{height:'100%', width:'100%', display:'flex', justifyContent:'center', }}>
                    <Box component={'img'} src={conferenceimg} sx={{ height:'100%', width:'75%', borderRadius:7, objectFit:'cover'}}/>
                </Grid>
              
            </Grid>
        </Box>
    );
}

export default WhyTraining;
