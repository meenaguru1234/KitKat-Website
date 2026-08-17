import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import whychooseimg from '../../../assets/Images/service-allservice/why_choose.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import DoneIcon from '@mui/icons-material/Done';

const WhyChoose = () => {


    const whykikat = [
        {
            icon:DoneIcon,
            text:'Expert & Experienced Team'

        },
          {
            icon:DoneIcon,
            text:'Latest Technologies'

        },
          {
            icon:DoneIcon,
            text:'On-Time Project Delivery'

        },
          {
            icon:DoneIcon,
            text:'24/7 Support & Maintenance'

        },
          {
            icon:DoneIcon,
            text:'Affordable Pricing'

        },
          {
            icon:DoneIcon,
            text:'100% Client Satisfaction'

        }
    ]




    return (
        <Box sx={{mt:4,px:{xs:1,lg:8}}}>
            <Grid container sx={{border:'1px solid #e8f6f9a4', borderRadius:5, bgcolor:'#e8f6f9a4',}}>
                <Grid size={{xs:12,sm:6,md:5}} sx={{height:'100%', width:'100%', }}>
                    <Box component={'img'} src={whychooseimg} sx={{borderTopLeftRadius:{xs:0,lg:"16px"},
                    borderBottomLeftRadius:{xs:0,lg:"16px"}, objectFit:'cover'}}/>
                </Grid>
                <Grid size={{xs:12,sm:6,md:7}}>
                    <Box sx={{display:"flex",flexDirection:"column",gap:2,p:4,}}>
                        <Typography component={'h1'} variant='h5' sx={{fontWeight:600, color:'#071B52'}}>
                            Why Choose <Box component={"span"} sx={{color:'#0c48ee'}}>KitKat?</Box></Typography>
                        <Typography sx={{color:'#071B52'}}>We combine technology, creativity and strategy to deliver solutions that help your business stay ahead of the competition.</Typography>
                        
                        <Grid container spacing={1}>
                            {
                                whykikat.map((item, index)=>{
                                    const Icon = item.icon

                                    return(
                                    <Grid key={index} size={{xs:4, md:6}} sx={{display:'flex', justifyContent:'flex-start', 
                                    flexDirection:'row', gap:1, mb:'0.7rem'}}>

                                        <Box sx={{height:17, width:17, border:'1px solid #0c48ee',  display:'flex',justifyContent:'center',
                                            bgcolor:'#0c48ee',borderRadius:20, gap:2, m:0.5}}>
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
              
            </Grid>
        </Box>
    );
}

export default WhyChoose;
