import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

const ProjectJava = () => {

   const service = [
        { 
            icon: ShoppingCartIcon, 
            label: "E-Commerce Website", 
            color: "#1976d2", 
            desc: "Online store with product catalog, cart, checkout & payment integration." 
        },
        { 
            icon: AccountBalanceIcon, 
            label: "Bank Management System", 
            color: "#00b83d", 
            desc:"Manage customers, accounts, transactions, and generate statements." 
        },
        { 
            icon: ListAltIcon, 
            label: "Task Management System", 
            color: "#8e44ad" , 
            desc:"Create, assign and track tasks with role-based access."
        },
        { 
            icon: LocalHotelIcon, 
            label: "Hotel Booking System", 
            color: "#e67e22", 
            desc:"Search rooms, booking, payments and admin management." 
        },
        { 
            icon: LocalHospitalIcon, 
            label: "Hospital Management System", 
            color: "#e91e63" , 
            desc:"Patient registration, appointments, records and billing management."
        },
        { 
            icon: ImportContactsIcon, 
            label: "Student Management System", 
            color: "#1976d2", 
            desc:"Manage student records, attendance, exams and results." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 6 }, }}>


  <Grid container spacing={3}>

         <Box sx={{width:1400, display: "flex", justifyContent: "center", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap", textAlign: "center" }}>
              
                <Typography variant="h3" sx={{ fontWeight: 700,textTransform:'uppercase', color: "#071B52", fontSize: { xs: "1rem", sm: "1rem", md: "1.4rem" } }}>
                Live Projects You Will Build
                </Typography>
               
              </Box>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center',maxWidth:'100%',}}>
                 <Grid container  justifyContent="center">
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{ xs: 6, sm: 4, md: 2 }} >
                                 
                               <Box sx={{height:'100%', width:'220px', gap:4, display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:0, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 200 , gap:2}}>
                                 
                               <Box  sx={{   display: "flex",  alignItems: "center",  justifyContent: "center",   }}>
                                    <Icon sx={{  color: item.color,  fontSize: 50, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: '#071B52', fontSize:'16px', textAlign: "center" , lineHeight:1.5,}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, }}>
                                      {item.desc}
                                 </Typography>
                              

                            </Box>
                               </Box>
                            </Grid>
                            </>
                        )

                    })
                
                }

                <Typography sx={{display:'flex', justifyContent:'center', width:'100%'}}><StarIcon sx={{color:'yellow'}}/> All projects include complete source code, documentation and deployment.</Typography>
                  </Grid>
            </Grid>

        </Grid>

        
    </Box>
  )
}

export default ProjectJava