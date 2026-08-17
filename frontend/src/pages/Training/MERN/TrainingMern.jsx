import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HerosecImage from '../../../assets/Images/HerosecImage.png'
import React from 'react';
import Typography from '@mui/material/Typography';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import { CommonButton } from '../../../StyledComponents/CommonButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SyllabusTable from './SyllabusTable';
import PersonIcon from '@mui/icons-material/Person';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PersonPinIcon from '@mui/icons-material/PersonPin';


const TrainingMern = () => {
    const trainingarray = [
        {
            icon:PersonIcon,
            text:"Industry Expert",
            text1:"Trainers",
            sub:"Learn from Working",
            sub1:'professionals'
        },
        {
             icon:DeveloperBoardIcon,
               text:"Project-First",
            text1:"Approach",
            sub:"Build real project",
            sub1:'not just theory'
        },
        {
             icon:SavedSearchIcon,
           text:"Placement",
            text1:"Focused",
            sub:"Mock interview, resume",
            sub1:'building & soft skills'
        },
        {
            icon:AccountCircleIcon,
              text:"Small Batch",
            text1:"Size",
            sub:"Personalized attention",
            sub1:'& doubt clearing'
        },
        {
            icon:ImportContactsIcon,
               text:"Updated",
            text1:"Curriculum",
            sub:"Syllabus updated every",
            sub1:'quarter'
        },
          {
             icon:WebAssetIcon,
            text:"Interview",
            text1:"Preparation",
            sub:"Aptitude, technical & ",
            sub1:'HR round training'
        },
     
       
    ]


    const patnarsarray = [
        {
            number:'500+',
            text:'Students Trained'
        },
           {
            number:'200+',
            text:'Placements'
        },
           {
            number:'50+',
            text:'Hiring patners'
        }
    ]




    return (
        <Box sx={{mt:4,px:{xs:1,lg:8},}}>
              
                        <Box sx={{display:'flex', justifyContent:'center'}}>
                            <Typography sx={{fontSize:'1.4rem', color:'#071B52', textTransform:'uppercase', fontWeight:700,  }}>
                              why Kitkat is the best Full Stack Training Institute in Coimbatore?
                                </Typography>
                        </Box>

                        <Box sx={{border:'1px solid #f8f4f4', display:'flex', justifyContent:'center' , borderRadius:3, bgcolor:'#f8f4f4'}}>
            <Grid container spacing={1} sx={{ width:1800}}>

               
               
                <Grid size={{xs:12,lg:8}} sx={{}} >
                    
                    <Grid container sx={{height:"100%",}}>

                      
                      <Box sx={{height:"auto",gap:2,p:4,color:"#001E4E",borderRadius:2, }}>
                        {/* <Typography component={'h1'} variant='h5' sx={{fontWeight:600, textTransform:'uppercase'}}>Course Details</Typography> */}
                       
                     <Box sx={{display:"flex",flexDirection:"row", justifyContent:'center',}}>

                        {
                            trainingarray.map((item, index)=>{
                                const Icon = item.icon

                                return (
                                    <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap', gap:2, lineHeight:3, mb:2, px:2,
                                        borderRight: index != trainingarray.length - 1 ? '1px solid #c8c6c6' : "none"
                                    }}>

                                        <Box  sx={{display:'flex', justifyContent:'center'}}>
                                            <Icon sx={{fontSize:'2.5rem'}} />
                                            </Box>

                                         <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
                                          <Typography sx={{fontSize:'0.9rem', fontWeight:700, color:'#061938'}}>{item.text}</Typography>
                                          <Typography sx={{fontSize:'0.9rem', fontWeight:700, color:'#061938'}}>{item.text1}</Typography>
                                          <Typography  sx={{fontSize:'0.7rem', }}>{item.sub}</Typography>
                                          <Typography  sx={{fontSize:'0.7rem', }}>{item.sub1}</Typography>


                                          </Box>

                                        </Box>
                                      

                                )
                            })
                        }
                        
                        
                    </Box>
                       
                       
                       
                         </Box> 
                    </Grid>
                </Grid>
                <Grid size={{xs:12,md:12,lg:4}}  sx={{px:2, display:"flex",flexDirection:"column",borderRadius:2,}}>
                    <Box sx={{height:"100%", py:4 }}>
                        <Box sx={{height:"auto",p:2,borderRadius:2, border:'1px solid #001E4E', bgcolor:'#001E4E', }}>
  <Box sx={{display:"flex",flexDirection:"row", justifyContent:'center', width:400, gap:5}}>

                        {
                            patnarsarray.map((item, index)=>{
                                const Icon = item.icon

                                return (
                                    <Box sx={{display:'flex', flexDirection:'column', flexWrap:'wrap', gap:2, lineHeight:3, mb:2, px:2,
                                            borderRight: index != patnarsarray.length - 1 ? '1px solid #e9edf9' : "none"
                                      
                                    }}>

                                       

                                         <Box sx={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center',
                                         }}>
                                          <Typography sx={{fontSize:'1.7rem', fontWeight:700, color:'yellow'}}>{item.number}</Typography>
                                           <Typography  sx={{fontSize:'0.7rem', color:"white",}}>{item.text}</Typography>
                                          

                                          </Box>

                                        </Box>
                                      

                                )
                            })
                        }
                        
                        
                    </Box>


</Box>

                       
                         </Box>
                </Grid>
            </Grid>
        </Box>
        </Box>
    );
}

export default TrainingMern;
