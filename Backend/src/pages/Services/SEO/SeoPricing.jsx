import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import React from 'react';
import { CommonButton } from '../../../StyledComponents/CommonButton';

const SeoPricing = () => {
    const seoPackages = [
        {
            heading:"Starter SEO Package",
            price: "₹12,999",
            duration: "/ month",
            // bType:"outlined", 
            buttonColor: "#16a34a",
            popular:false,
            content:[
               "SEO Audit & Strategy",
               "On-Page Optimization",
               "Local SEO",
               "Monthly Performance Report",
               "Email Support",
            ]
        },
        {
            heading:"Growth SEO Package",
            price:"₹24,999",
             duration: "/ month",
            // bType:"contained",
            popular:true,
 buttonColor: "#ff6b00",
            content:[
                 "Everything in Starter",
                 "Technical SEO",
                 "Off-Page SEO & Link Building",
                 "Content Optimization",
                 "Monthly Reporting + Call",
            ]
        },
        {
            heading:"Pro SEO Package",
            price:"₹49,999",
            // bType:"outlined",
            duration: "/ month",
             buttonColor: "#16a34a",
            popular:false,
            content:[
                "Everything in Growth",
                "Advanced Technical SEO",
                "High Authority Link Building",
                "Competitor Analysis",
                "Dedicated SEO Consultant",
            ]
        },
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:2,px:{xs:1,lg:14}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,textAlign:"center", color:'#0B2E6B', fontSize:'1.9rem'}} >
                    Our <Box component="span" sx={{color:'#2973f4' }}>SEO</Box> Packages</Typography>
                </Box><br />
            <Grid container spacing={4}  sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                    seoPackages.map((item,index) => {
                        return(
                            <Grid size={{xs:12,sm:6,nd:4}} key={index}>
                                <Card  sx={{height:"100%", display:'flex', justifyContent:'center',  position: "relative",  overflow: "visible",
                                            border: item.popular ? "2px solid #f9944cb0" : "1px solid #E5E5E5",   borderRadius: 3,
                                            height: "100%",}}>
                                                {item.popular && (
                                                        <Box
                                                          sx={{
                                                            position: "absolute",
                                                            top: -14,
                                                            left: "50%",
                                                            transform: "translateX(-50%)",
                                                            bgcolor: "#fb7413",
                                                            color: "#fff",
                                                            px: 0,
                                                            py: 0.4,
                                                            borderRadius: "12px 12px 0 0",
                                                            fontSize: "16px",
                                                            fontWeight: 600,
                                                            width: "100%",
                                                            textAlign: "center",
                                                          }}
                                                        >
                                                          Most Popular
                                                        </Box>
                                                )}
                                    <CardContent sx={{height:"100%"}}>
                                        <Box sx={{display:"flex",flexDirection:"column",gap:2, alignItems:'center', justifyContent:'center'}}>
                                            <Box sx={{display:"flex",flexDirection:"column",alignSelf:"center"}}>
                                                <Typography sx={{fontWeight:600, color:'#062356'}}>{item.heading}</Typography>
                                                <Typography sx={{fontSize:"2rem",fontWeight:600, color:'#0B2E6B'}}>{item.price} <Typography  component="span" variant="body2" >{item.duration} </Typography></Typography>
                                                
                                            </Box>
                                            <Box sx={{px:7,display:"flex",flexDirection:"column",gap:1}}>
                                               {
                                                item.content.map((subitem,subindex) => {
                                                    return (
                                                        <Box key={subindex} sx={{display:"flex",alignItems:"center",gap:1}}>
                                                            <DoneOutlinedIcon sx={{fontSize:"0.8rem",fontWeight:660, color:'#041f4e'}}/>
                                                            <Typography sx={{fontSize:"0.8rem", color:'#0B2E6B', fontWeight:550}}>{subitem}</Typography>
                                                        </Box>
                                                    )
                                                })
                                               }
                                                <CommonButton     fullWidth variant="contained" sx={{ mt: 4,bgcolor: item.buttonColor,
                                                 "&:hover": {bgcolor: item.buttonColor, }, }}>Get Started</CommonButton>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                })
                }
            </Grid>
            <Box sx={{alignSelf:"center"}}>
                <Typography sx={{fontSize:"1rem", color:'#0B2E6B'}}>*Prices are indicative Final cost depends on projects requirements</Typography>
            </Box>
        </Box>
    );
}

export default SeoPricing;
