import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Button } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SchoolIcon from '@mui/icons-material/School';
import RealEstateAgentIcon from '@mui/icons-material/RealEstateAgent';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const SmartSolution = () => {

 const solutions = [
    {
        id:1,
      icon: ShoppingCartIcon,
      bg:'#85e98a71',
      color:'#2E7D32',
      title: "E-Commerce",
      text: "A complete online store solution to help you sell products, manage orders, payments, shipping & customers seamlessly.",
      feature:[
       " Product & Inventory Management",
        " Secure Payments",
       " Order & Delivery Tracking",
        "Customer Management"
      ]
    },
    {
        id:2,
     icon: GroupIcon,
      bg:'#dcadf66d',
 color:'#a502fd',
      title: "CRM",
      text: "Build stronger relationships and boost sales with our feature-rich Customer Relationship Management solution.",
      feature:[
       "Lead & Opportunity Management",
        "Customer Communication",
       " Sales Pipeline Tracking",
        "Reports & Analytics"
      ]
    },   
    {
        id:3,
    icon: TrendingUpIcon,
    bg:'#afcef267',
   color:'#1565C0',
      title: "ERP",
      text: "An integrated enterprise solution to manage all your business processes in one unified platform.",
      feature:[
       "Finance & Accounting",
        "HR & Payroll",
       "Inventory & Supply Chain",
        "Reports & Dashboard"
      ]
    },
    {
        id:4,
         icon: FingerprintIcon,
         bg:'#fdc3c26f',
      color:'#E53935',
      title: "Biometric Based HRM",
      text: "Smart HR management system with biometric attendance and advanced HR tools to simplify workforce management.",
      feature:[
       "Biometric Attendance",
        "Employee Information System",
        "Payroll Management",
        "Leaves & Approvals"
      ]
    },
    {
        id:5,
         icon: SchoolIcon,
         bg:'#85e98a92',
 color:'#2E7D32',
      title: "School ERP",
      text: "A comprehensive solution for schools to manage students, staff, academics, fees and more efficiently.",
      feature:[
      "Student Information System",
        "Attendance Management",
        "Exams & Marks",
        "Fees Management"
      ]
    },
    {
        id:6,
         icon: RealEstateAgentIcon,
         bg:'#f6d8b596',
        color:'#FB8C00',
      title: "Gold Loan Management",
      text: "Streamline your gold loan business with our secure and reliable Gold Loan Management System.",
      feature:[
       "Gold Appraisal & Valuation",
        "Loan Management",
        "Interest & EMI Tracking",
        "Reports & Statements"
      ]
    },
    {
        id:7,
         icon: GroupIcon,
         bg:'#f69dcf77',
       color:'#fd0290',
      title: "Matrimonial Website",
      text: "A feature-rich matrimonial platform to connect people and build meaningful relationships.",
      feature:[
        "User Profiles & Matching",
        "Search & Filters",
        "Chat & Interest Management",
        "Secure & Scalable"
      ]
    },
    {
        id:8,
         icon: MedicalServicesIcon,
         bg:'#b1d6f68c',
       color:'#1E88E5',
      title: "Medical Billing",
      text: "Simplify patient billing and hospital management with our smart Medical Billing solution.",
      feature:[
            "Patient Management",
            "Billing & Invoicing",
            "Insurance Management",
            "Reports & Analytics"
      ]
    },
    {
        id:9,
         icon: AccountBalanceIcon,
         bg:'#e7abf782',
      color:'#8E24AA',
      title: "Mini Banking",
      text: "A mini banking solution to manage customer accounts, transactions, loans and daily banking operations.",
      feature:[
       "Account Management",
        "Deposit & Withdrawal",
        "Loan Management",
        "Transaction Reports"
      ]
    },
   
  ];


  return (
    <>

           <Box sx={{ textAlign:'center',py:'5'}}>
     
       <Box
  sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    mb: 2,
    flexDirection:'column',
    py:2
  }}
>


  {/* Heading */}
  <Typography
    component="h2"
    sx={{
      fontSize: { xs: "2rem", md: "2.2rem" },
      fontWeight: 700,
      color: "#071B52",
      textAlign: "center",
    }}
  >
   Smart Solutions for Every Business Need
  </Typography>

 
  <Box
    sx={{
      width: 70,
      height: 3,
      bgcolor: "#0eb850",
      borderRadius: 2,
    }}
  />
</Box>

<Typography
  sx={{
    textAlign: "center",
    color: "#555",
    fontSize: "1rem",
    mb: 5,
  }}
>
  Explore our range of innovative software products designed to automate,<br /> simplify and grow your business.
</Typography>
      </Box>    <br />
  <Box   sx={{
    maxWidth: "1300px",
    m: "auto",      // Center
    // px: 2,
    // marginLeft:'10%'
  }}>
      <Grid container spacing={5} justifyContent="center">
  {solutions.map((item) => {
    const Icon = item.icon;

    return (
     <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
        <Box
          sx={{
            border: "1px solid #E5E5E5",
            borderRadius: "15px",
            p: 3,
            textAlign: "center",
            height: "100%",
            transition: ".3s",
            "&:hover": {
              boxShadow: 5,
              transform: "translateY(-6px)",
            },
          }}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              bgcolor: item.bg,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mx: "auto",
              mb: 2,
            }}
          >
            <Icon sx={{ color: item.color, fontSize: 35 }} />
          </Box>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#071B52",
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: ".95rem",
              lineHeight: 1.6,
              mb:2
            }}
          >
            {item.text}
          </Typography>

            {
                item.feature.map((solmap, index)=>(
                    <Grid key={index} size={{xs:12}} sx={{display:'flex', justifyContent:'flex-start', gap:2,mb:1}}>

                        <Box>
                          <Typography sx={{gap:2, width:'auto', display:'flex', justifyContent:'flex-start', color:'#666',  fontSize: ".95rem",}}> 
                            <Box component={'span'} sx={{width:18,height:18, borderRadius:5, border:'1px solid green',bgcolor:'green' , }}>
                                <DoneIcon sx={{ fontSize: ".95rem", textAlign:'center', color:'white', mb:1}}/> 
                            </Box>

                             {solmap}
                             </Typography>
                        </Box>


                    </Grid>
                ))
            }

            <Box>
                <Button endIcon={<ArrowRightAltIcon/>} sx={{border:'1px solid #0eb850', color:'#0eb850', textTransform:'none', fontStyle:'italic'}}>
                Learn More</Button>
            </Box>


        </Box>
      </Grid>
    );
  })}
</Grid>
  </Box>
        
    
    </>
  )
}

export default SmartSolution