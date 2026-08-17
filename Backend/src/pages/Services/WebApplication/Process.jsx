import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import MarginIcon from '@mui/icons-material/Margin';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SouthIcon from '@mui/icons-material/South';

const Process = () => {

    const processArray = [
        {
            icon:ContentPasteSearchIcon,
            color:"#055DD8",
            title:"1.Requirement Analysis",
            text:"We understand your goals, users and worldfows to deline the right solution"
        },
        {
            icon:MarginIcon,
            color:"#5EA936",
            title:"2.UI/UX Design",
            text:"We design intuitive, responsive interfaces that offer great user experience."
        },
        {
            icon:IntegrationInstructionsIcon,
            color:"#FE8240",
            title:"3.Development",
            text:"Our developers build clean, scalable and secure applications susing the latest technologies."
        },
        {
            icon:ContentPasteSearchIcon,
            color:"#6851D8",
            title:"4.Testing & QA",
            text:"We perform rigorous testing to ensure quality, security and performance."
        },
        {
            icon:RocketLaunchOutlinedIcon,
            color:"#07419E",
            title:"5.Deployment & Support",
            text:"We deploy your application and provide ongoing support for continuous growth."
        }
    ]
    return (
        <Box sx={{mt:4}}>
            <Grid container sx={{px:{xs:1,lg:8}}}>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center", width:'100%'}}>
                    <Typography component={'h3'} variant="h3" sx={{fontSize:{xs: "1.8rem", lg: "1.5rem" },py:2, fontWeight:"700",color:'#0B2E6B'}}>Our Web Application Development Process</Typography>
                    <Box component={"div"} sx={{width:"65px",height:"3px",backgroundColor:"#0749C4"}}></Box>
                </Box>
                <Grid size={12} sx={{display:"flex",justifyContent:"center",ps:3,pt:3,borderTop:"1px solid #EBF0F3",borderRight:"1px solid #EBF0F3"}}>
                              
                    <Box sx={{display:"flex",flexDirection:{xs:"column",md:"row"}}}>
                        {
                            processArray.map((item,index) => {
                                const Icon = item.icon

                                return(
                                    <Box sx={{display:"flex",justifyContent:"center",mt:{xs:1,md:0}}} key={index}>
                                        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:{xs:0.5,lg:1}}}>
                                            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",border:`2px solid ${item.color}`,p:1.5,borderRadius:50}}>
                                                <Icon sx={{color:item.color,fontSize:'40px'}}/>
                                            </Box>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"600"}}>{item.step}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",fontWeight:"650", color:'#0B2E6B'}}>{item.title}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"13px", color:'#0B2E6B'}}>{item.text}</Typography>
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
