import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import heroimg from "../../../assets/Images/product/allproducts/heroimg.png";


import { CommonButton } from "../../../StyledComponents/CommonButton";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";



const HeroProduct = () => {



  return (
        <Box sx={{    position: "relative", bgcolor: "#fff", overflow: "hidden",}}>
            <Grid container sx={{}}>
               
                <Grid size={{xs:12,md:7}} sx={{bgcolor:'#041030', py:10, px:4}} >
      
                    <Box sx={{height:"auto",display:"flex",flexDirection:"column", }}>
                        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"space-evenly",flexGrow:1,p:{xs:2,},pl:{xs:2,lg:4},gap:{xs:2,}}}>
                            <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
                                <Typography component={'h1'} variant="h3" sx={{fontSize:{lg:"3rem"},fontWeight:"700", color:'white',}}>
                                                               
                             Our <Box component='span' sx={{color:'#09f363', fontSize:'3rem'}}>Products</Box> </Typography>
      
                             <Box sx={{width:'75px',  height: 3,     bgcolor: "#0eb850",  borderRadius: 2,}}/>



                                   <Typography sx={{color:'white' , fontSize:22 }} >

                                    Powerful, Scalable & Smart Software Solutions <br />
                                    Built to Simplify Your Business Operations.
                                    
                                    </Typography>
                            </Box>

                          
                         
                           
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 5}}>
                    <Box sx={{position: "relative",width: "auto",overflow: "hidden", 
                        
                    }}>
                        <Box component="img" src={heroimg} sx={{width: "100%",height:'50%',objectFit: "cover",display: "block", }}/>

    {/* Fade Effect */}
                        <Box sx={{   position: "absolute",
                               inset: 0,
                               background:
                                 "linear-gradient(to right, #041030 0%, rgba(7,22,62,.85) 18%, rgba(7,22,62,.35) 35%, transparent 100%)",
                               pointerEvents: "none",
                        }}
                        />

                      
                    </Box>
                </Grid>


            </Grid>

              
        </Box>
  );
};

export default HeroProduct