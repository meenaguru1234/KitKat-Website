import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";


const FaqMatrimony = () => {
    const id = React.useId();
    const leftarray = [
        {
            id:1,
            ques:"How much does it cost to develop a matrimony website?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:2,
            ques:"How long does it take to build a matrimony website?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:3,
            ques:"Will I get the source code and full ownership?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
   
     
    ]

     const middlearray = [
      
      
         {
            id:4,
            ques:"Can you customize the website for my community?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:5,
            ques:"Do you provide app support for matrimony websites?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:6,
            ques:"Is my users' data secure on your platform?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
   
    ]

    const rightarray = [
        {
            id:7,
            ques:"Do you provide hosting and domain support?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:8,
            ques:"Do you provide post-launch support?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
          {
            id:9,
            ques:"Where is Kitkat Software Technologies located?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
                 
    ]


    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2, mt:-1, mb:2,}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography component={'h1'} variant='h5' sx={{fontWeight:650, color:'#071B52', fontSize:'22px'}}>Freaquently Asked Questions</Typography>
                {/* <Box component={"div"} sx={{width:"75px",height:"2px",backgroundColor:"#0749C4"}}></Box> */}
            </Box>
            {/* <Box> */}
                  <Grid containerspacing={3} sx={{display:'flex',justifyContent:'center' , px:2,gap:2,
            display:'flex', flexDirection:{xs:'column', md:'row'}, flexWrap:'nowrap', height:'100%', width:{xs:700, md:1500}} }>

                     <Grid item xs={12} md={4} sx={{gap:2, }}>
                         <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {
                       leftarray.map((item,index) => {
                            return (
                                    <Grid size={{xs:12,sm:6}} key={index}>
                                        <Accordion sx={{boxShadow:"0"}} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                            <AccordionSummary sx={{borderRadius:2,border:"2px solid #EBF0F3",}}
                                            expandIcon={expanded === item.id  ? <RemoveIcon /> : <AddIcon />}
                                            aria-controls={`${id}-panel1-content`}
                                            id={`${id}-panel1-header`}
                                            >
                                            <Typography component="span" sx={{color:'#0B2E6B', fontSize:13}}> {item.ques}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{color:'#0B2E6B'}}>
                                           {item.ans}
                                            </AccordionDetails>
                                        </Accordion>          
                                    </Grid>
                            )
                        })
                    }

                    </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>

                         <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

                    {
                        middlearray.map((item,index) => {
                            return (
                                    <Grid size={{xs:12,sm:6}} key={index}>
                                        <Accordion sx={{boxShadow:"0"}} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                            <AccordionSummary sx={{borderRadius:2,border:"2px solid #EBF0F3",}}
                                            expandIcon={expanded === item.id  ? <RemoveIcon /> : <AddIcon />}
                                            aria-controls={`${id}-panel1-content`}
                                            id={`${id}-panel1-header`}
                                            >
                                            <Typography component="span" sx={{color:'#0B2E6B', fontSize:13}}> {item.ques}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{color:'#0B2E6B'}}>
                                           {item.ans}
                                            </AccordionDetails>
                                        </Accordion>          
                                    </Grid>
                            )
                        })
                    }
                    </Box>
                    </Grid>

                         <Grid item xs={12} md={4}>

                         <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

                    {
                        rightarray.map((item,index) => {
                            return (
                                    <Grid size={{xs:12,sm:6}} key={index}>
                                        <Accordion sx={{boxShadow:"0"}} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                                            <AccordionSummary sx={{borderRadius:2,border:"2px solid #EBF0F3",}}
                                            expandIcon={expanded === item.id  ? <RemoveIcon /> : <AddIcon />}
                                            aria-controls={`${id}-panel1-content`}
                                            id={`${id}-panel1-header`}
                                            >
                                            <Typography component="span" sx={{color:'#0B2E6B', fontSize:13}}> {item.ques}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{color:'#0B2E6B'}}>
                                           {item.ans}
                                            </AccordionDetails>
                                        </Accordion>          
                                    </Grid>
                            )
                        })
                    }
                    </Box>
                    </Grid>

                    </Grid>
            </Box>
        // </Box>
    );
}

export default FaqMatrimony;