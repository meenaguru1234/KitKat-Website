import { Box, Grid, Typography } from '@mui/material'
import React from 'react';
import MonitorIcon from '@mui/icons-material/Monitor';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StorageIcon from '@mui/icons-material/Storage';
import GppGoodIcon from '@mui/icons-material/GppGood';
import PeopleIcon from '@mui/icons-material/People';

const DataService = () => {

   const service = [
        { 
            icon: MonitorIcon, 
            label: "Business Intelligence Services & BI Solutions", 
            color: "#051749", 
            desc: "Interactive dashboards and BI solutions using Power BI, Tableau & Looker Studio tailored to your business." 
        },
        { 
            icon: DashboardIcon, 
            label: "Data Visualization & Dashboard Development", 
            color: "#051749", 
            desc:"Clear, interactive dashboards with drill-down analytics that turn complex data into easy-to-understand visuals." 
        },
        { 
            icon: EditDocumentIcon, 
            label: "Data Reporting & Business Reporting", 
            color: "#051749" , 
            desc:"Automated reports that save time, reduce errors, and keep stakeholders informed with accurate data."
        },
        { 
            icon: PsychologyIcon, 
            label: "Predictive Analytics Services", 
            color: "#051749", 
            desc:"Forecast demand, sales, and customer behavior using advanced statistical models and machine learning." 
        },
        { 
            icon: AccessTimeIcon, 
            label: "Real-Time Data Analytics & Operational Analytics", 
            color: "#051749" , 
            desc:"Live dashboards and alerts that help operations teams monitor performance and act instantly."
        },
        { 
            icon: StorageIcon, 
            label: "Data Integration & ETL Services", 
            color: "#051749" , 
            desc:"Integrate data from multiple sources and automate ETL processes for clean, reliable, and consistent data."
        },
        { 
            icon: GppGoodIcon, 
            label: "Data Governance & Quality Management", 
            color: "#051749", 
            desc:" Ensure data accuracy, security, compliance, and consistency with strong governance frameworks." 
        },
         { 
            icon: PeopleIcon, 
            label: "Data Analytics Consulting & Strategy", 
            color: "#051749", 
            desc:"Expert consulting to define KPIs, analytics roadmap, and build a data-driven culture in your organization." 
        },
      ];

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 4 }, }}>


  <Grid container spacing={3} sx={{border:'1px solid #ecf0f783', bgcolor:'#ecf0f783', borderRadius:5}}>

            <Grid size={{ xs: 12 }} sx={{ textAlign: "center" , maxWidth:'100%', textAlign:'center'}}>
                <Typography  variant="h4" sx={{ fontWeight: 800, color: "#051749", fontSize: { xs: "1.6rem", md: "2.2rem" }, textAlign:'center' }}>Our Digital Marketing Services</Typography>
            </Grid>

            <Grid size={{xs:12}}  sx={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly',maxWidth:1500, gap:5, px:5, py:3, 
                }}>
                 <Grid container spacing={1} justifyContent="center">
               { 
                    service.map((item, index)=>{
                        const Icon = item.icon;

                        return(
                            <>
                              <Grid key={index} size={{  xs: 12, sm: 6, md: 4, lg: 3}} >
                                 
                               <Box sx={{height:'100%', width:'280px', gap:2, display:'flex', justifyContent:'center', 
                               flexWrap:'wrap', px:4, border:'1px solid #E5E7EB', borderRadius:5, py:3, bgcolor:'white'
                               }}>
                                  <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 280 , gap:2}}>
                                 
                               <Box  sx={{  display: "flex",  alignItems: "center",  justifyContent: "center",    }}>
                                    <Icon sx={{  color:item.color,  fontSize: 56, }}  />
                                    </Box> 
                                  <Typography sx={{ mt: 2, fontWeight: 700, color: item.color, fontSize:'20px', textAlign: "center" , lineHeight:1.5, mb:2}}>
                                     {item.label} 
                                </Typography>
                                 <Typography sx={{ mt:0.5, fontWeight: 500, color: "#071B52", textAlign: "center", fontSize: 14, lineHeight: 1.5 }}>
                                      {item.desc}
                                 </Typography>
                              

                            </Box>
                               </Box>
                            </Grid>
                            </>
                        )

                    })
                
                }
                  </Grid>
            </Grid>

        </Grid>

        
    </Box>
  )
}

export default DataService