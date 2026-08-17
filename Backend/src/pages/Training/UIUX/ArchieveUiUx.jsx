import { Box, Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import { PiUserFocus } from "react-icons/pi";
import { SiParadoxinteractive } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiTransportforlondon } from "react-icons/si";
import { TbReport } from "react-icons/tb";

const ArchieveUiUx = () => {



const tools = [
  { icon: PiUserFocus, name: "Design User-friendly ",subname:"web & mobile-apps" },
  { icon: SiParadoxinteractive, name: "Create Interactive ", subname:"prototypes" },
  { icon: BsClipboardDataFill, name: "Work on real ", subname:'client projects' },
  { icon: SiTransportforlondon, name: "Built a strong " , subname:"portfolio"},
  { icon: TbReport, name: "Get Placement " , subname:"support"},
];



    return (
       <Box sx={{ display:'flex', justifyContent:'center', mb:4}}>

              
                <Grid size={{ xs: 12, md: 4}} sx={{ flexWrap:'wrap'}}>
                    <Box sx={{gap:3,display:'flex', justifyContent:'center', alignItems:'center',}}>
                        <Box sx={{color:'#195aff', border:'2px solid #195aff', width:'45px'} }/>
                   <Box component='span'> <Typography sx={{ fontWeight: 800, color: "#332bc5", fontSize: { xs: "1.4rem", md: "1.5rem" }, textAlign:'center' }}>
                     What You Will Archieve
                    </Typography></Box>
                    <Box sx={{color:'#195aff', border:'2px solid #195aff', width:'45px'} }/>

                    </Box>
                     <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', alignItems:'center', gap:3}}>
                          

                         
                        <Grid container spacing={1} sx={{border:'1px solid #dde3f6', borderRadius:3, py:2, px:3,m:3, display:'flex', justifyContent:'center'}} size={{xs:12, nd:3}}>
                                                    {
                                                        tools.map((item,index) => {
                                                            const Icon = item.icon
                                                            return (
                                                                <Grid size={{xs:item.xs,lg:item.nd}} sx={{display:"flex", flexDirection:'row', }}>
                                                                    <Box sx={{display:"flex",gap:1,alignItems:"center",
                                                                    px:{sm:1.5,md:4}, justifyContent:'space-between', flexWrap:'wrap',
                                                                    borderRight:index!= tools.length-1 ? "1px solid #dde3f6" : "none"}}>
                                                                       <Icon size={40} color='#332bc5' />
                                                                         <Box sx={{display:"flex",flexDirection:"column", px:2}}>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"1rem",color:'#041c5e'}}}>{item.name}</Typography>
                                                                              <Typography sx={{fontSize:{xs:"0.55rem",sm:"0.9rem",lg:"1rem",color:'#041c5e'}}}>{item.subname}</Typography>

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

export default ArchieveUiUx;