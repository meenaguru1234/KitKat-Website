import Box from '@mui/material/Box';
import React, { useState } from 'react';
// import KitKatLogo from "../assets/Images/KitKatLogo.png"
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import Grid from '@mui/material/Grid';
// import { CommonButton } from '../StyledComponents/CommonButton';
import { Link } from "react-router-dom";
import { TextField, Select, MenuItem, Button, FormControl, InputLabel } from '@mui/material';

const TrainingFooter = () => {
    const [course, setCourse] = useState("");

    const [bookdemo, setBookDemo] = useState({
        name:"",
        mob:'',
        email:"",
        selectcourse:""
    })


const handlesubmit = (e) =>{
    e.preventDefault()

      alert("Submit Clicked");
   console.log( bookdemo);

   setBookDemo({
       name:"",
        mob:'',
        email:"",
        selectcourse:""
   })
   

}

const handleChange = (e)=>{
    const { name, value } = e.target;

    setBookDemo({
        ...bookdemo,
        [name]: value
    });
    
}



    return (
    <Box>
         <Box sx={{backgroundColor:"#f8f8f8",mt:2,p:5,py:2}}>

            <Grid container spacing={{xs:2,lg:0}} sx={{display:"flex",pb:1, border:'1px solid #f8f8f8', justifyContent:'space-between', 
                bgcolor:'#f8f8f8', pt:1, width:'100%'}}>
                <Grid size={{xs:12,sm:6,md:5,lg:4}} sx={{display:"flex",flexDirection:"column",alignItems:{xs:'center',md:"start"},gap:2,
                border:'1px solid #0e2d58', bgcolor:'#08046d', borderRadius:5, padding:3, lineHeight:2}}>
                     <Typography component={'h2'} sx={{fontweight:800, color:"white",fontSize:"22px",textAlign:{xs:"center",md:"start"}}}>
                        Get in Touch.</Typography>
                    <Box sx={{color:"white",display:"flex", flexDirection:'row', gap:1, }}>
                       
                       <Box sx={{flex:1, display:'flex', flexDirection:'column', gap:4, fontSize:26}}>
                        <AddIcCallOutlinedIcon sx={{ color:'rgb(247, 112, 10)'}}/> 
                        <EmailIcon sx={{color:'rgb(247, 112, 10)'}}/>
                        <LanguageIcon sx={{ color:'rgb(247, 112, 10)'}}/>
                        <LocationOnIcon sx={{color:'rgb(247, 112, 10)'}}/>

                       </Box>
                       <Box sx={{ display:'flex', flexDirection:'column', gap:2}}>
                        <Box component='span'>  +91 90423 14141</Box>
                        <Box component='span'>  training@kitkatindia.com</Box>
                       < Box component='span'>  www.kitkatsoftwaretechnologies.com</Box>
                        <Box component='span'>  No.62, 2nd Floor, R.S. Puram, <br /> Coimbatore - 641 002, Tamilnadu, India.</Box>

                       </Box>
                    </Box>     
                </Grid>

                   <Grid size={{xs:12,md:6,lg:4.5}} sx={{px:3,color:"white", width:'100%', height:'300px',
                    display:"flex",flexDirection:"column",justifyContent:"space-between",}}>
                      <Box>
                    <iframe style={{borderRadius:"10px",height:'300px',width:'100%', objectFit:'cover',}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3231196547968!2d76.97610157363856!3d11.01436565476266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8584d03d410a3%3A0x79e8132c3d3cdf88!2sKitkat%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1783683945560!5m2!1sen!2sin" 
                   loading="lazy"   ></iframe>
                    
                    </Box>
                </Grid>


                  <Grid size={{xs:12,sm:6,lg:3.5}} sx={{color:"#053577",px:2, border:'1px solid white', width:'100%', bgcolor:'white', borderRadius:2, pb:2,}}>
                    <Typography component={'h1'} variant='h6' sx={{fontSize:"22px",fontWeight:600,textAlign:{xs:"center",md:"start"}}}>
                       Book a Free Demo Class</Typography>
                         <Box component={'form'} sx={{display:"flex",flexDirection:"column",gap:2}}  onSubmit={handlesubmit}>

                                        <Box>
                                            <TextField fullWidth size="small" placeholder='Enter Your Name' 
                                            onChange={handleChange} name='name' value={bookdemo.name}
                                            sx={{height:'auto', width:350}}></TextField>
                                        </Box>
                                        <Box>
                                            <TextField fullWidth size="small" placeholder='Mobile Number' 
                                            onChange={handleChange} name='mob' value={bookdemo.mob}
                                            sx={{height:'auto', width:350}}></TextField>
                                        </Box>
                                        <Box>
                                            <TextField fullWidth size="small" placeholder='Email Address' 
                                            onChange={handleChange} name='email' value={bookdemo.email}
                                            sx={{height:'auto', width:350}}></TextField>
                                        </Box>
                                           
                                           <Box>
                                                 <FormControl fullWidth size="small">
                                                        <InputLabel> Select Course</InputLabel>

                                                        <Select
                                                            // label="Select Course"
                                                            name="selectcourse"
                                                            value={bookdemo.selectcourse}
                                                            onChange={handleChange}
                                                            
                                                        >
                                                            <MenuItem value="MERN Stack">MERN Stack</MenuItem>
                                                            <MenuItem value="Java Full Stack">Java Full Stack</MenuItem>
                                                            <MenuItem value="Python Full Stack">Python Full Stack</MenuItem>
                                                            <MenuItem value="UI/UX">UI/UX</MenuItem>
                                                            <MenuItem value="Data Science">Data Science</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                     </Box>

                                                       <Box>
                                        <Button sx={{height:45, width:350, bgcolor:'#053577', color:'white',}}   type="submit">
                                            Submit</Button>
                                       </Box>
                                       </Box><br />
                                     
                   
                </Grid>
              
            </Grid>






           
        </Box>
        <Box sx={{backgroundColor:"#0e2d58",mt:4,p:3,pb:1, mt:-2}}>
        <Box sx={{color:"white",display:"flex",flexDirection:{xs:"column",sm:"row"},gap:{xs:1,sm:0},alignItems:"center",
        justifyContent:"space-between"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <CopyrightOutlinedIcon sx={{fontSize:"18px"}}/>
                    <Typography sx={{fontSize:"18px"}}>2024 KitKat Software Technologies.All Rights are Reserved</Typography>
                </Box>
                <Box sx={{display:"flex",alignItems:"center", gap:5}}>
                    <Typography sx={{fontSize:"18px"}}>Privacy Policy </Typography>
                    <Typography sx={{fontSize:"18px"}}> |</Typography>
                    <Typography sx={{fontSize:"18px"}}> Terms & conditions  </Typography>
                    <Typography sx={{fontSize:"18px"}}> |</Typography>
                    <Typography sx={{fontSize:"18px"}}> Refund Policy</Typography>

                    {/* <Typography sx={{fontSize:"20px"}}>hello@kitkat.com</Typography> */}
                </Box>
            </Box>
</Box>
    </Box>




    );
}

export default TrainingFooter;