import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaRegFileCode } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";
import { IoBusinessOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { bgcolor, border, borderRadius, color, height } from '@mui/system';
import Button from '@mui/material/Button';
import { CommonButton } from '../../../StyledComponents/CommonButton';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';


const WebDesignAndDevelopmentService = () => {
    const cardArray = [
        {
            icon:FaLaptopCode,
            heading:"Responsive Website Design",
            text:"Mobile-first designs that adapt perfectly across all devices for a seamless user experience.",
            color:"#0749C4",
            bgcolor:"#9fbdf3"

        },
        {
            icon:FaRegFileCode,
            heading:"Custom Website Development",
            text:"Bespoke websites coded to match your business processes, branding and customer journey.",
            color:"#FE6F1C",
            bgcolor:"#eaa176"

        },
        {
            icon:FaWordpress,
            heading:"WordPress Website Development",
            text:"Secure, scalable WordPress websites with custom themes, plugins and speed optimisation.",
            color:"#4E9D2C",
            bgcolor:"#b0f095"

        },
        {
            icon:GrNotes,
            heading:"CMS Website Development",
            text:"Easy-to-manage websites that let you update content, images and offers independently.",
            color:"#664BD5",
            bgcolor:"#af9fef"

        },
        {
            icon:IoCartOutline,
            heading:"E-Commerce & Business Website Development",
            text:"Conversion-focused websites with payment gateway, inventory and analytics integration.",
            color:"#4E9D2C",
            bgcolor:"#b0f095"

        },
        {
            icon:BsPencilSquare,
            heading:"Website Redesign Services",
            text:"Modernise your outdated website with a fresh design, better UX and improved performance",
            color:"#F73455",
             bgcolor:"#f18e9e",
        },
        {
            icon:IoBusinessOutline,
            heading:"Corporate & Professional Website Design",
            text:"Clean, credible and professional websites that build trust and strengthen your brand.",
            color:"#189292",
            bgcolor:"#a2f8f8"

        },
        {
            icon:IoSettingsOutline,
            heading:"Website Design & Maintenance",
            text:"Keep your website secure, updated and fast with our reliable maintenance plans.",
            color:"#FE6F1C",
            bgcolor:"#f1bb9c"

        }
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2,mt:2}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600, fontSize:'24px', color:'#071B52'}}>Our Website Design and Development Services</Typography>
                <Box component={"div"} sx={{width:"75px",height:"3px",backgroundColor:"#0749C4"}}></Box>
            </Box>
            <Grid container sx={{px:{xs:1,lg:8},borderRadius:2}} >
                {
                    cardArray.map((item,index) => {

                        const Icon = item.icon

                        return(
                            <Grid size={{xs:6,sm:4,nd:3,lg:3}} key={index} sx={{border:"1px solid #94A3B8",p:0.3}}>
                                <Card  elevation={0} sx={{height:"100%",borderRadius:0,boxShadow:0}}>
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
                                            <Box sx={{ height:'80px', minWidth:'70px', bgcolor:item.bgcolor, color:item.color, display:"flex",justifyContent:"center",alignItems:"center",  borderRadius:'50%',  }}>
                                                <Icon size={40} />
                                               
                                            </Box>
                                             <Typography sx={{textAlign:"center",fontWeight:"650", color:'#071B52', fontSize:'16px'}}>{item.heading}</Typography>
                                            <Typography sx={{textAlign:"center",fontSize:"14px",height:"40%", color:'#071B52', }}>{item.text}</Typography>
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

export default WebDesignAndDevelopmentService;
