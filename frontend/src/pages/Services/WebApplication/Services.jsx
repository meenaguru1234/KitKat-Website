import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AppsIcon from '@mui/icons-material/Apps';
import HandymanIcon from '@mui/icons-material/Handyman';
import { color } from '@mui/system';
import Button from '@mui/material/Button';
const Services = () => {
    const cardArray = [
        {
            icon:ComputerIcon,
            heading:"Custom Web Application Development",
            text:"We build tailor-made web applications that perfectly align with your business processes and goals. From idea to deployment, we handle everything.",
            color:"#0749C4"
        },
        {
            icon:BusinessIcon,
            heading:"Enterprise Web Application Development",
            text:"Secure, robust and scalable enterprise applications to manage complex operations across multiple departments and user roles.",
            color:"#4E9D2C"
        },
        {
            icon:PhoneAndroidIcon,
            heading:"Progressive Web App(PWA) Development",
            text:"PWAs that deliver a native app-like experience with offfline access, fast loading and seamless performance on any device.",
            color:"#FE6F1C"
        },
        {
            icon:CloudUploadIcon,
            heading:"SaaS Application Development",
            text:"End-to-end SaaS product development from MVP to full-scale platform with subscribe, manage and grow capabilities.",
            color:"#664BD5"
        },
        {
            icon:AppsIcon,
            heading:"Web Application Integration",
            text:"Integrate third-party APIs. Payment gateways, CRMs and ERP system to unity your business ecosystem.",
            color:"#F73455"
        },
        {
            icon:HandymanIcon,
            heading:"Maintenance & Support Services",
            text:"We provide ongoing maintenance, security updates, performance tuning and support to keep your application running smoothly.",
            color:"#189292"
        },
        
      
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,mt:2}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,textAlign:"center", color:'#0B2E6B', fontSize:'24px'}}>Our Web Application Development Services in Coimbatore</Typography>
                <Box component={"div"} sx={{width:"65px",height:"3px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container sx={{px:{xs:1,lg:10},borderRadius:2}} spacing={2}>
                {
                    cardArray.map((item,index) => {

                        const Icon = item.icon

                        return(
                            <Grid size={{xs:6,sm:4,nd:3,lg:4}} key={index} sx={{border:"1px solid #94A3B8",borderRadius:2,p:0.3}}>
                                <Card  elevation={0} sx={{height:"100%",boxShadow:0}}>
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{height:"100%",display:"flex",alignItems:{xs:"start",lg:"center"},gap:3}}>
                                            <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},gap:2}}>
                                                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",p:3,width:"40px",height:"55px",backgroundColor:item.color,borderRadius:"100%"}}>
                                                    <Icon sx={{color:"white", fontSize:'35px' }}/>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{fontWeight:"bolder", color:'#0B2E6B', fontSize:'16px', }}>{item.heading}</Typography><br />
                                                    <Typography sx={{fontSize:"14px",height:"40%", color:'#0B2E6B'}}>{item.text}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                })
                }
            </Grid>
        </Box>
    );
}

export default Services;
