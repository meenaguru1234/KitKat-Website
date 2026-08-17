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


const FaqMern = () => {
    const id = React.useId();
  const leftarray = [
        {
            id:1,
            ques:"What is a full stack developer?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:2,
            ques:"Which full stack course is best for beginners?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:3,
            ques:"What is the duration of the full stack developer course?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:4,
            ques:"Do you provide placement assistance?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
       
    ]


    const rightarray =  [
           {
            id:5,
            ques:"is coding knowledge required to join this course?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
         {
            id:6,
            ques:"Will i get a certificate after the course?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
            {
            id:7,
            ques:"Can I pay the course fee in installments?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
            {
            id:8,
            ques:"What are the batch timings?",
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
      
    ]
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Box sx={{display:"flex",flexDirection:"column",gap:2,mt:4}}>
            <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <Typography component={'h1'} variant='h5' sx={{fontWeight:600, color:'#0B2E6B', textTransform:'uppercase'}}>Freaquently Asked Questions</Typography>
                 </Box>
            <Grid containerspacing={2} sx={{display:'flex',justifyContent:'center' , px:2,gap:2,
            display:'flex', flexDirection:{xs:'column', md:'row'}, flexWrap:'nowrap', height:'100%', width:{xs:700, md:1500}} }>

                     <Grid item xs={12} md={4} sx={{gap:2}}>
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
                                            <Typography component="span" sx={{color:'#0B2E6B', fontWeight:600}}> {item.id}.{item.ques}</Typography>
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
                                            <Typography component="span" sx={{color:'#0B2E6B', fontWeight:600}}>{item.id}. {item.ques}</Typography>
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
    );
}

export default FaqMern;