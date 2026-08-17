import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import GradingIcon from '@mui/icons-material/Grading';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const Process = () => {

    const processArray = [
        {
            icon:ContentPasteSearchIcon,
            color:"#055DD8",
            title:"1.Discovery & Planing",
            text:"1.Discovery & Planing"
        },
        {
            icon:BrandingWatermarkIcon,
            color:"#FE8240",
            title:"2.Design & Prototype",
            text:"Wiredframes & prototypes for your approval"
        },
        {
            icon:ScreenshotMonitorIcon,
            color:"#5EA936",
            title:"3.Development",
            text:"Agile development with regular updates"
        },
        {
            icon:GradingIcon,
            color:"purple",
            title:"4.Testing & Review",
            text:"Regular testing for bug-free delivery"
        },
        {
            icon:RocketLaunchIcon,
            color:"#055DD8",
            title:"5.Launch & Support",
            text:"Deploying your solution to the world"
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{xs:1,lg:8}}}>
                <Box sx={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                    <Typography variant='h5' sx={{color:'#071B52', fontWeight:600, justifyContent:'center', px:50}}>Our Website Design and Development Process</Typography>
                  <br /><Box component={"div"} sx={{width:"75px",height:"2px",backgroundColor:"#0749C4"}}></Box>
                    </Box>
                <Grid size={12} sx={{display:"flex",justifyContent:"center",ps:3,pt:3,borderTop:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Box sx={{display:"flex",justifyContent:"center",mt:{xs:1,md:0}}} key={index}>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:0.5,lg:1}}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",border:`1px solid ${item.color}`,p:1.5,borderRadius:50}}>
                                                <Icon sx={{color:item.color,fontSize:'40px'}}/>
                                            </Box>
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
                                                        display:{xs:"none",md:"block"},
                                                        mt: 1.5,
                                                        visibility: index === processArray.length - 1 ? "hidden" : "visible"
                                                    }}
                                                    />
                                            )
                                        }
                                    </Box> 
                                )
                            })
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Process;
