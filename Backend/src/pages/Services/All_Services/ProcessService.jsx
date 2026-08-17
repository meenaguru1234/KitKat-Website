import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

import GroupsIcon from '@mui/icons-material/Groups';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const ProcessService = () => {

    const processArray = [
        {
            number:'01',
            icon:GroupsIcon,
            title:"Requirement Analysis",
            text:"We understand your business needs and project goals."
        },
        {
            number:'02',
            icon:StickyNote2Icon,
            title:"Planning & Strategy",
            text:"We plan the best strategy and prepare a roadmap."
        },
        {
            number:'03',
            icon:DesignServicesIcon,
            title:"Design & Development",
            text:"Our experts design and develop with clean code and modern technologies."
        },
        {
            number:'04',
            icon:FactCheckIcon,
            title:"Testing & Quality Check",
            text:"We test everything thoroughly to ensure perfect performance."
        },
        {
            number:'05',
            icon:RocketLaunchIcon,
            title:"Deployment & Launch",
            text:"We deploy your project and make it live for your users."
        },
        {
            number:'06',
            icon:HeadsetMicOutlinedIcon,
            title:"Support & Maintenance",
            text:"We provide ongoing support and maintenance for your success."
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{xs:1,lg:8}}}>
                <Box sx={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%', gap:2}}>
                    <Typography variant='h5' sx={{color:'#071B52', fontWeight:600, justifyContent:'center', }}>
                        Our <Box component={"span"} sx={{color:'#0d4bf4'}}>Process</Box></Typography>
                    <Typography>A simple and effective process to deliver the best results.</Typography>
                    </Box>
                <Grid size={12} sx={{display:"flex",justifyContent:"center",ps:3,pt:3,borderTop:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}, width:1600}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Grid sx={{display:"flex",justifyContent:"center",mt:{xs:1,md:0},}} 
                                    key={index} size={{xs:12, md:6}}>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:0.5,lg:1}}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",border:'1px solid #0d4bf4',p:1.5,borderRadius:50}}>
                                                <Icon sx={{color:'#0d4bf4',fontSize:'40px'}}/>
                                            </Box>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600", color:'#0d4bf4'}}>{item.number}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600", color:'#071B52'}}>{item.step}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600", color:'#071B52'}}>{item.title}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"13px"}}>{item.text}</Typography>
                                        {
                                            index !== processArray.length && (
                                                <SouthIcon
                                                    sx={{
                                                        display:{md:"none"},
                                                        visibility: index === processArray.length - 1 ? "hidden" : "visible"
                                                    }}
                                                    />
                                            )
                                        }
                                        </Box>
                                        {
                                            index !== processArray.length && (
                                                <EastOutlinedIcon
                                                    sx={{
                                                        color:'#0d4bf4',
                                                        display:{xs:"none",md:"block"},
                                                        mt: 1.5,
                                                        visibility: index === processArray.length - 1 ? "hidden" : "visible"
                                                    }}
                                                    />
                                            )
                                        }
                                    </Grid> 
                                )
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProcessService;
