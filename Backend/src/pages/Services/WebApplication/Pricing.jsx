import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import React from 'react';
import { CommonButton } from '../../../StyledComponents/CommonButton';

const Pricing = () => {
    const cardArray = [
        {
            heading:"Starter Package",
            price:'1,25,000*',
            bType:"outlined",
            popular:false,
            content:[
                "Up to 5 Pages / Modules",
                "Responsive Design",
                "Basic Features",
                "1 Month Support"
            ]
        },
        {
            heading:"Business Package",
            price:"2,75,000*",
            bType:"contained",
            popular:true,

            content:[
                "Up to 15 Pages / Modules",
                "Advanced Features",
                "Third Party Interations",
                "3 Month Support"
            ]
        },
        {
            heading:"Enterprise Package",
            price:"5,00,000*",
            bType:"outlined",
            popular:false,
            content:[
                "Unlimited Pages / Modules",
                "Custom Integrations",
                "Scalable Architecture",
                "6 Months Support"
            ]
        },
    ]
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:2,px:{xs:1,lg:14}}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography sx={{fontWeight:600,textAlign:"center", color:'#0B2E6B', fontSize:'23px'}} >Web Application Development Packages</Typography>
                <Typography sx={{color:'#0B2E6B',fontSize:'16px'}}>Flexible pricing optons for startups,growing businesses and enterprises.</Typography>
            </Box><br />
            <Grid container spacing={2}  sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {
                    cardArray.map((item,index) => {
                        return(
                            <Grid size={{xs:12,sm:6,nd:3}} key={index}>
                                <Card  sx={{height:"100%", display:'flex', justifyContent:'center',  position: "relative",  overflow: "visible",
                                            border: item.popular ? "2px solid #f9944cb0" : "1px solid #E5E5E5",   borderRadius: 3,
                                            height: "100%",}}>
                                                {item.popular && (
                                                        <Box
                                                          sx={{
                                                            position: "absolute",
                                                            top: -20,
                                                            left: "50%",
                                                            transform: "translateX(-50%)",
                                                            bgcolor: "#fb7413",
                                                            color: "#fff",
                                                            px: 0,
                                                            py: 0.5,
                                                            borderRadius: "10px 10px 0 0",
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
                                                <Typography sx={{fontSize:"2rem",fontWeight:600, color:'#0B2E6B'}}>₹{item.price}</Typography>
                                                <Typography sx={{fontSize:"0.7rem", color:'#0B2E6B', width:'100%', justifyContent:'center', textAlign:'center'}}>Onwards</Typography>
                                            </Box>
                                            <Box sx={{px:7,display:"flex",flexDirection:"column",gap:1}}>
                                               {
                                                item.content.map((subitem,subindex) => {
                                                    return (
                                                        <Box key={subindex} sx={{display:"flex",alignItems:"center",gap:1}}>
                                                            <DoneOutlinedIcon sx={{fontSize:"0.8rem",fontWeight:660, color:'#FD6A02'}}/>
                                                            <Typography sx={{fontSize:"0.8rem", color:'#0B2E6B', fontWeight:550}}>{subitem}</Typography>
                                                        </Box>
                                                    )
                                                })
                                               }
                                                <CommonButton sx={{width:"100%", }} variant={item.bType}>Get Started</CommonButton>
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

export default Pricing;
