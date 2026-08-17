import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
 import ailogo from "../../../assets/Images/ailogo.png"
 import figmalogo from "../../../assets/Images/figmalogo.jpg"
 import figjamlogo from "../../../assets/Images/figjamlogo.jpg"
 import mirologo from "../../../assets/Images/mirologo.png"
 import notionlogo from "../../../assets/Images/notionlogo.png"
 import pslogo from "../../../assets/Images/pslogo.jpg"
 import xdlogo from "../../../assets/Images/xdlogo.jpg"
 import plogo from "../../../assets/Images/plogo.jpg"

const ToolsUiUx = () => {



const tools = [
  { logo: figmalogo, name: "Figma" },
  { logo: figjamlogo, name: "FigJam" },
  { logo: pslogo, name: "Photoshop" },
  { logo: ailogo, name: "Illustrator" },
  { logo: xdlogo, name: "Adobe XD" },
  { logo:plogo, name:" Principle"},
  { logo: mirologo, name: "Miro" },
  { logo: notionlogo, name: "Notion" },
];


const firstTools = tools.slice(0, 1);
const secondTools = tools.slice(1,2)
const middleTools = tools.slice(2, 7);
const lastTools = tools.slice(7);

    return (
       <Box sx={{ display:'flex', justifyContent:'center', mb:4}}>

              
                <Grid size={{ xs: 12, md: 4}} sx={{ flexWrap:'wrap'}}>
                    <Box sx={{gap:3,display:'flex', justifyContent:'center', alignItems:'center',}}>
                        <Box sx={{color:'#195aff', border:'2px solid #195aff', width:'45px'} }/>
                   <Box component='span'> <Typography sx={{ fontWeight: 800, color: "#195aff", fontSize: { xs: "1.4rem", md: "1.5rem" }, textAlign:'center' }}>
                      Tools You Will Master
                    </Typography></Box>
                    <Box sx={{color:'#195aff', border:'2px solid #195aff', width:'45px'} }/>

                    </Box>
                     <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:3}}>
                           <Grid container spacing={1} sx={{border:'1px solid #dde3f6', borderRadius:3, py:2, px:3}} size={{xs:12, nd:3}}>
                                                    {
                                                        firstTools.map((item,index) => {
                                                            const Icon = item.icon
                                                            return (
                                                                <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex", flexDirection:'row', }}>
                                                                    <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:2}, flexWrap:'wrap'}}>
                                                                        <Box component="img" src={figmalogo} sx={{width: "50px",height: "50px",objectFit: "contain",display: "block", }}/>
                                                                       
                                                                         <Box sx={{display:"flex",flexDirection:"column"}}>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.name}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                        </Grid>

                        <Grid container spacing={1} sx={{border:'1px solid #dde3f6', borderRadius:3, py:2, px:3}} size={{xs:12, nd:3}}>
                                                    {
                                                        secondTools.map((item,index) => {
                                                            const Icon = item.icon
                                                            return (
                                                                <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex", flexDirection:'row', }}>
                                                                    <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:2}, justifyContent:'space-between', flexWrap:'wrap'}}>
                                                                       <Box component="img" src={figjamlogo} sx={{width: "50px",height: "50px",objectFit: "contain",display: "block", }}/>
                                                                      
                                                                        <Box sx={{display:"flex",flexDirection:"column"}}>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.name}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                        </Grid>

                        <Grid container spacing={1} sx={{border:'1px solid #dde3f6', borderRadius:3, py:2, px:3}} size={{xs:12, nd:3}}>
                                                    {
                                                        middleTools.map((item,index) => {
                                                            const Icon = item.icon
                                                            return (
                                                                <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex", flexDirection:'row', }}>
                                                                    <Box sx={{width:{},display:"flex",gap:1,alignItems:"center",px:{sm:1.5,md:2}, justifyContent:'space-between', flexWrap:'wrap'}}>
                                                                        <Box component="img" src={item.logo} sx={{width: "50px",height: "50px",objectFit: "contain",display: "block", }}/>
                                                                         <Box sx={{display:"flex",flexDirection:"column"}}>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.name}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                         </Grid>

                        <Grid container spacing={1} sx={{border:'1px solid #dde3f6', borderRadius:3, py:2, px:3}} size={{xs:12, nd:3}}>
                                                    {
                                                        lastTools.map((item,index) => {
                                                            const Icon = item.icon
                                                            return (
                                                                <Grid size={{xs:item.xs,lg:item.nd}} sx={{ }}>
                                                                    <Box sx={{width:{},display:"flex",gap:1,alignItems:"center", 
                                                                    px:{sm:1.5,md:2}, justifyContent:'center',flexDirection:'row', flexWrap:'wrap'}}>
                                                                        <Box>
                                                                            <Box component="img" src={notionlogo} sx={{width: "50px",height: "50px",objectFit: "contain",display: "block", }}/>
                                                                       
                                                                        </Box>
                                                                         <Box sx={{}}>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"0.8rem",color:'#071B52'}}}>{item.name}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                </Grid>
                                                            )
                                                        })
                                                    }
                        </Grid>

                     </Box>
               


                </Grid>

           </Box>
    );
};

export default ToolsUiUx;