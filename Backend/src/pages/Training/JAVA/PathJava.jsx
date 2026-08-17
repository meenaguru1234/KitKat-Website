import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const PathJava = () => {

   const service = [
        { 
           
            label: "Core Java", 
            desc: "Build strong programming fundamentals." 
        },
        { 
           
            label: "Advanced Java", 
            desc:"Master OOPs, Collections, Multithreading & more." 
        },
        { 
          
            label: "JDBC & SQL", 
            desc:"Work with databases and write efficient SQL queries."
        },
        { 
         
            label: "Web Development with Servlets & JSP", 
            desc:"Build dynamic web applications" 
        },
        { 
       
            label: "Frameworks", 
            desc:"Spring Boot & Hibernate."
        },
        { 
            
            label: "Build, Deploy & Get Placed", 
            desc:" Kickstart your career as a Java Developer." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={1}>

         <Box sx={{width:1400, display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap", textAlign: "center" }}>
               
                <Typography variant="h3" sx={{ fontWeight: 700,textTransform:'uppercase', color: "#071B52", fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" } }}>
              Java Course Path - From Core Java to Spring Boot
                </Typography>
            
              </Box>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'nowrap', justifyContent:'center', alignItems:'center',
                maxWidth:'100%', gap:1, px:4, }}>
                 <Grid container spacing={1} justifyContent="center">
             <Box  sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap",overflowX: "auto",
                                    pb: 2, }}>
                    {service.map((item, index) => (
                        <React.Fragment key={index}>
                                {/* CARD */}
                                <Box  sx={{ width: 180,  minWidth: 180,   height: 190,    display: "flex", justifyContent: "center",
          alignItems: "center", flexDirection: "column", textAlign: "center",  border: "1px solid #E5E7EB",  borderRadius: 3,
          px: 1.5,      py: 2,    bgcolor: "white",   boxSizing: "border-box", }}  >
                <Typography  sx={{ fontWeight: 700,  color: "#071B52",fontSize: "16px",  lineHeight: 1.2,    mb: 2,  }}  >
                    {item.label}
                </Typography>

               <Typography sx={{    fontWeight: 500, color: "#071B52", fontSize: "14px",  lineHeight: 1.5, }}>
                 {item.desc}
               </Typography>
             </Box>
            
             {/* ARROW */}
             {index !== service.length - 1 && (
               <Box
                 sx={{
                   width: 55,
                   minWidth: 55,
                   height: 190,
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   flexShrink: 0,
                //    border:'2px solid red'
                 }}
               >
                 <ArrowForwardIcon
                   sx={{
                     color: "#1749E8",
                     fontSize: "1.5rem",
                   }}
                 />
               </Box>
             )}
        
           </React.Fragment>
         ))}
</Box>
                  </Grid>
            </Grid>

        </Grid>

        
    </Box>
  )
}

export default PathJava